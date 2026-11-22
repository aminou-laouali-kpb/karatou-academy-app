import { Language } from './translations';
import { LessonContent, lesson1 } from './lessonContent';
import { Course, LearningModule } from '../types';

type CourseCopy = Pick<Course, 'title' | 'description'>;
type ModuleCopy = {
  title: string;
  subtitle: string;
  description: string;
  level: string;
  courses: Record<string, CourseCopy>;
};

const copy: Record<Language, Record<string, ModuleCopy>> = {
  fr: {},
  en: {
    'intelligence-artificielle': {
      title: 'Artificial Intelligence',
      subtitle: 'Foundations & Applications',
      description: 'Master core AI concepts and apply them to your own professional context.',
      level: 'Beginner',
      courses: {
        c1: { title: 'Introduction to AI', description: 'Understand what AI can and cannot do.' },
        c2: { title: 'Understanding LLMs', description: 'Identify the strengths and limits of large language models.' },
        c3: { title: 'Prompt Engineering', description: 'Write effective instructions for professional use cases.' },
        c4: { title: 'AI in your organization', description: 'Choose the right use cases for your organization.' },
        c5: { title: 'Task automation', description: 'Automate a simple process while keeping human control.' },
        c6: { title: 'AI ethics and bias', description: 'Recognize risks, bias and essential controls.' },
        c7: { title: 'Practical AI tools', description: 'Compare useful AI tools for learning, production and analysis.' },
        c8: { title: 'Final assessment', description: 'Validate skills and issue the digital certificate.' },
      },
    },
    'data-analysis': {
      title: 'Data Analysis',
      subtitle: 'Excel -> Python -> Insights',
      description: 'Move from Excel to Python and turn data into strategic decisions.',
      level: 'Intermediate',
      courses: {
        d1: { title: 'Clean an Excel file', description: 'Identify common errors and prepare a dataset.' },
        d2: { title: 'Pivot tables and indicators', description: 'Build readable indicators for a field team.' },
        d3: { title: 'Introduction to Python', description: 'Read a CSV and calculate simple statistics.' },
        d4: { title: 'Visualize results', description: 'Choose the right chart for the business question.' },
        d5: { title: 'Tell the analysis story', description: 'Turn a result into a clear decision.' },
        d6: { title: 'Data mini-project', description: 'Produce a small complete and verifiable report.' },
      },
    },
    'gestion-projet': {
      title: 'Project Management',
      subtitle: 'Agile & Digital',
      description: 'Run projects with agile methods adapted to African contexts.',
      level: 'Beginner',
      courses: {
        p1: { title: 'Frame a project', description: 'Define objective, users, constraints and expected results.' },
        p2: { title: 'Prioritize the MVP', description: 'Choose what must be tested now and what can wait.' },
        p3: { title: 'Organize a sprint', description: 'Plan one week of work with clear deliverables.' },
        p4: { title: 'Track risks', description: 'Identify blockers before they slow down the team.' },
        p5: { title: 'Retrospective and improvement', description: 'Help the team improve after each cycle.' },
      },
    },
    'introduction-claude-ai': {
      title: 'Introduction to Claude AI',
      subtitle: 'Using an AI assistant day to day',
      description: 'Get started with Claude step by step: write a clear request, work on your own documents and check answers before using them.',
      level: 'Beginner',
      courses: {
        cl1: { title: 'What is Claude?', description: 'Understand what Claude is, where to reach it and what not to expect from it.' },
        cl2: { title: 'Writing a good request', description: 'The four ingredients of a clear instruction: context, task, format, example.' },
        cl3: { title: 'Working with your own documents', description: 'Upload a PDF or a table, summarize, extract and translate.' },
        cl4: { title: 'Everyday practical uses', description: 'Draft, translate, prepare a meeting and read a simple table.' },
        cl5: { title: 'Limits, verification and privacy', description: 'Spot plausible errors and protect sensitive data.' },
        cl6: { title: 'Final assessment', description: 'Validate skills and issue the digital certificate.' },
      },
    },
    'ia-expliquee-simplement': {
      title: 'AI Explained Simply',
      subtitle: 'Understand, use, avoid the pitfalls',
      description: "Karatou Academy's entry course: spot AI around you, understand how it learns, talk to it with the RCTF method and keep three reflexes in the face of its limits.",
      level: 'Beginner',
      courses: {
        is1: { title: "You're already using AI", description: 'Spot AI on your phone and explain it simply.' },
        is2: { title: 'How an AI learns', description: 'Understand that an AI learns from examples and gives the most likely answer.' },
        is3: { title: 'Your first conversation with an AI assistant', description: 'Talk with a free AI assistant and follow up until you get a useful result.' },
        is4: { title: 'Asking well: the RCTF method', description: 'Write a clear instruction in four blocks: role, context, task, format.' },
        is5: { title: 'What AI is changing in Africa', description: 'Weigh, with sources, the opportunities and risks for your job.' },
        is6: { title: 'The limits of AI: three reflexes', description: 'Verify, protect and question when facing AI errors and bias.' },
        is7: { title: 'Final project: solve a real problem with AI', description: 'Solve and document a real problem with AI, and earn the certificate.' },
      },
    },
    'creer-agents-ia': {
      title: 'How to Create AI Agents',
      subtitle: 'Five methods, from the simplest to the most powerful',
      description: 'Create an AI agent that helps your work by choosing the right method among five: projects and skills, scheduled agents, connectors and MCP, n8n workflows, persistent agents, with a human always in control.',
      level: 'Intermediate',
      courses: {
        ag1: { title: 'AI agent or simple assistant: the difference, and the 5 methods to create an agent', description: 'Recognize an agent, describe it in six parts and choose the method to create yours.' },
        ag2: { title: 'Method 1: create an agent with a Claude project, a GPT or a Gem', description: 'An on-demand agent, with instructions and files set up once and for all.' },
        ag3: { title: 'Method 2: schedule an agent that works on its own at a set time', description: 'One task and one schedule: the agent runs on its own, every day or every week.' },
        ag4: { title: 'Method 3: connect your agent to Gmail, your calendar and Drive', description: 'Plug an agent into your tools with connectors and MCP, with minimum access.' },
        ag5: { title: 'Method 4: automate a sequence of tasks with n8n', description: 'An agent workflow that starts on its own when an event happens.' },
        ag6: { title: 'Method 5: an agent that answers day and night on WhatsApp or Telegram', description: 'Persistent agents, a Telegram prototype and the rules of official WhatsApp.' },
        ag7: { title: 'Protecting your agent: human approval, data and tests', description: 'Safeguards that keep the human in control: approval, data, ten tests.' },
        ag8: { title: 'Final project: build, test and document your own agent', description: 'Build, test and document your agent, and earn the certificate.' },
      },
    },
    'ia-administration': {
      title: 'AI for Public Administration',
      subtitle: 'Letters, minutes, summaries and reports',
      description: 'Prepare letters, meeting minutes, summaries of regulatory texts and activity reports with AI, without disclosing anything and staying in charge: AI prepares, the officer checks, the signatory is accountable.',
      level: 'Beginner',
      courses: {
        ad1: { title: 'Write an administrative letter with AI, without disclosing data', description: "A draft letter in the right tone, from anonymized details and your office's template." },
        ad2: { title: 'Turn your meeting notes into official minutes with AI', description: 'Faithful minutes with an action table, ready for approval.' },
        ad3: { title: 'Summarize a regulatory text with AI and check every article', description: 'A summary of a public text, with each point checked against the text in force.' },
        ad4: { title: 'Write an activity report with AI, from your verified figures', description: 'A report that separates facts, analysis and recommendations, based on recalculated figures.' },
        ad5: { title: 'Final project: prepare a complete meeting file with AI', description: 'The complete file for a meeting and its checklist, to earn the certificate.' },
      },
    },
    'outils-ia-gratuits': {
      title: 'Choose the Right Free AI Tool and Install an Open Source AI',
      subtitle: 'Online or installed on your device',
      description: 'For each task, choose a suitable free AI tool, tested and set up to protect your data, then install an open source AI on your phone or computer to use it offline.',
      level: 'Beginner',
      courses: {
        og1: { title: 'Choose the right AI tool family for each task', description: 'The five families of AI tools, and the difference between the app and the model.' },
        og2: { title: 'Compare Gemini, ChatGPT, Claude and Copilot on your own task', description: 'The same instruction in four assistants, a four-criteria grid and a plan B.' },
        og3: { title: 'Get a sourced answer from AI and check every source', description: 'A sourced answer, with each source opened, dated and checked.' },
        og4: { title: 'Free or paid AI: what you really trade, and how to protect your data', description: 'What free really costs, and the settings that protect your data.' },
        og5: { title: 'Install an open source AI on your phone, to use it offline', description: 'A small open source model on your phone, downloaded once, usable in airplane mode.' },
        og6: { title: 'Install an open source AI on your computer with LM Studio', description: "Read a model's size, check your RAM, then install and test a model with LM Studio." },
        og7: { title: 'Final project: build your AI toolkit, online and installed', description: 'Your justified AI toolkit, with one installed tool, to earn the certificate.' },
      },
    },
  },
  ha: {
    'intelligence-artificielle': {
      title: 'Fasahar Hankali ta AI',
      subtitle: 'Tushen ilimi & Aiki',
      description: 'Koyi tushen AI kuma yi amfani da shi a aikinka.',
      level: 'Mai farawa',
      courses: {
        c1: { title: 'Gabatarwa ga AI', description: 'Fahimci abin da AI zai iya yi da abin da ba zai iya yi ba.' },
        c2: { title: 'Fahimtar LLMs', description: 'San karfi da iyakar manyan tsarin harshe.' },
        c3: { title: 'Rubuta prompt', description: 'Rubuta umarni masu inganci don aikin yau da kullum.' },
        c4: { title: 'AI a kungiyarka', description: 'Zabi amfani da ya dace a kungiyarka.' },
        c5: { title: 'Sarrafa ayyuka kai tsaye', description: 'Sauwaka aiki ba tare da rasa kulawar mutum ba.' },
        c6: { title: 'Da a da son zuciya a AI', description: 'Gane hadari, son zuciya da matakan kariya.' },
        c7: { title: 'Kayan aikin AI', description: 'Kwatanta kayan AI don koyo, samarwa da nazari.' },
        c8: { title: 'Jarabawar karshe', description: 'Tabbatar da kwarewa kuma fitar da takarda.' },
      },
    },
    'data-analysis': {
      title: 'Nazarin Bayanai',
      subtitle: 'Excel -> Python -> Fahimta',
      description: 'Daga Excel zuwa Python, juya bayanai zuwa shawara.',
      level: 'Matsakaici',
      courses: {
        d1: { title: 'Gyara fayil din Excel', description: 'Gano kurakurai kuma shirya bayanai.' },
        d2: { title: 'Teburin pivot da alamomi', description: 'Gina alamomi masu sauki ga tawaga.' },
        d3: { title: 'Gabatarwa ga Python', description: 'Karanta CSV kuma lissafa kididdiga.' },
        d4: { title: 'Nuna sakamako', description: 'Zabi jadawali da ya dace da tambaya.' },
        d5: { title: 'Bayyana labarin nazari', description: 'Mayar da sakamako zuwa shawara.' },
        d6: { title: 'Karamin aikin bayanai', description: 'Fitar da rahoto karami mai tabbatarwa.' },
      },
    },
    'gestion-projet': {
      title: 'Gudanar da Aiki',
      subtitle: 'Agile & Digital',
      description: 'Gudanar da ayyuka da hanyoyin agile da suka dace da Afirka.',
      level: 'Mai farawa',
      courses: {
        p1: { title: 'Tsara aiki', description: 'Bayyana buri, masu amfani, iyaka da sakamako.' },
        p2: { title: 'Zabi MVP', description: 'Zabi abin da za a gwada yanzu da wanda zai jira.' },
        p3: { title: 'Shirya sprint', description: 'Tsara mako daya da abubuwan bayarwa.' },
        p4: { title: 'Bibiyar hadari', description: 'Gano matsala kafin ta hana aiki.' },
        p5: { title: 'Bita da ingantawa', description: 'Inganta tawaga bayan kowane zagaye.' },
      },
    },
    'introduction-claude-ai': {
      title: 'Gabatarwa ga Claude AI',
      subtitle: 'Amfani da mataimakin AI kullum',
      description: 'Koyi amfani da Claude mataki-mataki: rubuta bukata a fili, yin aiki da takardunka, da tantance amsoshi kafin amfani.',
      level: 'Mai farawa',
      courses: {
        cl1: { title: 'Menene Claude?', description: 'Fahimci menene Claude, inda za ka same shi da abin da bai kamata ka sa rai ba.' },
        cl2: { title: 'Rubuta bukata mai kyau', description: 'Sinadarai hudu na umarni bayyananne: mahalli, aiki, tsari, misali.' },
        cl3: { title: 'Aiki da takardunka', description: 'Aika PDF ko tebur, takaitawa, ciro bayanai da fassara.' },
        cl4: { title: 'Amfani na yau da kullum', description: 'Rubutu, fassara, shirya taro da karanta tebur mai sauki.' },
        cl5: { title: 'Iyaka, tantancewa da sirri', description: 'Gano kurakurai masu kyan gani da kare bayanai masu muhimmanci.' },
        cl6: { title: 'Jarabawar karshe', description: 'Tabbatar da kwarewa kuma fitar da takarda.' },
      },
    },
    'ia-expliquee-simplement': {
      title: 'Bayanin AI a Saukake',
      subtitle: 'Fahimta, amfani, guje wa tarko',
      description: 'Darasin farko na Karatou Academy: gane AI a kewayenka, fahimci yadda AI ke koyo, yi magana da AI da hanyar RCTF, kuma rike dabi’u uku game da iyakokin AI.',
      level: 'Mai farawa',
      courses: {
        is1: { title: 'Kuna amfani da AI tuni', description: 'Gane AI a wayarka kuma bayyana shi a saukake.' },
        is2: { title: 'Yadda AI ke koyo', description: 'Fahimci cewa AI na koyo daga misalai kuma yana ba da amsar da ta fi yiwuwa.' },
        is3: { title: 'Tattaunawarku ta farko da mataimakin AI', description: 'Yi magana da mataimakin AI kyauta, kuma sake tambaya har ka sami sakamako mai amfani.' },
        is4: { title: 'Yadda ake tambaya da kyau: hanyar RCTF', description: 'Rubuta umarni bayyananne a sassa hudu: rawa, mahalli, aiki, tsari.' },
        is5: { title: 'Abin da AI ke canzawa a Afirka', description: 'Tare da majiyoyi, auna damammaki da hadurran AI ga sana’arka.' },
        is6: { title: 'Iyakokin AI: dabi’u uku', description: 'Tantance, kare, tambaya a gaban kurakurai da son kai (bias) na AI.' },
        is7: { title: 'Aikin karshe: warware matsala ta gaske da AI', description: 'Warware matsala ta gaske da AI, rubuta yadda ka yi, kuma ka sami takardar shaida.' },
      },
    },
    'creer-agents-ia': {
      title: 'Yadda Ake Kirkirar Wakilan AI',
      subtitle: 'Hanyoyi biyar, daga mafi sauki zuwa mafi karfi',
      description: 'Kirkiri wakilin AI (agent) mai amfani a aikinka ta zabar hanyar da ta dace cikin biyar: projects da skills, agents masu aiki a lokaci kayyadadde, connectors da MCP, workflows na n8n, da agents na dindindin, kuma mutum ne ke rike da iko.',
      level: 'Matsakaici',
      courses: {
        ag1: { title: 'Agent na AI ko mataimaki kawai: bambancin, da hanyoyi 5 na kirkirar agent', description: 'Gane agent, bayyana shi a sassa shida, kuma zabi hanyar kirkirar naka.' },
        ag2: { title: 'Hanya ta 1: kirkirar wakilin AI da project na Claude, GPT ko Gem', description: 'Agent da ke aiki idan ka nema, da umarni da fayiloli da aka saka sau daya.' },
        ag3: { title: 'Hanya ta 2: tsara wakilin AI da ke aiki shi kadai a lokaci kayyadadde', description: 'Aiki daya da lokaci daya: agent na aiki shi kadai, kowace rana ko kowane mako.' },
        ag4: { title: 'Hanya ta 3: hada agent dinku da Gmail, kalanda da Drive', description: 'Hada agent da kayan aikinka ta connectors da MCP, da mafi karancin izini.' },
        ag5: { title: 'Hanya ta 4: sarrafa jerin ayyuka kai tsaye da n8n', description: 'Workflow na agent da ke farawa shi kadai idan wani abu ya faru.' },
        ag6: { title: 'Hanya ta 5: wakilin AI da ke amsawa dare da rana a WhatsApp ko Telegram', description: 'Agents na dindindin, samfurin gwaji a Telegram da dokokin WhatsApp na hukuma.' },
        ag7: { title: 'Kare agent dinku: amincewar mutum, bayanai da gwaje-gwaje', description: 'Matakan kariya da ke barin mutum a matsayin mai iko: amincewa, bayanai, gwaje-gwaje goma.' },
        ag8: { title: 'Aikin karshe: kirkira, gwadawa da rubuta bayanin agent naku', description: 'Kirkira, gwada kuma rubuta bayanin agent naka, kuma ka sami takardar shaida.' },
      },
    },
    'ia-administration': {
      title: 'AI don Ayyukan Hukuma',
      subtitle: 'Wasiku, rahoton taro, takaitawa da rahotanni',
      description: 'Shirya wasiku, rahoton taro (procès-verbal), takaitawar rubutun doka da rahoton ayyuka da AI, ba tare da tona wani bayani ba kuma kana rike da iko: AI na shiryawa, ma’aikaci na tantancewa, mai sa hannu na daukar alhaki.',
      level: 'Mai farawa',
      courses: {
        ad1: { title: 'Rubuta wasikar hukuma da AI, ba tare da tona wani bayani ba', description: 'Daftarin wasika a salon da ya dace, daga bayanan da aka boye sunaye da samfurin ofishinka.' },
        ad2: { title: 'Mayar da bayanan taro zuwa rahoton taro (procès-verbal) da AI', description: 'Rahoton taro daidai da abin da aka fada, da teburin ayyuka, a shirye don amincewa.' },
        ad3: { title: 'Takaita rubutun doka da AI, kuma ku tabbatar da kowane article', description: 'Takaitawar rubutun doka da aka wallafa, kowane batu an duba shi a rubutun da ke aiki yanzu.' },
        ad4: { title: 'Rubuta rahoton ayyuka da AI, daga kididdigar ku da aka tantance', description: 'Rahoton da ke raba abubuwan da suka faru, nazari da shawarwari, bisa kididdigar da aka sake lissafawa.' },
        ad5: { title: 'Aikin karshe: shirya cikakken fayil na taro tare da AI', description: 'Cikakken fayil na taro da jerin abubuwan dubawa, don samun takardar shaida.' },
      },
    },
    'outils-ia-gratuits': {
      title: 'Zabar Kayan Aikin AI Kyauta da Ya Dace, da Shigar da AI na Open Source',
      subtitle: 'A kan layi ko an girka a na’urarka',
      description: 'Ga kowane aiki, zabi kayan aikin AI kyauta da ya dace, wanda aka gwada kuma aka saita don kare bayananka, sannan ka girka AI na open source a wayarka ko kwamfutarka don amfani ba tare da intanet ba.',
      level: 'Mai farawa',
      courses: {
        og1: { title: 'Zabar nau’in kayan aikin AI da ya dace da kowane aiki', description: 'Nau’o’in kayan aikin AI guda biyar, da bambanci tsakanin manhaja da model.' },
        og2: { title: 'Kwatanta Gemini, ChatGPT, Claude da Copilot a kan aikinku na kanku', description: 'Umarni daya a mataimaka hudu, ma’auni mai sharudda hudu da plan B.' },
        og3: { title: 'Samun amsa mai majiya daga AI da duba kowace majiya', description: 'Amsa mai majiya: kowace majiya an bude ta, an duba ranarta kuma an tantance ta.' },
        og4: { title: 'AI kyauta ko ta biya: abin da kuke musanyawa da gaske, da yadda za ku kare bayananku', description: 'Ainihin farashin abin kyauta, da saitunan da ke kare bayananka.' },
        og5: { title: 'Shigar da AI na open source a wayarku, don amfani ba tare da intanet ba', description: 'Karamin model na open source a waya, ana sauke shi sau daya, ana amfani da shi a mode avion.' },
        og6: { title: 'Sanya AI mai budadden tushe (open source) a kwamfutarku da LM Studio', description: 'Karanta girman model, duba RAM dinka, sannan ka girka kuma ka gwada model da LM Studio.' },
        og7: { title: 'Aikin karshe: ku gina akwatin kayan aikin AI naku, na kan layi da wanda aka girka', description: 'Akwatin kayan aikin AI naka tare da dalilan zabi, da kayan aiki daya da aka girka, don samun takardar shaida.' },
      },
    },
  },
};

const lesson1ByLanguage: Record<Language, LessonContent> = {
  fr: lesson1,
  en: {
    ...lesson1,
    title: "Introduction to AI — what it really is",
    objective:
      "This lesson demystifies artificial intelligence: what it is, how it learns in simple terms, and where it already shows up in daily life, at work and in development projects, anywhere in the world.",
    content: [
      {
        title: "AI is not science fiction",
        body: "Artificial intelligence is not a robot from the future. It is a tool already working alongside you on concrete problems. Unlike traditional software that follows fixed rules, AI describes computer systems able to perform tasks that normally require a form of human intelligence: understanding language, recognizing images, or supporting decisions.\n\nPicture the person who runs a rotating savings group — a tontine in West Africa, a tanda in Mexico, a chit fund in India. Over the years they can predict who will pay on time and who may struggle, simply from watching past habits. That is exactly what AI does. It is not \"magic\"; it processes information to identify patterns.\n\nThis is already an everyday reality: in a 2025 survey of humanitarian professionals across 144 countries, 93 % said they use or have used AI in their work. It does not replace human empathy, but it acts as a powerful assistant that can sort through thousands of beneficiary records or instantly translate urgent needs reported from remote areas.",
      },
      {
        title: "How AI learns",
        body: "Teaching a machine does not require complex mathematics from you, the user — it requires a large amount of good data. If AI is the engine, data is the fuel. The main process, called machine learning, lets a computer learn without being explicitly programmed for every detail.\n\nImagine showing a child thousands of photos of healthy and diseased cassava leaves. Through repetition, the child learns to recognize an infection without you explaining every vein. AI works the same way: it \"vectorizes\" information, turning text or images into numerical representations it can compare.\n\nBe careful: if the examples only show one part of the world, the model inherits that imbalance. A system trained only on European grapevine leaves will perform poorly on cassava or coffee. This is what we call bias, and lesson 6 covers it in depth.\n\nTo be reliable, such a system needs a solid data \"pipeline\" — a chain of cleaning and preparation that keeps information fresh and error-free. Without clean data, even the most sophisticated model is an empty shell, unable to produce results that mean anything for your community.",
      },
      {
        title: "The AI you already use",
        body: "You have probably used AI today without noticing, because it is built into the apps you already open. On WhatsApp, spam filters and word suggestions rely on language models. When you use a maps app to find the fastest route across town, an AI analyses live traffic data to optimize your trip.\n\nMore importantly, payment systems — M-Pesa in Kenya, Orange Money in West Africa, UPI in India, Pix in Brazil, or your bank card — use AI to detect fraud and secure your transactions by analysing millions of operations continuously.\n\nIn the humanitarian sector, 70 % of surveyed practitioners now use tools such as ChatGPT or Claude in their daily or weekly workflow to draft reports or polish professional communication. These tools, known as \"generative AI\", do more than process information: they create content — text, audio or images — saving you valuable time on administrative and technical work.",
      },
      {
        title: "AI in the field today",
        body: "AI is not only for conversation: it is already transforming agriculture, health and education, often precisely where resources are scarcest.\n\nIn agriculture, field teams use satellite imagery and pattern recognition to map water points and service pumps before they break down; elsewhere, a single leaf photo taken on a phone is enough to detect a crop disease. In health, conversational assistants support care workers — stress management advice, psychological support, symptom triage — especially where doctors are scarce. Education follows: applications such as aprendIA in the Democratic Republic of Congo use conversational agents for ongoing teacher training.\n\nThese solutions go further than off-the-shelf commercial tools because they adapt to local realities: offline operation, and understanding of the languages and dialects actually spoken. The main obstacle is not the algorithm, it is infrastructure: unstable connectivity, intermittent electricity, the cost of mobile data. In remote areas — rural Africa, South Asia, the Amazon — that material reality, far more than model performance, decides what actually works. And it is exactly that constraint which pushes people to build leaner, more agile, better targeted systems.",
      },
    ],
    example: {
      title: "An AI chatbot for training care workers",
      challenge:
        "Care workers in isolated areas had little training on child safeguarding and mental health, with almost no access to in-person trainers.",
      solution:
        "A chatbot built on Microsoft Copilot, able to answer complex questions from adults and young people anonymously, including on sensitive topics.",
      impact:
        "After the organization strengthened transparency about data protection and the anonymity of the system, adoption of the tool rose by 600 %. This shows that AI can close massive training gaps when it is culturally adapted and builds a relationship of trust with its users.",
    },
    practice: {
      title: "Test AI translation on your phone",
      instructions: [
        "Open a translation app (such as Google Translate) or an assistant (such as ChatGPT) on your phone.",
        "Use the audio or microphone function to say a complex sentence in your local language, or in the informal register you actually speak.",
        "Ask the tool to translate that sentence into English, then to rewrite it as a formal professional email.",
      ],
      observation:
        "Did the AI capture the nuance of what you said? Note one clear mistake and one striking success. This shows you how AI can bridge your everyday reality and formal written standards.",
    },
    quiz: [
      {
        question: "What is a simple definition of artificial intelligence?",
        options: [
          { key: "A", text: "A robot that thinks exactly like a human." },
          { key: "B", text: "A computer system able to recognize patterns and support decisions." },
          { key: "C", text: "A database that only stores phone numbers." },
          { key: "D", text: "A program that needs a human to give it every single instruction." },
        ],
        answer: "B",
        explanation: "AI is defined by its ability to process information in order to perform complex tasks such as pattern recognition and language understanding.",
      },
      {
        question: "What is machine learning?",
        options: [
          { key: "A", text: "A machine that learns to repair other machines." },
          { key: "B", text: "A method for removing the internet from a computer." },
          { key: "C", text: "The name of a new smartphone processor." },
          { key: "D", text: "A process where AI learns from data in order to identify patterns." },
        ],
        answer: "D",
        explanation: "Machine learning lets systems improve and learn from large sets of examples instead of following rigid, hand-written rules.",
      },
      {
        question: "In which everyday financial service is AI already used for security?",
        options: [
          { key: "A", text: "Printing banknotes." },
          { key: "B", text: "Counting coins by hand." },
          { key: "C", text: "Fraud detection in payment systems (M-Pesa, Orange Money, UPI, bank cards)." },
          { key: "D", text: "Decorating bank branches." },
        ],
        answer: "C",
        explanation: "AI analyses transaction flows in real time to spot suspicious behaviour and protect users.",
      },
      {
        question: "What is the main obstacle to deploying AI in remote areas?",
        options: [
          { key: "A", text: "Infrastructure limits (weak internet, unreliable electricity)." },
          { key: "B", text: "People do not like technology." },
          { key: "C", text: "AI only works in one language." },
          { key: "D", text: "Phones are banned in rural areas." },
        ],
        answer: "A",
        explanation: "Connectivity, electricity and the cost of mobile data are the barriers that decide what works in the field — long before model performance does.",
      },
      {
        question: "What does the term \"generative AI\" mean?",
        options: [
          { key: "A", text: "An AI that generates electricity." },
          { key: "B", text: "An AI belonging to the same generation as its users." },
          { key: "C", text: "A system able to create new content (text, images, audio)." },
          { key: "D", text: "A program that automatically deletes old files." },
        ],
        answer: "C",
        explanation: "Generative AI, such as ChatGPT or Claude, produces new original content from a written instruction.",
      },
    ],
    reflection:
      "The survey \"How are humanitarians using artificial intelligence in 2025?\" (Data Friendly Space and the Humanitarian Leadership Academy, 2,539 respondents across 144 countries) found that 93 % of surveyed professionals use or have used AI, while only 8 % of organizations report widespread institutional adoption. Why do you think such a gap exists between individual use and institutional adoption — and how does that gap affect the security of your own data?",
    glossary: [
      {
        term: "Artificial Intelligence (AI)",
        definition: "Systems able to imitate human abilities in order to understand language, recognize images and support decisions based on data.",
      },
      {
        term: "Machine Learning",
        definition: "An AI method where the computer learns from examples and data instead of following instructions written line by line.",
      },
      {
        term: "Generative AI (Gen AI)",
        definition: "A category of AI able to create new content: writing a text, generating an image, or turning speech into text.",
      },
      {
        term: "Bias",
        definition: "Errors or prejudice in an AI's results, usually caused by training data that is incomplete or not representative of a population.",
      },
      {
        term: "Data sovereignty",
        definition: "The right and control that individuals or countries hold over how their data is collected, stored and used by technology.",
      },
      {
        term: "Shadow AI",
        definition: "The use of AI tools by employees unofficially, without their organization having set any rules or oversight.",
      },
    ],
  },
  ha: {
    ...lesson1,
    title: "Gabatarwa ga AI — menene shi da gaske?",
    objective:
      "Wannan darasi yana bayyana fasahar AI a sauki: menene shi, yadda yake koyo, da inda ake amfani da shi a rayuwar yau da kullum, a wurin aiki da kuma a ayyukan ci gaba, a ko'ina a duniya.",
    content: [
      {
        title: "AI ba labarin kimiyya ba ne",
        body: "AI ba robot ne da ya zo daga nan gaba ba. Kayan aiki ne da yake aiki tare da kai yau don warware matsaloli na gaske. Ba kamar shirye-shiryen kwamfuta na gargajiya da ke bin dokoki marasa sauyi ba, AI yana nufin tsarin kwamfuta da ke iya yin ayyukan da a kan bukaci hankalin mutum: fahimtar harshe, gane hoto, ko taimakawa wajen yanke shawara.\n\nKa yi tunanin wanda yake kula da adashe — tontine a Afirka ta Yamma, tanda a Mexico, chit fund a Indiya. Bayan shekaru, ya san wa zai biya a kan lokaci da wa zai yi jinkiri, kawai daga kallon dabi'un baya. Haka AI yake aiki. Ba sihiri ba ne; yana sarrafa bayanai domin gano tsari da alamu.\n\nWannan ya riga ya zama gaskiya a fagen aiki: a wani bincike na 2025 da aka yi kan ma'aikatan jin kai a kasashe 144, kashi 93 cikin dari sun ce suna amfani ko sun taba amfani da AI a aikinsu. Ba ya maye gurbin tausayin mutum, amma yana zama mataimaki mai karfi da zai iya tsefe dubban jerin sunayen masu amfana ko ya fassara bukatun gaggawa nan take daga wurare masu nisa.",
      },
      {
        title: "Yadda AI yake koyo",
        body: "Koya wa na'ura ba ya bukatar lissafi mai wuya daga gare ka, mai amfani da shi — yana bukatar bayanai masu yawa da inganci. Idan AI shi ne injin, bayanai su ne mai. Babbar hanyar da ake bi, wato machine learning, tana bai wa kwamfuta damar koyo ba tare da an rubuta mata kowane karamin umarni ba.\n\nKa yi tunanin ka nuna wa yaro dubban hotunan ganyen rogo masu lafiya da masu cuta. Da yawan maimaitawa, yaron zai iya gane alamun cuta ba tare da ka bayyana masa kowane jijiya ba. Haka AI yake: yana mayar da rubutu ko hoto zuwa lambobi domin ya kwatanta su da juna.\n\nSai dai a kula: idan misalan sun nuna sashe daya kawai na duniya, samfurin zai gaji wannan rashin daidaito. Tsarin da aka horar da shi kan ganyen inabi na Turai kawai ba zai yi kyau kan rogo ko kofi ba. Wannan shi ake kira son zuciya (bias), kuma darasi na 6 zai yi cikakken bayani a kai.\n\nDon ya zama abin dogaro, tsarin yana bukatar kyakkyawan tsarin bayanai — jerin tsaftacewa da shiryawa da ke tabbatar da cewa bayanan sabbi ne kuma babu kurakurai. Ba tare da bayanai masu tsafta ba, ko samfurin da ya fi kowane inganci ya zama bakarariya, ba zai iya bayar da sakamako mai amfani ga al'ummarka ba.",
      },
      {
        title: "AI da kake amfani da shi tuni",
        body: "Wataruwa ka riga ka yi amfani da AI yau ba tare da ka lura ba, domin yana cikin manhajojin da kake budewa kullum. A WhatsApp, tacewar sakonnin banza da shawarwarin kalmomi suna dogara ne kan samfuran harshe. Idan ka bude manhajar taswira don neman hanya mafi sauri tsakanin unguwanni biyu, AI yana nazarin yawan ababen hawa a lokaci guda domin ya zabar maka hanya.\n\nAbin da ya fi muhimmanci, tsarin biyan kudi — M-Pesa a Kenya, Orange Money a Afirka ta Yamma, UPI a Indiya, Pix a Brazil, ko katin bankinka — suna amfani da AI don gano zamba da kare cinikinka, ta hanyar nazarin miliyoyin mu'amaloli ba tare da tsayawa ba.\n\nA bangaren jin kai, kashi 70 cikin dari na ma'aikatan da aka bincika yanzu suna amfani da kayan aiki kamar ChatGPT ko Claude a aikinsu na yau da kullum ko na mako-mako, don rubuta rahoto ko gyara sakonnin aiki. Wadannan kayan aiki, wato AI mai kirkira, ba kawai suna sarrafa bayanai ba ne: suna kirkirar sabon abu — rubutu, sauti ko hoto — suna adana maka lokaci mai daraja a ayyukan gudanarwa.",
      },
      {
        title: "AI a fagen aiki yau",
        body: "AI ba don tattaunawa kadai ba ne: ya riga ya sauya noma, lafiya da ilimi, kuma sau da yawa a inda kayan aiki suka fi karanci.\n\nA noma, tawagogin filin suna amfani da hotunan tauraron dan adam da gane alamu domin tsara wuraren ruwa da gyara famfo kafin su lalace; a wasu wurare kuwa, daukar hoton ganye daya da waya ya isa a gano cutar shuka. A lafiya, mataimaka masu tattaunawa suna taimaka wa ma'aikatan lafiya — shawara kan damuwa, taimakon tunani, da tantance alamun cuta — musamman inda likitoci suka yi karanci. Ilimi ma bai rage ba: manhajoji kamar aprendIA a Jamhuriyar Dimokuradiyyar Kongo suna amfani da wakilai masu tattaunawa don ci gaba da horar da malamai.\n\nWadannan hanyoyin sun zarce kayan aikin kasuwanci na gargajiya saboda sun dace da yanayin gida: aiki ba tare da yanar gizo ba, da fahimtar harsuna da karin harsunan da ake magana da su. Babbar matsalar ba algorithm ba ce, infrastructure ce: yanar gizo mara karko, wutar lantarki mara tabbas, da tsadar bayanan waya. A wurare masu nisa — karkarar Afirka, Kudancin Asiya, ko dajin Amazon — wannan gaskiyar ta zahiri, fiye da karfin samfurin, ita ce ke tantance abin da ke aiki da gaske. Kuma wannan kuncin shi ne ke sa a kirkiri tsarin da ya fi sauki, ya fi saurin daidaituwa kuma ya fi dacewa da bukata.",
      },
    ],
    example: {
      title: "Chatbot na AI don horar da ma'aikatan lafiya",
      challenge:
        "Ma'aikatan lafiya a wurare masu nisa ba su samu horo kan kariyar yara da lafiyar kwakwalwa ba, kuma kusan babu malaman horo a kusa da su.",
      solution:
        "An gina chatbot kan Microsoft Copilot, wanda ke amsa tambayoyi masu wuya na manya da matasa cikin sirri, har kan batutuwa masu laushi.",
      impact:
        "Bayan kungiyar ta kara bayyana yadda ake kare bayanai da tabbatar da sirrin tsarin, amfani da kayan aikin ya karu da kashi 600 cikin dari. Wannan ya nuna cewa AI na iya cike babban gibin horo idan an daidaita shi da al'ada kuma ya gina amana da masu amfani da shi.",
    },
    practice: {
      title: "Gwada fassarar AI a wayarka",
      instructions: [
        "Bude manhajar fassara (kamar Google Translate) ko mataimaki (kamar ChatGPT) a wayarka.",
        "Yi amfani da makirufo ka fadi jimla mai wuya cikin harshenka na gida, ko cikin yadda kake magana kullum.",
        "Nemi kayan aikin ya fassara jimlar zuwa Turanci, sannan ya mayar da ita email na aiki na hukuma.",
      ],
      observation:
        "AI ya fahimci ma'anar jimlarka? Rubuta kuskure daya da kuma abu daya da ya yi daidai sosai. Wannan yana nuna maka yadda AI zai iya zama gada tsakanin maganarka ta yau da kullum da ka'idojin rubutu na hukuma.",
    },
    quiz: [
      {
        question: "Menene saukin ma'anar AI?",
        options: [
          { key: "A", text: "Robot da yake tunani daidai kamar mutum." },
          { key: "B", text: "Tsarin kwamfuta da ke gane alamu kuma yana taimakawa wajen yanke shawara." },
          { key: "C", text: "Wurin adana lambobin waya kawai." },
          { key: "D", text: "Shiri da mutum zai rubuta masa kowane umarni kafin ya yi aiki." },
        ],
        answer: "B",
        explanation: "AI yana sarrafa bayanai domin yin ayyuka masu wuya kamar gane alamu da fahimtar harshe.",
      },
      {
        question: "Menene machine learning?",
        options: [
          { key: "A", text: "Na'ura da ke koyon gyara wasu na'urori." },
          { key: "B", text: "Hanyar cire yanar gizo daga kwamfuta." },
          { key: "C", text: "Sunan sabon na'urar waya." },
          { key: "D", text: "Hanyar da AI ke koyo daga bayanai domin gano alamu." },
        ],
        answer: "D",
        explanation: "Machine learning yana bai wa tsarin damar koyo daga misalai masu yawa maimakon bin dokoki da aka rubuta daya bayan daya.",
      },
      {
        question: "A wane sabis na kudi ne ake amfani da AI don tsaro?",
        options: [
          { key: "A", text: "Bugun takardun kudi." },
          { key: "B", text: "Kirga tsabar kudi da hannu." },
          { key: "C", text: "Gano zamba a tsarin biyan kudi (M-Pesa, Orange Money, UPI, katin banki)." },
          { key: "D", text: "Yin ado a ofishin banki." },
        ],
        answer: "C",
        explanation: "AI yana nazarin mu'amalolin kudi a lokaci guda domin gano dabi'a mai shakku ya kare masu amfani.",
      },
      {
        question: "Menene babbar matsala wajen kawo AI a wurare masu nisa?",
        options: [
          { key: "A", text: "Karancin more rayuwa (yanar gizo mara karfi, wutar lantarki mara tabbas)." },
          { key: "B", text: "Mutane ba sa son fasaha." },
          { key: "C", text: "AI yana aiki da harshe daya kawai." },
          { key: "D", text: "An hana amfani da waya a karkara." },
        ],
        answer: "A",
        explanation: "Yanar gizo, wutar lantarki da tsadar bayanan waya su ne ke tantance abin da ke aiki a fagen aiki, kafin ma karfin samfurin.",
      },
      {
        question: "Menene ma'anar AI mai kirkira (generative AI)?",
        options: [
          { key: "A", text: "AI da ke samar da wutar lantarki." },
          { key: "B", text: "AI da yake zamani daya da masu amfani da shi." },
          { key: "C", text: "Tsari da ke iya kirkirar sabon abu (rubutu, hoto, sauti)." },
          { key: "D", text: "Shiri da ke share tsofaffin fayiloli kai tsaye." },
        ],
        answer: "C",
        explanation: "AI mai kirkira, kamar ChatGPT ko Claude, yana samar da sabon abu daga umarnin da aka rubuta masa.",
      },
    ],
    reflection:
      "Binciken \"How are humanitarians using artificial intelligence in 2025?\" (Data Friendly Space da Humanitarian Leadership Academy, mutane 2,539 a kasashe 144) ya nuna cewa kashi 93 cikin dari na ma'aikatan da aka bincika suna amfani ko sun taba amfani da AI, amma kashi 8 cikin dari kawai na kungiyoyi ne suka ce sun shigar da AI a tsarin aikinsu gaba daya. A ganinka, me ya sa akwai wannan gibi tsakanin amfanin mutum daya da karbuwa a kungiya, kuma ta yaya hakan ke shafar tsaron bayananka?",
    glossary: [
      {
        term: "Fasahar AI",
        definition: "Tsarin da ke kwaikwayon iyawar mutum domin fahimtar harshe, gane hoto da taimakawa wajen yanke shawara bisa bayanai.",
      },
      {
        term: "Machine Learning",
        definition: "Hanyar AI inda kwamfuta ke koyo daga misalai da bayanai maimakon bin umarni da aka rubuta layi-layi.",
      },
      {
        term: "AI mai kirkira (Gen AI)",
        definition: "Nau'in AI da ke iya kirkirar sabon abu: rubuta rubutu, samar da hoto, ko mayar da murya zuwa rubutu.",
      },
      {
        term: "Son zuciya (bias)",
        definition: "Kurakurai a sakamakon AI da ke faruwa saboda bayanan horarwa ba su cika ba ko ba su wakilci dukkan jama'a ba.",
      },
      {
        term: "Mallakar bayanai",
        definition: "Hakkin mutane ko kasashe na sarrafa yadda ake tattarawa, adanawa da amfani da bayanansu.",
      },
      {
        term: "Shadow AI",
        definition: "Amfani da kayan aikin AI a boye daga kungiya, ba tare da wata doka ko kulawa daga hukuma ba.",
      },
    ],
  },
};

export function localizeModule(module: LearningModule, lang: Language): LearningModule {
  const directModuleCopy = module.translations?.[lang];
  const moduleCopy = copy[lang][module.slug];
  const resolvedModuleCopy = directModuleCopy || moduleCopy;

  return {
    ...module,
    title: resolvedModuleCopy?.title || module.title,
    subtitle: resolvedModuleCopy?.subtitle || module.subtitle,
    description: resolvedModuleCopy?.description || module.description,
    level: resolvedModuleCopy?.level || module.level,
    courses: module.courses.map((course) => ({
      ...course,
      ...(moduleCopy?.courses?.[course.id] || {}),
      ...(course.translations?.[lang] || {}),
    })),
  };
}

export function localizeModules(modules: LearningModule[], lang: Language) {
  return modules.map((module) => localizeModule(module, lang));
}

export function getLessonOne(lang: Language) {
  return lesson1ByLanguage[lang];
}

// Registry of hand-authored lessons, keyed by `${moduleSlug}/${courseId}`.
// To publish real content for a course (video URLs + rich sections + quiz),
// author a `Record<Language, LessonContent>` (see `lesson1ByLanguage` above for
// a complete trilingual example) and add a loader here. Courses without an entry
// fall back to the auto-generated template in LessonPlayer's `buildLesson`.
// See docs/authoring-lessons.md.
//
// Lesson bodies are the heaviest content in the app: 19 lessons x 3 languages is
// ~270 kB gzipped. They are loaded on demand — one lesson is ~15 kB gzipped —
// so opening a lesson on a 2G link does not pay for the whole catalogue, and
// the service worker keeps each visited lesson available offline.
type LessonBundle = Record<Language, LessonContent>;

const authoredLessonLoaders: Record<string, () => Promise<LessonBundle>> = {
  'intelligence-artificielle/c2': () => import('./lessons/ia-c2-llms').then((m) => m.iaLessonC2),
  'intelligence-artificielle/c3': () => import('./lessons/ia-c3-prompting').then((m) => m.iaLessonC3),
  'intelligence-artificielle/c4': () => import('./lessons/ia-c4-organisations').then((m) => m.iaLessonC4),
  'intelligence-artificielle/c5': () => import('./lessons/ia-c5-automatisation').then((m) => m.iaLessonC5),
  'intelligence-artificielle/c6': () => import('./lessons/ia-c6-ethique').then((m) => m.iaLessonC6),
  'intelligence-artificielle/c7': () => import('./lessons/ia-c7-outils').then((m) => m.iaLessonC7),
  'intelligence-artificielle/c8': () => import('./lessons/ia-c8-evaluation').then((m) => m.iaLessonC8),
  'gestion-projet/p1': () => import('./lessons/pm-p1-cadrage').then((m) => m.pmLessonP1),
  'gestion-projet/p2': () => import('./lessons/pm-p2-mvp').then((m) => m.pmLessonP2),
  'gestion-projet/p3': () => import('./lessons/pm-p3-sprint').then((m) => m.pmLessonP3),
  'gestion-projet/p4': () => import('./lessons/pm-p4-risques').then((m) => m.pmLessonP4),
  'gestion-projet/p5': () => import('./lessons/pm-p5-retrospective').then((m) => m.pmLessonP5),
  'data-analysis/d1': () => import('./lessons/da-d1-nettoyage').then((m) => m.daLessonD1),
  'data-analysis/d2': () => import('./lessons/da-d2-tableaux-croises').then((m) => m.daLessonD2),
  'data-analysis/d3': () => import('./lessons/da-d3-python').then((m) => m.daLessonD3),
  'data-analysis/d4': () => import('./lessons/da-d4-visualisation').then((m) => m.daLessonD4),
  'data-analysis/d5': () => import('./lessons/da-d5-raconter').then((m) => m.daLessonD5),
  'data-analysis/d6': () => import('./lessons/da-d6-mini-projet').then((m) => m.daLessonD6),
  'introduction-claude-ai/cl1': () => import('./lessons/introduction-claude-ai/cl1').then((m) => m.claudeLesson1ByLanguage),
  'introduction-claude-ai/cl2': () => import('./lessons/introduction-claude-ai/cl2').then((m) => m.claudeLesson2ByLanguage),
  'introduction-claude-ai/cl3': () => import('./lessons/introduction-claude-ai/cl3').then((m) => m.claudeLesson3ByLanguage),
  'introduction-claude-ai/cl4': () => import('./lessons/introduction-claude-ai/cl4').then((m) => m.claudeLesson4ByLanguage),
  'introduction-claude-ai/cl5': () => import('./lessons/introduction-claude-ai/cl5').then((m) => m.claudeLesson5ByLanguage),
  'introduction-claude-ai/cl6': () => import('./lessons/introduction-claude-ai/cl6').then((m) => m.claudeLesson6ByLanguage),
  'ia-expliquee-simplement/is1': () => import('./lessons/ia-expliquee-simplement/is1').then((m) => m.isLesson1),
  'ia-expliquee-simplement/is2': () => import('./lessons/ia-expliquee-simplement/is2').then((m) => m.isLesson2),
  'ia-expliquee-simplement/is3': () => import('./lessons/ia-expliquee-simplement/is3').then((m) => m.isLesson3),
  'ia-expliquee-simplement/is4': () => import('./lessons/ia-expliquee-simplement/is4').then((m) => m.isLesson4),
  'ia-expliquee-simplement/is5': () => import('./lessons/ia-expliquee-simplement/is5').then((m) => m.isLesson5),
  'ia-expliquee-simplement/is6': () => import('./lessons/ia-expliquee-simplement/is6').then((m) => m.isLesson6),
  'ia-expliquee-simplement/is7': () => import('./lessons/ia-expliquee-simplement/is7').then((m) => m.isLesson7),
  'creer-agents-ia/ag1': () => import('./lessons/creer-agents-ia/ag1').then((m) => m.agLesson1),
  'creer-agents-ia/ag2': () => import('./lessons/creer-agents-ia/ag2').then((m) => m.agLesson2),
  'creer-agents-ia/ag3': () => import('./lessons/creer-agents-ia/ag3').then((m) => m.agLesson3),
  'creer-agents-ia/ag4': () => import('./lessons/creer-agents-ia/ag4').then((m) => m.agLesson4),
  'creer-agents-ia/ag5': () => import('./lessons/creer-agents-ia/ag5').then((m) => m.agLesson5),
  'creer-agents-ia/ag6': () => import('./lessons/creer-agents-ia/ag6').then((m) => m.agLesson6),
  'creer-agents-ia/ag7': () => import('./lessons/creer-agents-ia/ag7').then((m) => m.agLesson7),
  'creer-agents-ia/ag8': () => import('./lessons/creer-agents-ia/ag8').then((m) => m.agLesson8),
  'ia-administration/ad1': () => import('./lessons/ia-administration/ad1').then((m) => m.adLesson1),
  'ia-administration/ad2': () => import('./lessons/ia-administration/ad2').then((m) => m.adLesson2),
  'ia-administration/ad3': () => import('./lessons/ia-administration/ad3').then((m) => m.adLesson3),
  'ia-administration/ad4': () => import('./lessons/ia-administration/ad4').then((m) => m.adLesson4),
  'ia-administration/ad5': () => import('./lessons/ia-administration/ad5').then((m) => m.adLesson5),
  'outils-ia-gratuits/og1': () => import('./lessons/outils-ia-gratuits/og1').then((m) => m.ogLesson1),
  'outils-ia-gratuits/og2': () => import('./lessons/outils-ia-gratuits/og2').then((m) => m.ogLesson2),
  'outils-ia-gratuits/og3': () => import('./lessons/outils-ia-gratuits/og3').then((m) => m.ogLesson3),
  'outils-ia-gratuits/og4': () => import('./lessons/outils-ia-gratuits/og4').then((m) => m.ogLesson4),
  'outils-ia-gratuits/og5': () => import('./lessons/outils-ia-gratuits/og5').then((m) => m.ogLesson5),
  'outils-ia-gratuits/og6': () => import('./lessons/outils-ia-gratuits/og6').then((m) => m.ogLesson6),
  'outils-ia-gratuits/og7': () => import('./lessons/outils-ia-gratuits/og7').then((m) => m.ogLesson7),
};

// Lesson 1 of module 1 ships with the shell: it is the entry point of the
// learning path (and the fallback lesson), so it must render with no extra
// round trip.
const eagerLessons: Record<string, LessonBundle> = {
  'intelligence-artificielle/c1': lesson1ByLanguage,
};

/** True when real authored content exists for this course (eager or lazy). */
export function hasAuthoredLesson(moduleSlug: string, courseId: string): boolean {
  const key = `${moduleSlug}/${courseId}`;
  return key in eagerLessons || key in authoredLessonLoaders;
}

/** Synchronous lookup — only resolves lessons bundled with the shell. */
export function getAuthoredLesson(
  moduleSlug: string,
  courseId: string,
  lang: Language
): LessonContent | null {
  return eagerLessons[`${moduleSlug}/${courseId}`]?.[lang] ?? null;
}

/** Loads authored content, fetching the lesson chunk when needed. */
export async function loadAuthoredLesson(
  moduleSlug: string,
  courseId: string,
  lang: Language
): Promise<LessonContent | null> {
  const eager = getAuthoredLesson(moduleSlug, courseId, lang);
  if (eager) return eager;
  const loader = authoredLessonLoaders[`${moduleSlug}/${courseId}`];
  if (!loader) return null;
  try {
    return (await loader())[lang] ?? null;
  } catch {
    // Offline / flaky link: the caller falls back to the generated template.
    return null;
  }
}
