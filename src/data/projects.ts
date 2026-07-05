export type ProjectCategory = 'Mobile' | 'AI' | 'Research' | 'Campus';

export type Project = {
  name: string;
  period: string;
  category: ProjectCategory;
  tagline: string;
  featured?: boolean;
  description: string;
  bullets: string[];
  tech: string[];
  link?: string;
  image?: string;
};

export const PROJECT_CATEGORIES: ProjectCategory[] = ['Mobile', 'AI', 'Research', 'Campus'];

/** Copy sourced from each repo's README (Resume Bullets / portfolio framing). */
export const PROJECTS: Project[] = [
  {
    name: 'LifeLaw',
    period: 'Jul 2026',
    category: 'AI',
    tagline: 'Retrieval is real, synthesis is structured — no LLM freewheeling in the answer path.',
    featured: true,
    description:
      'Personalized legal intelligence platform — Next.js 15 + FastAPI + pgvector RAG, live Congress.gov/LegiScan bill feeds, and a weekly email digest via Resend.',
    bullets: [
      'Built a jurisdiction-aware legal feed pulling live federal bills (Congress.gov) and state bills (LegiScan, all 50 states + DC), auto-tagged against user profile categories.',
      'Designed a hallucination-free Q&A engine: free local sentence-transformer embeddings + pgvector cosine retrieval, with answers assembled from retrieved structured fields instead of LLM-generated text.',
      'Shipped a weekly email digest (Resend) computing new-since-last-send feed items per profile, with HTML-escaping on all upstream bill content before it reaches an inbox.',
      'Found and fixed a real httpx bug where dict-based query params silently broke Congress.gov\'s sort order by urlencoding a literal `+` to `%2B`.',
    ],
    tech: ['Next.js 15', 'FastAPI', 'PostgreSQL', 'pgvector', 'sentence-transformers', 'Resend'],
    link: 'https://github.com/Kaustubha-09/legal-impact-ai',
    image: '/projects/lifelaw.png',
  },
  {
    name: 'HuskyMingle',
    period: 'Jan – Apr 2024',
    category: 'Campus',
    tagline: 'The campus super-app I wanted on day one at NEU.',
    featured: true,
    description:
      'A full-stack social networking platform built for Northeastern University students — available on Web, Android, and iOS.',
    bullets: [
      'Engineered a cross-platform social network (Web/Android/iOS) with 20+ feature modules, real-time WebSocket messaging, and JWT + token-refresh auth.',
      'Designed a NestJS backend with PostgreSQL, Redis pub/sub, and Socket.io supporting horizontal scaling across all three clients.',
      'Implemented native apps in Kotlin/Compose (Material 3) and SwiftUI (iOS 17) with shared REST API, biometric auth, and offline-capable local storage.',
      'Architected a Zustand + React Query state layer that eliminates prop drilling and delivers optimistic UI across 20 Next.js route groups.',
    ],
    tech: ['Next.js 15', 'NestJS', 'PostgreSQL', 'Redis', 'Kotlin', 'SwiftUI'],
    link: 'https://github.com/Kaustubha-09/HuskyMingle',
    image: '/projects/huskymingle.png',
  },
  {
    name: 'voya',
    period: 'Apr – May 2025',
    category: 'Mobile',
    tagline: 'Pure Apple frameworks — my iOS craft piece.',
    featured: true,
    description:
      'Native SwiftUI iOS travel companion with 11 feature modules, strict MVVM, a single ViewState<T> async shape, and zero external dependencies.',
    bullets: [
      'Built a native iOS travel companion in Swift 5.9 + SwiftUI (iOS 17+) with 11 feature modules and zero external dependencies — 100 Swift files, ~14k LOC.',
      'Designed a single async state shape via ViewState<T>; derived UI is computed from success(T) rather than stored across 13 ViewModels.',
      'Shipped a custom multi-factor search ranker and Wilson-score trending with a 300 ms Combine debounce on user input.',
      'Implemented Keychain-backed JWT storage with Face ID / Touch ID app-lock; tokens never touch UserDefaults or iCloud sync.',
    ],
    tech: ['Swift 5.9', 'SwiftUI', 'Combine', 'Keychain', 'CoreLocation'],
    link: 'https://github.com/Kaustubha-09/voya',
    image: '/projects/voya.png',
  },
  {
    name: 'Echolin.ai',
    period: 'Jun – Jul 2025',
    category: 'AI',
    tagline: 'Shipped ViT detection with honest scope on what the model can’t see.',
    featured: true,
    description:
      'Spot the fake. Preserve the truth. — ViT-based deepfake detection with optional LLM explanations, React 19 frontend, Flask + Supabase backend.',
    bullets: [
      'Built a full-stack deepfake detection web app — React 19 + TypeScript frontend, Flask + PyTorch backend, Supabase with row-level security.',
      'Integrated a pretrained Vision Transformer (Hugging Face) with image and video pipelines (OpenCV frame extraction + majority-vote aggregation).',
      'Designed a non-blocking LLM explanation layer — detection always succeeds independent of LLM availability.',
      'Documented architecture with 9 ADRs including honest scope on synthetic artifacts and monolithic frontend debt.',
    ],
    tech: ['React 19', 'Flask', 'PyTorch', 'Supabase', 'OpenCV'],
    link: 'https://github.com/Kaustubha-09/Echolin.ai',
    image: '/projects/echolin.png',
  },
  {
    name: 'RapidTriage',
    period: 'Jan – Apr 2025',
    category: 'AI',
    tagline: 'When the LLM fails, the triage layer still errs toward urgent.',
    description:
      'Cross-platform medical triage combining LLMs with MTS/ESI-inspired rules — React Native + Expo frontend, Go backend, multi-provider AI.',
    bullets: [
      'Built a cross-platform medical triage system combining LLM symptom parsing with a deterministic rule-based classifier — React Native + Go + multi-provider AI.',
      'Architected the Go backend with bounded concurrency, graceful shutdown, strict per-layer timeouts, and a tool registry for hospital integrations.',
      'Designed a safety-biased fallback: classifier confidence < 0.5 → YELLOW (Urgent), not GREEN — Type-II error is worse than Type-I in triage.',
      'Documented 9 ADRs with explicit safety-critical honesty on mock tools and non-certified clinical frameworks.',
    ],
    tech: ['React Native', 'Expo', 'Go 1.23', 'Gemini', 'Claude', 'OpenAI'],
    link: 'https://github.com/Kaustubha-09/RapidTriage',
    image: '/projects/rapidtriage.png',
  },
  {
    name: 'Semantic Diff Prompting',
    period: 'Sep – Dec 2025',
    category: 'Research',
    tagline: 'Held the model fixed — only the prompt changed.',
    description:
      'Comparative study of baseline frame-by-frame VLM prompting vs. semantic-diff prompting — 50–70% token reduction on a 141-video dataset.',
    bullets: [
      'Designed and ran a prompt-engineering study on GPT-4o — baseline vs. “describe only what changed” — achieving 50–70% token reduction.',
      'Built a multi-input Python pipeline for video files, image folders, and single images with configurable frame sampling.',
      'Implemented an OpenAI VLM client with exponential-backoff retry and tiktoken-accurate token counting with GPT-2 fallback.',
      'Wrote 18 deterministic unit tests — 0.5s runtime, zero API calls, zero key required.',
    ],
    tech: ['Python', 'GPT-4o', 'tiktoken', 'OpenCV'],
    link: 'https://github.com/Kaustubha-09/SemanticVideoUnderstanding',
    image: '/projects/semantic-diff.png',
  },
  {
    name: 'patient-intake-agent',
    period: 'Apr 2026',
    category: 'AI',
    tagline: 'The LLM talks; Python tools own addresses and provider ranking.',
    description:
      'Terminal patient intake and scheduling agent — GPT-4o drives conversation; Python tools validate addresses and rank providers by urgency.',
    bullets: [
      'Built a GPT-4o-driven intake agent with deterministic tool calls — Google Maps geocoding + in-memory provider ranking — LLM owns conversation, not data.',
      'Implemented a two-layer emergency gate (system prompt + tool-layer refusal to rank providers for emergency urgencies).',
      'Designed demo mode sharing the production tool layer so demo behavior cannot diverge from real behavior.',
      'Wrote an append-only audit log per session capturing messages, tool calls, and terminal status.',
    ],
    tech: ['Python 3.12', 'GPT-4o', 'Google Maps', 'Poetry'],
    link: 'https://github.com/Kaustubha-09/patient-intake-agent',
    image: '/projects/patient-intake.png',
  },
  {
    name: 'utility-ai-assistant',
    period: 'Mar – Apr 2026',
    category: 'AI',
    tagline: 'Four LLM patterns I reach for before reaching for a vector DB.',
    description:
      'Electricity billing AI prototype demonstrating MCP-style tools, TF-IDF RAG, keyword routing, and grounded synthesis with confidence scoring.',
    bullets: [
      'Designed a production-grade AI assistant combining tool calling, RAG retrieval, intent routing, and grounded synthesis in FastAPI + Streamlit.',
      'Built three structured tool functions returning typed JSON — LLM never invents numbers because it only sees tool output.',
      'Implemented TF-IDF retrieval over policy documents — no embedding API, no vector DB — with auditable keyword routing.',
      'Added explicit CONFIDENCE: HIGH/MEDIUM/LOW parsing; migrated LLM vendor in a single-file change via protocol boundary.',
    ],
    tech: ['FastAPI', 'Streamlit', 'Gemini 2.5', 'scikit-learn'],
    link: 'https://github.com/Kaustubha-09/utility-ai-assistant',
    image: '/projects/utility-ai.png',
  },
  {
    name: 'AIChatAssistant',
    period: 'Mar 2026',
    category: 'Mobile',
    tagline: 'Streaming SSE in Java — Retrofit stays, OkHttp streams.',
    description:
      'Native Android chat client for OpenAI-compatible LLMs — clean architecture, streaming SSE via OkHttp, Room history, mock offline mode.',
    bullets: [
      'Built a native Android chat client in Java 17 + Material 3 with clean-architecture layering and manual ServiceLocator DI.',
      'Implemented streaming SSE by dropping below Retrofit to raw OkHttp — parses data chunks line-by-line as they arrive.',
      'Designed a Resource<T> wrapper (Loading / Success / Error) as the single async-state shape across LiveData streams.',
      'Persisted chat history with Room; migrated API-key loading after catching a hardcoded key in source.',
    ],
    tech: ['Java 17', 'Material 3', 'Room', 'OkHttp', 'Retrofit'],
    link: 'https://github.com/Kaustubha-09/AIChatAssistant',
    image: '/projects/aichat.png',
  },
  {
    name: 'NEUQuest',
    period: 'May – Aug 2024',
    category: 'Campus',
    tagline: 'Two native clients, one Firebase backend — no cross-platform shortcut.',
    description:
      'Cross-platform NEU event discovery and trip planning — native Android and iOS sharing Firebase and Gemini 1.5 Flash.',
    bullets: [
      'Built native Android (Java + Material 3) and iOS (SwiftUI + MVVM) clients sharing one Firebase project and one Gemini model.',
      'On Android, shipped ListAdapter + DiffUtil across five RecyclerViews with Firebase offline persistence and 30 unit tests.',
      'On iOS, strict MVVM with @MainActor ViewModels, Combine, and async/await — zero business logic in views.',
      'Designed layered NEU-domain auth: client-side .edu regex + Realtime Database security rules.',
    ],
    tech: ['Android', 'SwiftUI', 'Firebase', 'Gemini 1.5 Flash'],
    link: 'https://github.com/Kaustubha-09/NEUQuest',
    image: '/projects/neuquest.png',
  },
  {
    name: 'Notification Urgency Classifier',
    period: 'Sep – Dec 2025',
    category: 'Research',
    tagline: 'From keyword rules to 0.93 accuracy on Eisenhower-style labels.',
    description:
      'ML + NLP system classifying mobile notifications into Eisenhower Matrix priority levels with DistilBART summarization.',
    bullets: [
      'Built an end-to-end pipeline: text normalization → TF-IDF → Multinomial Naïve Bayes on a 440-sample synthetic professional dataset.',
      'Improved accuracy from 0.41 (rule-based keyword baseline) to 0.93 (macro F1 0.93) — 2.3× lift over heuristics.',
      'Added DistilBART abstractive summarization for long notifications via HuggingFace Transformers.',
      'Shipped reproducible Jupyter + Colab workflow with CI and published evaluation plots.',
    ],
    tech: ['Python', 'scikit-learn', 'TF-IDF', 'DistilBART', 'HuggingFace'],
    link: 'https://github.com/Kaustubha-09/notification_classifier',
    image: '/projects/notification.png',
  },
  {
    name: 'Spambase',
    period: 'Oct – Nov 2023',
    category: 'Research',
    tagline: 'Hand-rolled Naïve Bayes so I could feel every log-probability.',
    description:
      'Four-model spam classification study — hand-rolled Naïve Bayes vs. scikit-learn on the Spambase dataset (CS 5002).',
    bullets: [
      'Implemented a four-model study on 4,601 rows × 57 features — Logistic Regression won AUC-ROC 0.97 and 5-fold CV accuracy 0.92.',
      'Wrote hand-rolled Naïve Bayes with log-space arithmetic and Laplace smoothing as a pedagogical complement.',
      'Built auto-generated visualization suite — confusion matrices, ROC overlay, top-20 word charts — saved to plots/.',
      'Shipped a CLI for sub-second ad-hoc classification and 16 pytest unit tests.',
    ],
    tech: ['Python', 'scikit-learn', 'NLTK', 'matplotlib'],
    link: 'https://github.com/Kaustubha-09/Spambase',
    image: '/projects/spambase.png',
  },
  {
    name: 'CourseScheduling',
    period: 'Mar – Apr 2024',
    category: 'Research',
    tagline: 'Turned enrollment conflicts into a graph-coloring problem.',
    description:
      'CS 5002 group project modeling university timetables as graph coloring — courses are vertices, shared enrollment is an edge.',
    bullets: [
      'Modeled student-course conflicts as a graph and implemented is_valid_coloring and greedy_coloring from scratch in Python.',
      'Cross-checked against networkx.greedy_color on an 8-student / 7-course example reduced to 3 time slots.',
      'Authored the written project report and contributed to the 21-slide presentation as part of a 5-person team.',
      'Documented heuristic limitations and named backtracking / genetic algorithms as next steps.',
    ],
    tech: ['Python', 'NetworkX', 'graph coloring'],
    link: 'https://github.com/Kaustubha-09/CourseScheduling',
    image: '/projects/coursescheduling.png',
  },
  {
    name: 'Gender Bias in Online Images',
    period: 'Jan – Apr 2024',
    category: 'Research',
    tagline: 'Synthesized Nature-level multimodal bias work for our CS 5002 cohort.',
    description:
      'Literature review and 15-slide presentation synthesizing Guilbeault et al. (2024, Nature) on multimodal gender bias online.',
    bullets: [
      'Reviewed and presented Guilbeault et al. (2024, Nature), “Online images amplify gender bias,” as a 5-person CS 5002 assignment.',
      'Synthesized multimodal methodology — WordNet sourcing, image scraping, OpenCV faces, MTurk labeling, embedding bias scoring, IAT experiment.',
      'Discussed implications for AI/ML bias mitigation and multimodal content-safety research.',
      'Honest framing: literature review and presentation, not original research implementation.',
    ],
    tech: ['Literature review', 'multimodal bias', 'AI ethics'],
    link: 'https://github.com/Kaustubha-09/GenderBiasStudy',
    image: '/projects/genderbias.png',
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured);
export const GRID_PROJECTS = PROJECTS.filter(p => !p.featured);
