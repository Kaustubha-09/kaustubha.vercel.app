'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.css';

type Project = {
  name: string;
  period: string;
  description: string;
  bullets: string[];
  tech: string[];
  metric: string;
  link?: string;
  image?: string; // path relative to /public; rendered as card thumbnail
};

const PROJECTS: Project[] = [
  {
    name: 'HuskyMingle',
    period: 'Jan – Apr 2024',
    description: 'Campus social super-app for Northeastern: cross-platform Web, native Android, and native iOS clients against one backend.',
    bullets: [
      'Architected a polyglot stack: Next.js 15 + NestJS web, Kotlin + Jetpack Compose Android, Swift + SwiftUI iOS, all against a shared Postgres + JWT auth surface.',
      'Designed verified-`.edu` onboarding (six-digit code verification + interest/skill personalization), threaded comments, 24-hour Stories, marketplace, NEU course catalog, Discord-style private Circles.',
      'iOS: zero external dependencies — Keychain-backed JWT (`kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly`), Face ID app-lock, defensive multi-key response decoding against backend schema drift.',
      'Won the campus hackathon track for student networking innovation; powers the canonical "Voya" template that every other repo in this portfolio follows.',
    ],
    tech: ['Next.js 15', 'NestJS', 'Postgres', 'Kotlin Compose', 'SwiftUI', 'Keychain', 'JWT'],
    metric: 'Hackathon winner · 4 repos · polyglot stack',
    link: 'https://github.com/Kaustubha-09/HuskyMingle',
    image: '/projects/huskymingle.png',
  },
  {
    name: 'voya',
    period: 'Apr – May 2025',
    description: 'Native SwiftUI iOS travel companion — explore stays, plan budgets, join travel squads, fork expert playbooks, earn rewards.',
    bullets: [
      '11 feature modules · 100 Swift files · ~14k LOC · zero external dependencies — pure Apple frameworks (URLSession, CoreLocation, Security, LocalAuthentication).',
      'Single async-state shape via `ViewState<T>` enum (idle / loading / success(T) / failure(String)) across 13 ViewModels; derived UI (filtered, ranked, trending, nearby) is computed from .success(T), not stored.',
      'Custom multi-factor search ranker (title prefix > location > word-level token match > rating boost) + Wilson-score approximation (`rating × log(reviews + 1)`) for trending stays with a 300ms Combine debounce.',
      'Keychain-backed JWT storage (`kSecAttrAccessibleWhenUnlockedThisDeviceOnly`) + biometric (Face ID / Touch ID) app-lock via LocalAuthentication; tokens never touch UserDefaults or iCloud sync.',
    ],
    tech: ['Swift 5.9', 'SwiftUI', 'Combine', 'Keychain', 'CoreLocation', 'iOS 17+'],
    metric: '0 third-party deps · 11 features · 100 files',
    link: 'https://github.com/Kaustubha-09/voya',
    image: '/projects/voya.png',
  },
  {
    name: 'Echolin.ai',
    period: 'Jun – Jul 2025',
    description: 'Deepfake detection platform — React 19 + Flask + PyTorch Vision Transformer with optional LLM-generated explanations.',
    bullets: [
      'Pretrained ViT (`ashish-001/deepfake-detection-using-ViT` via Hugging Face) loaded as a module-level singleton; image pipeline runs at ~0.5s/image on CPU with no warm-up cost.',
      'Video pipeline samples up to 10 frames sequentially via OpenCV, runs each through the ViT, majority-votes the label, averages confidence over winning-label frames.',
      'Honestly documented: the `artifacts` field returned is synthetic — the base ViT has no localization. Upgrade path (Grad-CAM, ensemble) is in the roadmap.',
      'Auth + Postgres + Storage via Supabase with row-level security on every table; LLM explanation is non-blocking — detection always succeeds independent of LLM availability.',
    ],
    tech: ['React 19', 'TypeScript', 'Flask', 'PyTorch', 'Hugging Face Transformers', 'Supabase', 'OpenAI / GMI Cloud'],
    metric: '0.5s/image · 9 ADRs · honest scope',
    link: 'https://github.com/Kaustubha-09/Echolin.ai',
    image: '/projects/echolin.png',
  },
  {
    name: 'RapidTriage',
    period: 'Jan – Apr 2025',
    description: 'Cross-platform medical triage with hybrid AI: LLM symptom parsing + MTS/ESI-inspired rule classifier + concurrent tool dispatch.',
    bullets: [
      'Two-tier system: React Native (Expo) mobile + Go HTTP server with bounded concurrency (`MaxConcurrentTools=5`), graceful shutdown deadline (10s on SIGTERM), strict per-layer timeouts.',
      'Multi-provider AI dispatch via env-var config — Gemini default, Claude / OpenAI / Llama alternates. One provider outage doesn\'t block emergency triage.',
      'Safety-biased fallback: classifier confidence < 0.5 → YELLOW (Urgent), not GREEN. Type-II error (missing a real urgent case) is much worse than Type-I in triage; the fallback direction encodes the safety policy.',
      'Tool registry (Location · Hospital · Ambulance · Booking) shares a `Do(req)` interface; production wiring is one file per tool — currently mock-backed and honestly documented as such.',
    ],
    tech: ['React Native', 'Expo', 'Go 1.23', 'multi-provider LLM', 'goroutines'],
    metric: '~3.7s response · 4 AI providers · safety-biased',
    link: 'https://github.com/Kaustubha-09/RapidTriage',
    image: '/projects/rapidtriage.png',
  },
  {
    name: 'Semantic Diff Prompting',
    period: 'Sep – Dec 2025',
    description: 'Prompt-engineering study for Vision-Language Models — describe only what changed between consecutive video frames.',
    bullets: [
      'Held the model fixed (GPT-4o) and varied the prompt: baseline `"Describe this frame."` vs. diff `"Describe only what changed."` — the research question is prompt-engineering, not model selection.',
      'Achieved 50–70% token reduction on non-first frames across a 141-video, 8-category action dataset, while preserving temporal change information.',
      'Token counting via `tiktoken` (matches GPT-4 BPE exactly) with a GPT-2 fallback for environments where `tiktoken` can\'t install — the comparison is only credible if the measurement is.',
      '18 deterministic pytest unit tests, 0.5s runtime, zero API calls, zero key required — CI runs free, fast, and reproducible.',
    ],
    tech: ['Python', 'GPT-4o', 'tiktoken', 'OpenCV', 'matplotlib'],
    metric: '50–70% token reduction · 18 unit tests',
    link: 'https://github.com/Kaustubha-09/SemanticVideoUnderstanding',
    image: '/projects/semantic-diff.png',
  },
  {
    name: 'patient-intake-agent',
    period: 'Apr 2026',
    description: 'Terminal AI agent for patient intake & scheduling — GPT-4o drives the conversation, deterministic Python tools own the data.',
    bullets: [
      'Architectural pattern: LLM drives conversation, tools own data. Address validation hits Google Maps; provider ranking runs through deterministic urgency policy. The LLM cannot invent an address or hallucinate a provider.',
      'Two-layer emergency gate: system-prompt directive + tool-layer refusal (`rank_providers(urgency="emergency")` returns empty list). Even if the LLM somehow continues, the tool layer refuses to schedule.',
      '`--demo` mode shares the production tool layer — same `validate_address` and `rank_providers` calls. Demo cannot diverge from real behavior.',
      'Per-session audit log (gitignored) captures every agent message, user input, tool call, tool result with timestamps and terminal status (`completed` / `emergency` / `abandoned`).',
    ],
    tech: ['Python 3.12', 'Poetry', 'GPT-4o', 'OpenAI function calling', 'Google Maps Geocoding'],
    metric: 'Single file · 2 modes · 2-layer safety gate',
    link: 'https://github.com/Kaustubha-09/patient-intake-agent',
    image: '/projects/patient-intake.png',
  },
  {
    name: 'utility-ai-assistant',
    period: 'Mar – Apr 2026',
    description: 'Four production-grade LLM-app patterns in one small codebase: MCP-style tool calling · TF-IDF RAG · keyword routing · grounded synthesis.',
    bullets: [
      'Two surfaces (FastAPI REST + Streamlit chat) share one router/tools/RAG/LLM core — same code, two presentation skins.',
      'Keyword router (not LLM classifier) + TF-IDF retrieval (not embeddings) — auditable, near-zero-latency, free, and scales to FAISS without changing the contract.',
      'Explicit `CONFIDENCE: HIGH/MEDIUM/LOW` parsed from every LLM response and surfaced as a color-coded badge — `LOW` confidence is a first-class reachable state, not a fabricated answer.',
      'Vendor swap (Anthropic → Gemini 2.5 Flash) was a one-file diff because `llm.py` is the boundary; mock mode runs every code path except the LLM call.',
    ],
    tech: ['FastAPI', 'Streamlit', 'Gemini 2.5 Flash', 'scikit-learn TF-IDF', 'Python'],
    metric: '4 patterns · 0 vector DBs · 1-file vendor swap',
    link: 'https://github.com/Kaustubha-09/utility-ai-assistant',
    image: '/projects/utility-ai.png',
  },
  {
    name: 'AIChatAssistant',
    period: 'Mar 2026',
    description: 'Native Android chat client for OpenAI-compatible LLMs — clean-architecture Java with streaming SSE via raw OkHttp.',
    bullets: [
      'Streaming SSE responses parsed line-by-line via raw OkHttp — Retrofit\'s `Call.execute()` buffers the full response and defeats `stream: true`, so the streaming path drops below Retrofit while non-streaming still uses it.',
      'Manual `ServiceLocator` DI instead of Hilt: the dependency graph is ~10 objects; Hilt would add annotation processing, generated code, and ceremony at this scale.',
      '`Resource<Loading/Success/Error>` wrapper as the single async-state shape (Java analog of `ViewState<T>` in voya / NEUQuest iOS).',
      'Mock streaming provider emits tokens through the same `Resource.Loading → Success` pipeline as the real API — every UX state (typing indicator, partial render, final-collapse) reachable offline without an API key.',
    ],
    tech: ['Java 17', 'Material 3', 'Room', 'OkHttp', 'Retrofit', 'ViewBinding'],
    metric: '31 Java files · 3-layer clean arch · 0 Hilt',
    link: 'https://github.com/Kaustubha-09/AIChatAssistant',
    image: '/projects/aichat.png',
  },
  {
    name: 'NEUQuest',
    period: 'May – Aug 2024',
    description: 'Cross-platform campus events + budget-trip app: native Android (Java + Material 3) and native iOS (SwiftUI + MVVM) sharing one Firebase project and one Gemini 1.5 Flash model.',
    bullets: [
      'Two native clients (no React Native / Flutter) sharing a single Firebase project (Auth + Realtime Database + Storage) and one Gemini API contract for AI-ranked event feeds and trip-name generation.',
      'Layered NEU-domain auth: client-side `.edu` regex check + Realtime Database security rules — neither layer alone is sufficient.',
      'Android uses `ListAdapter` + `DiffUtil` across all 5 RecyclerViews (no `notifyDataSetChanged()`); Firebase offline persistence enabled in `Application` so cold-launch shows previous-session data instantly.',
      'iOS uses strict MVVM with `@MainActor` ViewModels + `@Published` state; Gemini calls via URLSession (no SDK).',
    ],
    tech: ['Android Java', 'SwiftUI', 'Firebase', 'Gemini 1.5 Flash', 'Material 3'],
    metric: '2 clients · 1 backend · 30 unit tests',
    link: 'https://github.com/Kaustubha-09/NEUQuest',
    image: '/projects/neuquest.png',
  },
  {
    name: 'Notification Urgency Classifier',
    period: 'Sep – Dec 2025',
    description: 'Supervised NLP system classifying notifications into Eisenhower Matrix priority levels using message text alone.',
    bullets: [
      'End-to-end ML pipeline: text normalization → TF-IDF feature extraction → Multinomial Naïve Bayes.',
      'Synthesized a representative dataset of professional notifications for controlled experimentation.',
      'Improved classification accuracy from 0.41 → 0.93 over a rule-based keyword classifier baseline.',
      'Upgraded summarization from rule-based heuristics to DistilBART for improved content condensation.',
    ],
    tech: ['NLP', 'TF-IDF', 'Naïve Bayes', 'DistilBART', 'scikit-learn'],
    metric: 'Accuracy 0.41 → 0.93',
    link: 'https://github.com/Kaustubha-09/notification_classifier',
    image: '/projects/notification.png',
  },
  {
    name: 'Spambase',
    period: 'Oct – Nov 2023',
    description: 'Four-model spam-classification study — hand-rolled Naive Bayes vs. scikit-learn Bernoulli NB / Logistic Regression / SVM.',
    bullets: [
      'Manual Naïve Bayes with log-space arithmetic (numerical stability under ~10,000 token multiplications) and Laplace smoothing (handles unseen tokens) — the algorithm is the lesson.',
      'Comparison on the 4,601-row Spambase feature dataset: Logistic Regression won on AUC-ROC (0.97) and 5-fold CV accuracy (0.92 ± 0.007).',
      'Auto-generated visualizations to `plots/`: confusion matrices, ROC overlays, top-20 spam/ham words, accuracy comparison bar.',
      'CLI for ad-hoc classification (`python main.py --email "Win FREE iPhone!"`) returns label + spam probability in under a second.',
    ],
    tech: ['Python', 'scikit-learn', 'NLTK', 'NumPy', 'matplotlib'],
    metric: '4 models · 16 unit tests · 97% precision',
    link: 'https://github.com/Kaustubha-09/Spambase',
    image: '/projects/spambase.png',
  },
  {
    name: 'CourseScheduling',
    period: 'Mar – Apr 2024',
    description: 'CS 5002 group project — university course scheduling modeled as a graph coloring problem in Python + NetworkX.',
    bullets: [
      'Modeled student-course conflicts as a graph: courses are vertices, an edge between two courses means at least one shared student. A valid k-coloring = a conflict-free k-slot timetable.',
      'Implemented `is_valid_coloring` (no-adjacent-same-color invariant) and `greedy_coloring` (smallest-available-color heuristic) from scratch; cross-checked against `networkx.greedy_color`.',
      '5-person team (Yao Chong Chow, Kaustubha Eluri, Yuneng Li, Jonathan Mowat, Nicholas Ung). Authored the 8-page written report; contributed to the 21-slide class presentation.',
      'Honestly documented limitations: greedy is a heuristic, not optimal; backtracking and genetic algorithms named as next-step approaches in the conclusion.',
    ],
    tech: ['Python', 'NetworkX', 'matplotlib', 'graph coloring', 'NP-completeness'],
    metric: '8 students × 7 courses → 3 slots · 13 unit tests',
    link: 'https://github.com/Kaustubha-09/CourseScheduling',
    image: '/projects/coursescheduling.png',
  },
  {
    name: 'Gender Bias in Online Images — Research Review',
    period: 'Jan – Apr 2024',
    description: 'CS 5002 group research-review presentation of Guilbeault et al. 2024 (Nature) — "Online images amplify gender bias."',
    bullets: [
      'Read, synthesized, and presented Guilbeault et al. 2024 (Nature) on multimodal gender-bias measurement.',
      'Walked an audience through the paper\'s methodology: WordNet category sourcing, Google + Wikipedia image scraping, OpenCV face extraction, MTurk gender classification, word-embedding gender-direction scoring, and a Prolific-recruited IAT experiment.',
      'Discussed implications for AI/ML responsible-AI work, text-to-image generation safety, and multimodal content moderation.',
      'Honest framing: this is a literature-review presentation, not original research. The bias-measurement methodology in the slides is from the paper, not implemented by the team.',
    ],
    tech: ['Literature review', 'multimodal bias', 'NLP', 'computer vision', 'AI ethics'],
    metric: '15-slide class presentation · 5-person team',
    link: 'https://github.com/Kaustubha-09/GenderBiasStudy',
    image: '/projects/genderbias.png',
  },
];

export function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    if (!wrapper || !track) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      const getDistance = () => track.scrollWidth - wrapper.offsetWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: wrapper,
        pin: true,
        start: 'top top',
        end: () => `+=${getDistance()}`,
        scrub: 1.2,
        animation: tween,
        invalidateOnRefresh: true,
      });

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div id="projects" ref={wrapperRef} className={styles.wrapper}>
      <div ref={trackRef} className={styles.track}>

        {/* Title slide */}
        <div className={styles.titleSlide}>
          <span className={styles.eyebrow}>Projects</span>
          <h2 className={styles.heading}>
            Things I&apos;ve<br />
            <em>shipped.</em>
          </h2>
          <p className={styles.subtitle}>Scroll to explore →</p>
        </div>

        {/* Project cards */}
        {PROJECTS.map(project => (
          <article key={project.name} className={styles.card}>
            {project.image && (
              <div className={styles.cardThumb}>
                <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
              </div>
            )}

            <div className={styles.cardHeader}>
              <span className={styles.cardYear}>{project.period}</span>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                  aria-label={`View ${project.name} on GitHub`}
                >
                  GitHub →
                </a>
              ) : (
                <span className={styles.cardLinkSoon}>GitHub coming soon</span>
              )}
            </div>

            <h3 className={styles.cardName}>{project.name}</h3>
            <p className={styles.cardDesc}>{project.description}</p>

            <ul className={styles.cardBullets}>
              {project.bullets.map((b, i) => (
                <li key={i} className={styles.cardBullet}>{b}</li>
              ))}
            </ul>

            <div className={styles.cardFooter}>
              <div className={styles.cardTech}>
                {project.tech.map(t => (
                  <span key={t} className={styles.pill}>{t}</span>
                ))}
              </div>
              <p className={styles.cardMetric}>{project.metric}</p>
            </div>
          </article>
        ))}

      </div>
    </div>
  );
}
