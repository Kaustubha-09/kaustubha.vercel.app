import { ExternalLink, Github, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type ProjectCategory = 'All' | 'AI / ML' | 'Mobile' | 'Systems' | 'Research';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const projects = [
    {
      title: 'Semantic Diff Prompting for Video Understanding',
      period: 'Sep. 2025 - Dec. 2025',
      role: 'Generative AI Researcher',
      organization: 'Northeastern University',
      featured: true,
      category: 'AI / ML' as ProjectCategory,
      problem: 'Frame-by-frame video captioning is token-inefficient and misses temporal dynamics. How do we capture semantic changes over time?',
      description: 'Introduced Semantic Diff Prompting, a prompt-engineering framework for Vision-Language Models that models temporal semantic changes instead of independent frame-level captions.',
      highlights: [
        'Designed structured, state-aware prompts to capture object transitions, motion events, and scene dynamics',
        'Engineered end-to-end video understanding pipeline for frame extraction and multimodal caption generation',
        'Developed quantitative evaluation metrics for token efficiency and action-centric information density',
      ],
      impact: '56-68% token reduction while improving action-focused semantic coverage',
      image: 'https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGVlcCUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTc5NzMzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Generative AI', 'VLMs', 'Prompt Engineering', 'Video Understanding', 'PyTorch'],
      github: 'https://github.com/Kaustubha-09/SemanticVideoUnderstanding',
      link: null,
    },
    {
      title: 'Echolin.AI — Deepfake Media Detection Platform',
      period: 'Jun. 2025 - Jul. 2025',
      role: 'Lead Developer & Researcher',
      organization: 'Independent Research',
      featured: true,
      category: 'AI / ML' as ProjectCategory,
      problem: 'Deepfake detection requires accurate, interpretable models that can scale to real-world media. How do we build a production-ready forensics platform?',
      description: 'Architected an end-to-end AI-powered media forensics platform for deepfake detection using CNN-based models and ensemble classification strategies.',
      highlights: [
        'Built scalable data pipelines with augmentation techniques for model generalization',
        'Designed rigorous evaluation workflows with false-positive analysis and error inspection',
        'Integrated Grad-CAM-based visual interpretability for model attention analysis',
        'Engineered low-latency inference system with FastAPI and GPU-backed execution',
      ],
      impact: 'Open-sourced with 120+ GitHub stars and active community engagement',
      image: 'https://images.unsplash.com/photo-1653836592221-9e85949e71a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwZmFrZSUyMGRldGVjdGlvbiUyMHNlY3VyaXR5fGVufDF8fHx8MTc3MTc5NzMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Deep Learning', 'CNN', 'FastAPI', 'Computer Vision', 'Grad-CAM'],
      github: 'https://github.com/Kaustubha-09/Echolin.ai',
      link: null,
    },
    {
      title: 'RapidTriage AI — Intelligent Emergency Care Prioritization',
      period: 'Jan. 2025 - Apr. 2025',
      role: 'ML Engineer & System Designer',
      organization: 'Northeastern University',
      featured: true,
      category: 'AI / ML' as ProjectCategory,
      problem: 'Emergency departments need faster, more accurate triage decisions. Can AI help prioritize patients based on clinical inputs?',
      description: 'Designed an AI-driven triage classification system using structured and free-text clinical-style inputs to predict patient priority levels in emergency scenarios.',
      highlights: [
        'Engineered reproducible data preprocessing and feature pipelines, reducing cycle time by 20%',
        'Improved macro-F1 by +0.12 through optimization and class-imbalance mitigation',
        'Applied probability calibration to reduce overconfident predictions on high-risk cases',
        'Simulated emergency department workflows via dashboard prototype',
      ],
      impact: 'Recognized as top project during course demo day for technical depth',
      image: 'https://images.unsplash.com/photo-1758404958502-44f156617bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBtZWRpY2FsJTIwdHJpYWdlJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzcxNzk3MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Machine Learning', 'Healthcare AI', 'Classification', 'Python', 'scikit-learn'],
      github: 'https://github.com/Kaustubha-09/RapidTriage',
      link: null,
    },
    {
      title: 'Notification Urgency Classifier',
      period: 'Sep. 2025 - Dec. 2025',
      role: 'Machine Learning Engineer',
      organization: 'Northeastern University',
      featured: false,
      category: 'AI / ML' as ProjectCategory,
      problem: 'Notification overload reduces productivity. Can we automatically prioritize messages using NLP?',
      description: 'Developed a supervised NLP system to classify notifications into Eisenhower Matrix priority levels (Urgent/Important quadrants) using message text alone.',
      highlights: [
        'Engineered end-to-end ML pipeline with TF-IDF feature extraction and Multinomial Naïve Bayes',
        'Synthesized representative dataset of professional notifications for controlled experimentation',
        'Improved classification accuracy from 0.41 → 0.93 vs. rule-based baseline',
        'Implemented notification summarization with DistilBART transformer model',
      ],
      impact: 'Reliable inference of urgency signals from linguistic patterns',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTczMTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['NLP', 'Machine Learning', 'TF-IDF', 'DistilBART', 'Text Classification'],
      github: 'https://github.com/Kaustubha-09/notification_classifier',
      link: null,
    },
    {
      title: 'NEUQuest — Student Event & Travel Companion Application',
      period: 'May. 2024 - Aug. 2024',
      role: 'Full-Stack Android Developer',
      organization: 'Northeastern University',
      featured: false,
      category: 'Mobile' as ProjectCategory,
      problem: 'Students struggle to discover campus events and coordinate travel. How do we build a seamless mobile experience?',
      description: 'Developed a full-stack Android application with Firebase Realtime Database, authentication, maps integration, and push notifications to support student event discovery and travel coordination.',
      highlights: [
        'Implemented offline caching and resilient data synchronization',
        'Achieved 90%+ Lighthouse performance and accessibility scores',
        'Supported onboarding of 200+ users with engagement tracking',
        'Reduced recurring support issues with in-app verification flows and deep linking',
      ],
      impact: 'Selected as top project during Northeastern hackathon showcase',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGFuZHJvaWR8ZW58MXx8fHwxNzcxNzk3MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Android', 'Firebase', 'Java', 'MVVM', 'Google Maps'],
      github: 'https://github.com/Kaustubha-09/NEUQuest',
      link: null,
    },
    {
      title: 'Course Scheduling Optimization via Graph Coloring',
      period: 'Mar. 2024 - Apr. 2024',
      role: 'Research Project Member',
      organization: 'Northeastern University',
      featured: false,
      category: 'Systems' as ProjectCategory,
      problem: 'University course scheduling is complex and conflict-prone. Can graph algorithms optimize resource allocation?',
      description: 'Modeled university course scheduling as a graph coloring optimization problem, where courses were vertices and student overlaps formed conflict edges.',
      highlights: [
        'Implemented Greedy and Welsh-Powell heuristic coloring algorithms in Python using NetworkX',
        'Reduced simulated scheduling conflicts by 40% and improved room utilization by 12%',
        'Validated coloring correctness with constraint-checking functions',
        'Generated feasible schedules in under 2 seconds for typical instances',
      ],
      impact: 'Demonstrated practical application of NP-complete graph problems to real-world systems',
      image: 'https://images.unsplash.com/photo-1738082956220-a1f20a8632ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaCUyMG5ldHdvcmslMjB2aXN1YWxpemF0aW9uJTIwbm9kZXN8ZW58MXx8fHwxNzcxNzk5ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Algorithms', 'Graph Theory', 'Python', 'NetworkX', 'Optimization'],
      github: null,
      link: null,
    },
    {
      title: 'Impact of Online Images on Gender Bias',
      period: 'Jan. 2024 - Apr. 2024',
      role: 'Research Project Member',
      organization: 'Northeastern University',
      featured: false,
      category: 'Research' as ProjectCategory,
      problem: 'How do visual and textual signals contribute to gender bias in online media?',
      description: 'Analyzed large-scale image and text data to study gender bias across visual and linguistic modalities using computer vision features and word embeddings.',
      highlights: [
        'Designed quantitative bias metrics comparing text vs. image-based representations',
        'Conducted controlled online survey experiments on computational bias measures',
        'Performed correlation analysis assessing visual vs. textual signals on gender stereotypes',
      ],
      impact: 'Presented findings at class research symposium on multimodal bias evaluation',
      image: 'https://images.unsplash.com/photo-1704793027885-28c5856bbd37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5kZXIlMjBiaWFzJTIwcmVzZWFyY2glMjBzdHVkeXxlbnwxfHx8fDE3NzE3OTk4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Computer Vision', 'NLP', 'Bias Analysis', 'Word Embeddings', 'Research'],
      github: null,
      link: null,
    },
    {
      title: 'Husky Mingle — Campus Networking & Collaboration Platform',
      period: 'Jan. 2024 - Apr. 2024',
      role: 'Developer (Team Lead)',
      organization: 'Northeastern University',
      featured: false,
      category: 'Mobile' as ProjectCategory,
      problem: 'Students need better ways to find collaborators and form project groups. How do we build a networking platform?',
      description: 'Led development of a mobile-first campus networking platform enabling project groups, research communities, and peer collaboration.',
      highlights: [
        'Designed core features: group discovery, profile-based matching, and real-time chat',
        'Implemented Firebase authentication, cloud data storage, and push notifications',
        'Reduced time-to-first-connection from 4.2 days to 1.6 days',
        'Instrumented engagement metrics tracking post-event connections',
      ],
      impact: 'Won campus hackathon track for student networking innovation',
      image: 'https://images.unsplash.com/photo-1662148965079-7fbb45160973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBuZXR3b3JraW5nJTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MTc5OTkwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mobile Development', 'Firebase', 'Real-time Chat', 'Team Leadership'],
      github: null,
      link: null,
    },
    {
      title: 'SPAMbase — Probabilistic Email/SMS Spam Classification',
      period: 'Oct. 2023 - Nov. 2023',
      role: 'Data Scientist',
      organization: 'Independent Project',
      featured: false,
      category: 'AI / ML' as ProjectCategory,
      problem: 'How do we build an interpretable spam filter using classical ML techniques?',
      description: 'Built an end-to-end Naïve Bayes spam filtering system grounded in Bayes\' Theorem to classify SMS/email messages as spam or ham.',
      highlights: [
        'Engineered text preprocessing and bag-of-words feature extraction using CountVectorizer',
        'Trained probabilistic classifier estimating prior and conditional word likelihoods',
        'Evaluated performance using accuracy, precision, recall, and confusion matrix analysis',
        'Performed error inspection and threshold tuning to reduce false negatives',
      ],
      impact: 'Established strong classical ML baseline with interpretable probabilistic reasoning',
      image: 'https://images.unsplash.com/photo-1712701425609-3ab78cd5fba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFtJTIwZW1haWwlMjBmaWx0ZXIlMjBzZWN1cml0eXxlbnwxfHx8fDE3NzE3OTk5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Machine Learning', 'Naïve Bayes', 'NLP', 'scikit-learn', 'Text Classification'],
      github: 'https://github.com/Kaustubha-09/Spambase',
      link: null,
    },
  ];

  const categories: ProjectCategory[] = ['All', 'AI / ML', 'Mobile', 'Systems', 'Research'];
  const featuredProjects = projects.filter(p => p.featured);
  const filteredProjects = selectedCategory === 'All' 
    ? projects.filter(p => !p.featured)
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Featured work in AI/ML, mobile development, and systems engineering
          </p>
        </motion.div>

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
                selectedCategory === cat
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects - Only show when "All" is selected */}
        {selectedCategory === 'All' && featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Featured</h3>
            <div className="grid gap-6">
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="group overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="md:col-span-1 aspect-video md:aspect-auto overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="md:col-span-2 p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{project.role} · {project.organization}</p>
                          </div>
                          <Badge variant="secondary" className="text-xs">{project.period}</Badge>
                        </div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white mb-2">Problem</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{project.problem}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <Badge 
                              key={tag} 
                              variant="outline" 
                              className="text-xs bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                          {project.github && (
                            <a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                              <Github size={16} />
                              GitHub
                            </a>
                          )}
                          {project.link && (
                            <a 
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                              <ExternalLink size={16} />
                              Demo
                            </a>
                          )}
                          <button className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <FileText size={16} />
                            Case Study
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        {filteredProjects.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="group h-full overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                        <Badge variant="secondary" className="text-xs">{project.period}</Badge>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{project.problem}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="text-xs bg-slate-50 dark:bg-slate-800"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                          >
                            GitHub
                          </a>
                        )}
                        {project.link && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                          >
                            Demo
                          </a>
                        )}
                      </div>
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