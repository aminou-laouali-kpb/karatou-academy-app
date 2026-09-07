// Draft a lesson body with an LLM, for the /admin/lecons editor.
//
// Why an Edge Function: the model API key must never reach the browser, and the
// caller must be a real platform admin — both are checked here. The function is
// stateless: it returns a draft, it does not write to the database. Saving is
// the editor's job (RLS on karatou_courses already restricts writes to admins),
// so a bad generation can never overwrite a published lesson on its own.
//
// Provider: OpenRouter (OpenAI-compatible /chat/completions), default model
// z-ai/glm-5.3-flash. Requires the secret OPENROUTER_API_KEY:
//   supabase secrets set OPENROUTER_API_KEY=sk-or-v1-...
// Optional: LESSON_MODEL to point at another OpenRouter model.
import { createClient } from 'jsr:@supabase/supabase-js@2';

const DEFAULT_MODEL = 'z-ai/glm-5.3-flash';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
// An Edge Function runs under a wall-clock limit; fail with a readable message
// rather than being killed mid-flight. Measured: ~15 s for a full lesson with
// the settings below, so this is a wide margin, not a target.
const REQUEST_TIMEOUT_MS = 110_000;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
}

const LANGUAGE_NAMES: Record<string, string> = {
  fr: 'français',
  en: 'English',
  ha: 'Hausa',
};

// Mirrors the LessonContent interface (src/data/lessonContent.ts) minus the
// fields the app owns: id, lessonNumber and the video URLs. Sent as a strict
// JSON schema, so the provider constrains the model to this exact shape.
const LESSON_SCHEMA = {
  type: 'object',
  properties: {
    title: { type: 'string', description: 'Lesson title, 4 to 12 words.' },
    objective: { type: 'string', description: 'One paragraph: what the learner can do after the lesson.' },
    content: {
      type: 'array',
      description: '3 to 5 teaching sections, in reading order.',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          body: { type: 'string', description: '2 to 4 paragraphs separated by a blank line.' },
        },
        required: ['title', 'body'],
        additionalProperties: false,
      },
    },
    example: {
      type: 'object',
      description: 'A worked example set in West/Central Africa.',
      properties: {
        title: { type: 'string' },
        challenge: { type: 'string' },
        solution: { type: 'string' },
        impact: { type: 'string' },
      },
      required: ['title', 'challenge', 'solution', 'impact'],
      additionalProperties: false,
    },
    practice: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        instructions: { type: 'array', description: '3 to 5 actionable steps.', items: { type: 'string' } },
        observation: { type: 'string', description: 'What a good answer looks like.' },
      },
      required: ['title', 'instructions', 'observation'],
      additionalProperties: false,
    },
    quiz: {
      type: 'array',
      description: '3 to 5 multiple-choice questions.',
      items: {
        type: 'object',
        properties: {
          question: { type: 'string' },
          options: {
            type: 'array',
            description: 'Exactly 4 options with keys "a", "b", "c", "d".',
            items: {
              type: 'object',
              properties: {
                key: { type: 'string', enum: ['a', 'b', 'c', 'd'] },
                text: { type: 'string' },
              },
              required: ['key', 'text'],
              additionalProperties: false,
            },
          },
          answer: { type: 'string', enum: ['a', 'b', 'c', 'd'], description: 'Key of the correct option.' },
          explanation: { type: 'string' },
        },
        required: ['question', 'options', 'answer', 'explanation'],
        additionalProperties: false,
      },
    },
    reflection: { type: 'string', description: 'One open question tying the lesson to the learner’s own work.' },
    glossary: {
      type: 'array',
      description: '3 to 6 key terms.',
      items: {
        type: 'object',
        properties: {
          term: { type: 'string' },
          definition: { type: 'string' },
        },
        required: ['term', 'definition'],
        additionalProperties: false,
      },
    },
  },
  required: ['title', 'objective', 'content', 'example', 'practice', 'quiz', 'reflection', 'glossary'],
  additionalProperties: false,
};

const SYSTEM_PROMPT = `You write lessons for Karatou Academy, an online school for learners in Niger and French-speaking West and Central Africa. Your readers are students and working professionals, often on a phone and a slow connection, frequently studying in their second or third language.

Editorial standard:
- Concrete before abstract. Every concept is anchored in a situation the reader recognises: a cooperative, a clinic, an NGO field office, a small shop, a ministry, a tontine.
- Plain sentences. No corporate filler, no "in today's fast-paced world", no marketing tone. Never flatter the reader.
- Honest about limits. If a tool or method fails in low-connectivity or low-budget settings, say so.
- Examples are African by default, and specific: name a city, a crop, a currency amount in FCFA, a real constraint.
- The learner must be able to do something at the end, not just recognise a definition.

Answer with the JSON object required by the schema, and nothing else.`;

function generationPrompt(body: Record<string, unknown>): string {
  const language = String(body.language || 'fr');
  const guidance = String(body.guidance || '').trim();

  return [
    `Write lesson ${body.lessonNumber} of the "${body.moduleTitle}" course (module slug: ${body.moduleSlug}).`,
    ``,
    `Lesson title (may be refined): ${body.courseTitle}`,
    `Lesson summary: ${body.courseDescription || '(none provided)'}`,
    `Planned duration: ${body.duration || '15 min'} — size the content so it can honestly be read and practised in that time.`,
    `Write everything in ${LANGUAGE_NAMES[language] || language}.`,
    guidance ? `\nAdditional instructions from the editor:\n${guidance}` : '',
  ].join('\n');
}

function translationPrompt(body: Record<string, unknown>): string {
  const language = String(body.language || 'en');

  return [
    `Localise the lesson below into ${LANGUAGE_NAMES[language] || language}.`,
    ``,
    `Rules:`,
    `- Keep the same structure: same number of sections, same quiz questions in the same order, same option keys, the same correct answer key.`,
    `- Translate meaning, not words. Adapt an example only when the original would not be understood by the target reader; keep names, places and FCFA amounts.`,
    `- Keep technical terms that are used in that language in practice (e.g. "prompt", "dataset") rather than inventing a translation.`,
    language === 'ha'
      ? `- Write natural Hausa as spoken in Niger and northern Nigeria — plain and direct, not a literal word-for-word rendering of the French.`
      : '',
    ``,
    `Source lesson (JSON):`,
    JSON.stringify(body.source),
  ].join('\n');
}

interface CompletionResponse {
  choices?: { message?: { content?: string | null }; finish_reason?: string }[];
  usage?: { prompt_tokens?: number; completion_tokens?: number; cost?: number };
  model?: string;
  provider?: string;
  error?: { message?: string };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  try {
    // Configuration probe. Deliberately before the admin check and deliberately
    // cheap: it calls no model and returns no secret, only whether a key is
    // configured and which model would be used. That is the same information the
    // admin UI already surfaces, and it makes "is the generator wired up?"
    // answerable without an admin session or a single token spent.
    const probe = await req.clone().json().catch(() => ({}));
    if (probe?.action === 'health') {
      const configuredKey = Deno.env.get('OPENROUTER_API_KEY');
      const health: Record<string, unknown> = {
        ok: true,
        keyConfigured: Boolean(configuredKey),
        model: Deno.env.get('LESSON_MODEL') || DEFAULT_MODEL,
      };

      // `deep` additionally proves that this runtime can reach the provider and
      // that the stored key is live. It reads the provider's key-metadata
      // endpoint, which runs no model and costs nothing, and reports booleans
      // plus the account's own spend — never the key itself.
      if (probe?.deep === true && configuredKey) {
        try {
          const check = await fetch('https://openrouter.ai/api/v1/key', {
            headers: { Authorization: `Bearer ${configuredKey}` },
            signal: AbortSignal.timeout(15_000),
          });
          const detail = await check.json().catch(() => ({}));
          health.egressOk = true;
          health.keyValid = check.ok;
          health.usage = detail?.data?.usage ?? null;
          if (!check.ok) health.keyError = detail?.error?.message ?? `HTTP ${check.status}`;
        } catch (e) {
          health.egressOk = false;
          health.keyValid = false;
          health.keyError = e instanceof Error ? e.message : 'egress failed';
        }
      }

      return json(health, 200);
    }

    const url = Deno.env.get('SUPABASE_URL')!;
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const authHeader = req.headers.get('Authorization') ?? '';

    // Only platform admins may spend tokens here.
    const caller = createClient(url, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false },
    });
    const { data: { user }, error: authError } = await caller.auth.getUser();
    if (authError || !user) return json({ error: 'unauthorized' }, 401);
    const role = (user.app_metadata as { role?: string } | null)?.role;
    if (role !== 'platform_admin' && role !== 'admin') {
      return json({ error: 'forbidden: platform admin required' }, 403);
    }

    const apiKey = Deno.env.get('OPENROUTER_API_KEY');
    if (!apiKey) {
      return json({ error: 'OPENROUTER_API_KEY is not set on this project — the generator is unavailable.' }, 503);
    }

    const body = await req.json().catch(() => ({}));
    const action = typeof body.action === 'string' ? body.action : 'generate';
    if (action !== 'generate' && action !== 'translate') return json({ error: 'unknown action' }, 400);
    if (action === 'translate' && (typeof body.source !== 'object' || body.source === null)) {
      return json({ error: 'source lesson required to translate' }, 400);
    }

    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        // OpenRouter attribution headers (optional, but they identify the app
        // in the dashboard and in provider rankings).
        'HTTP-Referer': 'https://karatou.academy',
        'X-Title': 'Karatou Academy',
      },
      body: JSON.stringify({
        model: Deno.env.get('LESSON_MODEL') || DEFAULT_MODEL,
        max_tokens: 16000,
        // Drafting a lesson is writing, not deep reasoning: low effort keeps a
        // full lesson around 15 s instead of several minutes.
        reasoning: { effort: 'low' },
        // Route to the fastest provider serving this model — the function runs
        // under a wall-clock limit, and providers differ by more than 10x here.
        provider: { sort: 'throughput' },
        response_format: {
          type: 'json_schema',
          json_schema: { name: 'lesson', strict: true, schema: LESSON_SCHEMA },
        },
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: action === 'translate' ? translationPrompt(body) : generationPrompt(body) },
        ],
      }),
    });

    const payload: CompletionResponse = await response.json().catch(() => ({}));
    if (!response.ok || payload.error) {
      const detail = payload.error?.message || `HTTP ${response.status}`;
      return json({ error: `the model provider refused the request (${detail})` }, 502);
    }

    const choice = payload.choices?.[0];
    if (choice?.finish_reason === 'length') {
      return json({ error: 'the model ran out of output budget before finishing the lesson — try again' }, 502);
    }

    let lesson: unknown;
    try {
      lesson = JSON.parse(choice?.message?.content || '');
    } catch {
      return json({ error: 'the model returned something that is not a lesson' }, 502);
    }
    if (typeof lesson !== 'object' || lesson === null) {
      return json({ error: 'the model returned something that is not a lesson' }, 502);
    }

    return json(
      {
        lesson: {
          ...(lesson as Record<string, unknown>),
          id: body.courseId,
          lessonNumber: body.lessonNumber,
        },
        usage: {
          input_tokens: payload.usage?.prompt_tokens ?? 0,
          output_tokens: payload.usage?.completion_tokens ?? 0,
          cost: payload.usage?.cost ?? 0,
        },
        model: payload.model,
        provider: payload.provider,
      },
      200
    );
  } catch (e) {
    if (e instanceof DOMException && e.name === 'TimeoutError') {
      return json({ error: 'the model took too long to answer — try again' }, 504);
    }
    return json({ error: e instanceof Error ? e.message : 'unexpected error' }, 500);
  }
});
