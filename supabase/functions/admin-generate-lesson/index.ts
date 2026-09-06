// Draft a lesson body with Claude, for the /admin/lecons editor.
//
// Why an Edge Function: the Anthropic key must never reach the browser, and the
// caller must be a real platform admin — both are checked here. The function is
// stateless: it returns a draft, it does not write to the database. Saving is
// the editor's job (RLS on karatou_courses already restricts writes to admins),
// so a bad generation can never overwrite a published lesson on its own.
//
// Requires the secret ANTHROPIC_API_KEY:
//   supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
// Optional: LESSON_MODEL to pin another model than the default below.
import { createClient } from 'jsr:@supabase/supabase-js@2';
import Anthropic from 'npm:@anthropic-ai/sdk@0.124.0';

const DEFAULT_MODEL = 'claude-opus-5';

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
// fields the app owns: id, lessonNumber and the video URLs. `strict: true`
// makes the API validate the arguments against this schema.
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
          body: { type: 'string', description: '2 to 4 paragraphs separated by \\n\\n.' },
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
} as const;

const SYSTEM_PROMPT = `You write lessons for Karatou Academy, an online school for learners in Niger and French-speaking West and Central Africa. Your readers are students and working professionals, often on a phone and a slow connection, frequently studying in their second or third language.

Editorial standard:
- Concrete before abstract. Every concept is anchored in a situation the reader recognises: a cooperative, a clinic, an NGO field office, a small shop, a ministry, a tontine.
- Plain sentences. No corporate filler, no "in today's fast-paced world", no marketing tone. Never flatter the reader.
- Honest about limits. If a tool or method fails in low-connectivity or low-budget settings, say so.
- Examples are African by default, and specific: name a city, a crop, a currency amount in FCFA, a real constraint.
- The learner must be able to do something at the end, not just recognise a definition.

You always answer by calling the emit_lesson tool exactly once. Never write the lesson as prose in your reply.`;

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
    ``,
    `Call emit_lesson with the complete lesson.`,
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
    JSON.stringify(body.source, null, 2),
    ``,
    `Call emit_lesson with the localised lesson.`,
  ].join('\n');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  try {
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

    const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
    if (!apiKey) {
      return json({ error: 'ANTHROPIC_API_KEY is not set on this project — the generator is unavailable.' }, 503);
    }

    const body = await req.json().catch(() => ({}));
    const action = typeof body.action === 'string' ? body.action : 'generate';
    if (action !== 'generate' && action !== 'translate') return json({ error: 'unknown action' }, 400);
    if (action === 'translate' && (typeof body.source !== 'object' || body.source === null)) {
      return json({ error: 'source lesson required to translate' }, 400);
    }

    const anthropic = new Anthropic({ apiKey });
    // Streamed: a full lesson is a long completion, and streaming keeps the
    // request from hitting the platform's HTTP timeout.
    const stream = anthropic.messages.stream({
      model: Deno.env.get('LESSON_MODEL') || DEFAULT_MODEL,
      max_tokens: 16000,
      thinking: { type: 'adaptive' },
      // `medium` rather than the default `high`: drafting a lesson is writing,
      // not deep reasoning, and the Edge Function runs under a wall-clock limit.
      output_config: { effort: 'medium' },
      system: SYSTEM_PROMPT,
      tools: [
        {
          name: 'emit_lesson',
          description: 'Return the complete lesson body.',
          strict: true,
          input_schema: LESSON_SCHEMA,
        },
      ],
      messages: [
        {
          role: 'user',
          content: action === 'translate' ? translationPrompt(body) : generationPrompt(body),
        },
      ],
    });

    const message = await stream.finalMessage();
    const toolUse = message.content.find(
      (block) => block.type === 'tool_use' && block.name === 'emit_lesson'
    );
    if (!toolUse || toolUse.type !== 'tool_use') {
      const refusal = message.stop_reason === 'refusal'
        ? 'the model declined this request'
        : `the model returned no lesson (stop_reason: ${message.stop_reason})`;
      return json({ error: refusal }, 502);
    }

    return json(
      {
        lesson: {
          ...(toolUse.input as Record<string, unknown>),
          id: body.courseId,
          lessonNumber: body.lessonNumber,
        },
        usage: {
          input_tokens: message.usage.input_tokens,
          output_tokens: message.usage.output_tokens,
        },
        model: message.model,
      },
      200
    );
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : 'unexpected error' }, 500);
  }
});
