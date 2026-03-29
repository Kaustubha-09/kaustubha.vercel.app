import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SectionHeader } from './SectionHeader';

type ProjectCategory = 'All' | 'AI / ML' | 'Mobile' | 'Systems' | 'Research';
type RoleTrack = 'AI/ML' | 'Accessibility' | 'Mobile' | 'Full Stack' | 'Research' | 'Systems';

interface Project {
  title: string;
  period: string;
  role: string;
  organization: string;
  tier: 'featured' | 'secondary' | 'compact';
  category: ProjectCategory;
  tracks: RoleTrack[];
  problem: string;
  description: string;
  highlights: string[];
  impact: string;
  image: string;
  tags: string[];
  github: string | null;
  appStore?: string | null;
  link?: string | null;
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const projects: Project[] = [
    {
      title: 'Echolin.AI — Deepfake Media Detection Platform',
      period: 'Jun. 2025 - Jul. 2025',
      role: 'Lead Developer & Researcher',
      organization: 'Independent Research',
      tier: 'featured',
      category: 'AI / ML',
      tracks: ['AI/ML', 'Research'],
      problem: 'Deepfake detection requires accurate, interpretable models that can scale to real-world media.',
      description: 'Architected an end-to-end AI-powered media forensics platform for deepfake detection using CNN-based models and ensemble classification strategies.',
      highlights: [
        'Built scalable data pipelines with augmentation techniques for model generalization',
        'Integrated Grad-CAM-based visual interpretability for model attention analysis',
        'Engineered low-latency inference system with FastAPI and GPU-backed execution',
      ],
      impact: '120+ GitHub stars · Open Source · CNN + Grad-CAM + FastAPI',
      image: 'https://images.unsplash.com/photo-1653836592221-9e85949e71a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwZmFrZSUyMGRldGVjdGlvbiUyMHNlY3VyaXR5fGVufDF8fHx8MTc3MTc5NzMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Deep Learning', 'CNN', 'FastAPI', 'Computer Vision', 'Grad-CAM'],
      github: 'https://github.com/Kaustubha-09/Echolin.ai',
      link: null,
    },
    {
      title: 'YouDescribeX — AI Accessibility Platform',
      period: 'Jul. 2025 - Jan. 2026',
      role: 'Research Software Engineer',
      organization: 'Smith-Kettlewell Eye Research Institute',
      tier: 'featured',
      category: 'AI / ML',
      tracks: ['AI/ML', 'Accessibility', 'Mobile'],
      problem: 'Blind and low-vision users lack meaningful audio descriptions for online videos.',
      description: 'Transformed YouDescribeX from a research prototype into a production platform serving blind and low-vision users, integrating AI-powered description generation and a cross-platform mobile app.',
      highlights: [
        'Deployed RAG pipeline + VLM-powered Infobot achieving 86% top-3 hit rate',
        'Shipped iOS + Android apps with full VoiceOver/TalkBack accessibility',
        'Served 40+ blind/low-vision users in pilot with <1% crash rate',
      ],
      impact: 'Production · App Store · 40+ BVI users · 86% Infobot hit rate · WCAG AA+',
      image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['RAG', 'VLMs', 'iOS', 'Android', 'WCAG AA+', 'FastAPI'],
      github: null,
      appStore: 'https://apps.apple.com/us/app/youdescribe/id594078389',
      link: null,
    },
    {
      title: 'Semantic Diff Prompting for Video Understanding',
      period: 'Sep. 2025 - Dec. 2025',
      role: 'Generative AI Researcher',
      organization: 'Northeastern University',
      tier: 'secondary',
      category: 'AI / ML',
      tracks: ['AI/ML', 'Research'],
      problem: 'Frame-by-frame video captioning is token-inefficient and misses temporal dynamics.',
      description: 'Introduced Semantic Diff Prompting, a prompt-engineering framework for Vision-Language Models that models temporal semantic changes instead of independent frame-level captions.',
      highlights: [
        'Designed state-aware prompts to capture object transitions, motion events, and scene dynamics',
        'Developed quantitative evaluation metrics for token efficiency and action-centric information density',
      ],
      impact: '56–68% token reduction · VLM research · No fine-tuning required',
      image: 'https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGVlcCUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTc5NzMzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Generative AI', 'VLMs', 'Prompt Engineering', 'Video Understanding', 'PyTorch'],
      github: 'https://github.com/Kaustubha-09/SemanticVideoUnderstanding',
      link: null,
    },
    {
      title: 'RapidTriage AI — Emergency Care Prioritization',
      period: 'Jan. 2025 - Apr. 2025',
      role: 'ML Engineer & System Designer',
      organization: 'Northeastern University',
      tier: 'secondary',
      category: 'AI / ML',
      tracks: ['AI/ML', 'Research'],
      problem: 'Emergency departments need faster, more accurate triage decisions based on clinical inputs.',
      description: 'Designed an AI-driven triage classification system using structured and free-text clinical-style inputs to predict patient priority levels in emergency scenarios.',
      highlights: [
        'Improved macro-F1 by +0.12 through optimization and class-imbalance mitigation',
        'Applied probability calibration to reduce overconfident predictions on high-risk cases',
      ],
      impact: 'Healthcare AI · Top Project Award · macro-F1 +0.12',
      image: 'https://images.unsplash.com/photo-1758404958502-44f156617bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBtZWRpY2FsJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzcxNzk3MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Machine Learning', 'Healthcare AI', 'Classification', 'Python', 'scikit-learn'],
      github: 'https://github.com/Kaustubha-09/RapidTriage',
      link: null,
    },
    {
      title: 'NEUQuest — Student Event & Travel Companion',
      period: 'May. 2024 - Aug. 2024',
      role: 'Full-Stack Android Developer',
      organization: 'Northeastern University',
      tier: 'compact',
      category: 'Mobile',
      tracks: ['Mobile', 'Full Stack'],
      problem: 'Students struggle to discover campus events and coordinate travel.',
      description: 'Full-stack Android app with Firebase, maps, and push notifications for student event discovery.',
      highlights: [],
      impact: '200+ users · Hackathon top project · 90%+ accessibility score',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGFuZHJvaWR8ZW58MXx8fHwxNzcxNzk3MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Android', 'Firebase', 'Java', 'MVVM', 'Google Maps'],
      github: 'https://github.com/Kaustubha-09/NEUQuest',
      link: null,
    },
    {
      title: 'Husky Mingle — Campus Networking Platform',
      period: 'Jan. 2024 - Apr. 2024',
      role: 'Developer (Team Lead)',
      organization: 'Northeastern University',
      tier: 'compact',
      category: 'Mobile',
      tracks: ['Mobile', 'Full Stack'],
      problem: 'Students need better ways to find collaborators and form project groups.',
      description: 'Mobile-first campus networking platform with real-time chat and profile-based matching.',
      highlights: [],
      impact: 'Hackathon winner · 4.2 → 1.6 day time-to-first-connection',
      image: 'https://images.unsplash.com/photo-1662148965079-7fbb45160973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBuZXR3b3JraW5nJTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MTc5OTkwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mobile Development', 'Firebase', 'Real-time Chat', 'Team Leadership'],
      github: null,
      link: null,
    },
    {
      title: 'Notification Urgency Classifier',
      period: 'Sep. 2025 - Dec. 2025',
      role: 'Machine Learning Engineer',
      organization: 'Northeastern University',
      tier: 'compact',
      category: 'AI / ML',
      tracks: ['AI/ML'],
      problem: 'Notification overload reduces productivity. Can we automatically prioritize messages using NLP?',
      description: 'Supervised NLP system classifying notifications into Eisenhower Matrix priority levels.',
      highlights: [],
      impact: '0.41 → 0.93 accuracy · DistilBART summarization',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTczMTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['NLP', 'TF-IDF', 'DistilBART', 'Text Classification'],
      github: 'https://github.com/Kaustubha-09/notification_classifier',
      link: null,
    },
    {
      title: 'SPAMbase — Probabilistic Spam Classification',
      period: 'Oct. 2023 - Nov. 2023',
      role: 'Data Scientist',
      organization: 'Independent Project',
      tier: 'compact',
      category: 'AI / ML',
      tracks: ['AI/ML'],
      problem: 'How do we build an interpretable spam filter using classical ML?',
      description: 'End-to-end Naïve Bayes spam filtering system grounded in Bayes\' Theorem.',
      highlights: [],
      impact: 'Classical ML baseline · Naïve Bayes · NLP pipeline',
      image: 'https://images.unsplash.com/photo-1712701425609-3ab78cd5fba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFtJTIwZW1haWwlMjBmaWx0ZXIlMjBzZWN1cml0eXxlbnwxfHx8fDE3NzE3OTk5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Naïve Bayes', 'NLP', 'scikit-learn', 'Text Classification'],
      github: 'https://github.com/Kaustubha-09/Spambase',
      link: null,
    },
    {
      title: 'Course Scheduling Optimization via Graph Coloring',
      period: 'Mar. 2024 - Apr. 2024',
      role: 'Research Project Member',
      organization: 'Northeastern University',
      tier: 'compact',
      category: 'Systems',
      tracks: ['Systems', 'Research'],
      problem: 'University course scheduling is complex and conflict-prone.',
      description: 'Graph coloring optimization for course scheduling using Greedy and Welsh-Powell algorithms.',
      highlights: [],
      impact: '40% fewer conflicts · 12% better room utilization · <2s runtime',
      image: 'https://images.unsplash.com/photo-1738082956220-a1f20a8632ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaCUyMG5ldHdvcmslMjB2aXN1YWxpemF0aW9uJTIwbm9kZXN8ZW58MXx8fHwxNzcxNzk5ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Algorithms', 'Graph Theory', 'Python', 'NetworkX', 'Optimization'],
      github: null,
      link: null,
    },
  ];

  const categories: ProjectCategory[] = ['All', 'AI / ML', 'Mobile', 'Systems', 'Research'];

  const featured = projects.filter(p => p.tier === 'featured');
  const secondary = projects.filter(p => p.tier === 'secondary');
  const compact = projects.filter(p => p.tier === 'compact');

  const allFiltered = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const showHierarchy = selectedCategory === 'All';

  const trackColors: Record<RoleTrack, string> = {
    'AI/ML':        { bg: 'rgba(0,212,170,0.1)',  border: 'rgba(0,212,170,0.3)',  color: '#00D4AA' },
    'Accessibility':{ bg: 'rgba(99,179,237,0.1)', border: 'rgba(99,179,237,0.3)', color: '#63b3ed' },
    'Mobile':       { bg: 'rgba(246,173,85,0.1)', border: 'rgba(246,173,85,0.3)', color: '#f6ad55' },
    'Full Stack':   { bg: 'rgba(154,215,255,0.08)',border:'rgba(154,215,255,0.25)',color:'#9ad7ff' },
    'Research':     { bg: 'rgba(183,148,244,0.1)',border: 'rgba(183,148,244,0.3)', color: '#b794f4' },
    'Systems':      { bg: 'rgba(252,129,74,0.1)', border: 'rgba(252,129,74,0.3)', color: '#fc814a' },
  } as any;

  function TrackChip({ track }: { track: RoleTrack }) {
    const s = trackColors[track] ?? { bg: 'transparent', border: 'rgba(100,116,139,0.3)', color: 'rgb(100,116,139)' };
    return (
      <span
        className="px-2 py-0.5 rounded-full text-xs font-medium"
        style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color, fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.04em' }}
      >
        {track}
      </span>
    );
  }

  function ImpactStat({ text }: { text: string }) {
    return (
      <p
        className="text-xs font-medium mt-3"
        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", color: '#00D4AA', lineHeight: 1.6 }}
      >
        {text}
      </p>
    );
  }

  function LinkRow({ project }: { project: Project }) {
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all hover:scale-[1.03]"
            style={{ borderColor: 'rgba(0,212,170,0.35)', color: '#00D4AA', background: 'rgba(0,212,170,0.06)' }}>
            <Github className="w-3 h-3" /> GitHub
          </a>
        )}
        {project.appStore && (
          <a href={project.appStore} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all hover:scale-[1.03]"
            style={{ borderColor: 'rgba(99,179,237,0.35)', color: '#63b3ed', background: 'rgba(99,179,237,0.06)' }}>
            <ExternalLink className="w-3 h-3" /> App Store
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all hover:scale-[1.03]"
            style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgb(148,163,184)', background: 'rgba(255,255,255,0.03)' }}>
            <ExternalLink className="w-3 h-3" /> Live
          </a>
        )}
      </div>
    );
  }

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="03 — Projects"
          title="Projects"
          description="Featured work in AI/ML, accessibility, mobile development, and systems engineering"
        />

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory !== cat
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  : ''
              }`}
              style={selectedCategory === cat ? { background: '#00D4AA', color: '#0F1923' } : undefined}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {showHierarchy ? (
          <>
            {/* TIER 1 — Featured (2 large cards) */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {featured.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="card-sweep group h-full overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tracks.map(t => <TrackChip key={t} track={t} />)}
                      </div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-snug">{project.title}</h3>
                        <Badge variant="secondary" className="text-xs flex-shrink-0">{project.period}</Badge>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{project.role} · {project.organization}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">{project.problem}</p>
                      <div className="flex flex-wrap gap-1.5 mb-1">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800">{tag}</Badge>
                        ))}
                      </div>
                      <ImpactStat text={project.impact} />
                      <LinkRow project={project} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* TIER 2 — Secondary (2-col) */}
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {secondary.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Card className="group h-full border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-5">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tracks.map(t => <TrackChip key={t} track={t} />)}
                      </div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-snug">{project.title}</h3>
                        <Badge variant="secondary" className="text-xs flex-shrink-0">{project.period}</Badge>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">{project.problem}</p>
                      <div className="flex flex-wrap gap-1.5 mb-1">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800">{tag}</Badge>
                        ))}
                      </div>
                      <ImpactStat text={project.impact} />
                      <LinkRow project={project} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* TIER 3 — Compact list */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
              {compact.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${
                    idx < compact.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {project.tracks.map(t => <TrackChip key={t} track={t} />)}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">{project.title}</h3>
                    <p
                      className="text-xs"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#00D4AA' }}
                    >
                      {project.impact}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 shrink-0">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800">{tag}</Badge>
                    ))}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs border transition-all"
                        style={{ borderColor: 'rgba(0,212,170,0.35)', color: '#00D4AA', background: 'rgba(0,212,170,0.06)' }}>
                        <Github className="w-3 h-3" /> GitHub
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          /* Filtered view — single unified grid */
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-5"
            >
              {allFiltered.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="group h-full overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {project.tier !== 'compact' && (
                      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    )}
                    <CardContent className="p-5">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tracks.map(t => <TrackChip key={t} track={t} />)}
                      </div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-snug">{project.title}</h3>
                        <Badge variant="secondary" className="text-xs flex-shrink-0">{project.period}</Badge>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">{project.problem}</p>
                      <div className="flex flex-wrap gap-1.5 mb-1">
                        {project.tags.slice(0, 4).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800">{tag}</Badge>
                        ))}
                      </div>
                      <ImpactStat text={project.impact} />
                      <LinkRow project={project} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
