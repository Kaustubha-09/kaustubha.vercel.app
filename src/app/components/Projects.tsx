import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Semantic Diff Prompting for Video Understanding',
      period: 'Sep. 2025 - Dec. 2025',
      role: 'Generative AI Researcher',
      organization: 'Northeastern University',
      description: 'Introduced Semantic Diff Prompting, a prompt-engineering framework for Vision-Language Models that models temporal semantic changes instead of independent frame-level captions.',
      highlights: [
        'Designed structured, state-aware prompts to capture object transitions, motion events, and scene dynamics',
        'Engineered end-to-end video understanding pipeline for frame extraction and multimodal caption generation',
        'Developed quantitative evaluation metrics for token efficiency and action-centric information density',
        'Impact: Achieved 56-68% token reduction while improving action-focused semantic coverage',
      ],
      image: 'https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGVlcCUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTc5NzMzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Generative AI', 'VLMs', 'Prompt Engineering', 'Video Understanding', 'PyTorch'],
    },
    {
      title: 'Notification Urgency Classifier',
      period: 'Sep. 2025 - Dec. 2025',
      role: 'Machine Learning Engineer',
      organization: 'Northeastern University',
      description: 'Developed a supervised NLP system to classify notifications into Eisenhower Matrix priority levels (Urgent/Important quadrants) using message text alone.',
      highlights: [
        'Engineered end-to-end ML pipeline with TF-IDF feature extraction and Multinomial Naïve Bayes',
        'Synthesized representative dataset of professional notifications for controlled experimentation',
        'Improved classification accuracy from 0.41 → 0.93 vs. rule-based baseline',
        'Implemented notification summarization with DistilBART transformer model',
      ],
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTczMTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['NLP', 'Machine Learning', 'TF-IDF', 'DistilBART', 'Text Classification'],
    },
    {
      title: 'Echolin.AI — Deepfake Media Detection Platform',
      period: 'Jun. 2025 - Jul. 2025',
      role: 'Lead Developer & Researcher',
      organization: 'Independent Research',
      description: 'Architected an end-to-end AI-powered media forensics platform for deepfake detection using CNN-based models and ensemble classification strategies.',
      highlights: [
        'Built scalable data pipelines with augmentation techniques for model generalization',
        'Designed rigorous evaluation workflows with false-positive analysis and error inspection',
        'Integrated Grad-CAM-based visual interpretability for model attention analysis',
        'Engineered low-latency inference system with FastAPI and GPU-backed execution',
        'Impact: Open-sourced with 120+ GitHub stars and active community engagement',
      ],
      image: 'https://images.unsplash.com/photo-1653836592221-9e85949e71a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwZmFrZSUyMGRldGVjdGlvbiUyMHNlY3VyaXR5fGVufDF8fHx8MTc3MTc5NzMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Deep Learning', 'CNN', 'FastAPI', 'Computer Vision', 'Grad-CAM'],
    },
    {
      title: 'RapidTriage AI — Intelligent Emergency Care Prioritization',
      period: 'Jan. 2025 - Apr. 2025',
      role: 'ML Engineer & System Designer',
      organization: 'Northeastern University',
      description: 'Designed an AI-driven triage classification system using structured and free-text clinical-style inputs to predict patient priority levels in emergency scenarios.',
      highlights: [
        'Engineered reproducible data preprocessing and feature pipelines, reducing cycle time by 20%',
        'Improved macro-F1 by +0.12 through optimization and class-imbalance mitigation',
        'Applied probability calibration to reduce overconfident predictions on high-risk cases',
        'Simulated emergency department workflows via dashboard prototype',
        'Impact: Recognized as top project during course demo day for technical depth',
      ],
      image: 'https://images.unsplash.com/photo-1758404958502-44f156617bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBtZWRpY2FsJTIwdHJpYWdlJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzcxNzk3MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Machine Learning', 'Healthcare AI', 'Classification', 'Python', 'scikit-learn'],
    },
    {
      title: 'NEUQuest — Student Event & Travel Companion Application',
      period: 'May. 2024 - Aug. 2024',
      role: 'Full-Stack Android Developer',
      organization: 'Northeastern University',
      description: 'Developed a full-stack Android application with Firebase Realtime Database, authentication, maps integration, and push notifications to support student event discovery and travel coordination.',
      highlights: [
        'Implemented offline caching and resilient data synchronization',
        'Achieved 90%+ Lighthouse performance and accessibility scores',
        'Supported onboarding of 200+ users with engagement tracking',
        'Reduced recurring support issues with in-app verification flows and deep linking',
        'Impact: Selected as top project during Northeastern hackathon showcase',
      ],
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGFuZHJvaWR8ZW58MXx8fHwxNzcxNzk3MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Android', 'Firebase', 'Java', 'MVVM', 'Google Maps'],
    },
    {
      title: 'Course Scheduling Optimization via Graph Coloring',
      period: 'Mar. 2024 - Apr. 2024',
      role: 'Research Project Member',
      organization: 'Northeastern University',
      description: 'Modeled university course scheduling as a graph coloring optimization problem, where courses were vertices and student overlaps formed conflict edges.',
      highlights: [
        'Implemented Greedy and Welsh-Powell heuristic coloring algorithms in Python using NetworkX',
        'Reduced simulated scheduling conflicts by 40% and improved room utilization by 12%',
        'Validated coloring correctness with constraint-checking functions',
        'Generated feasible schedules in under 2 seconds for typical instances',
        'Impact: Demonstrated practical application of NP-complete graph problems to real-world systems',
      ],
      image: 'https://images.unsplash.com/photo-1738082956220-a1f20a8632ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaCUyMG5ldHdvcmslMjB2aXN1YWxpemF0aW9uJTIwbm9kZXN8ZW58MXx8fHwxNzcxNzk5ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Algorithms', 'Graph Theory', 'Python', 'NetworkX', 'Optimization'],
    },
    {
      title: 'Impact of Online Images on Gender Bias',
      period: 'Jan. 2024 - Apr. 2024',
      role: 'Research Project Member',
      organization: 'Northeastern University',
      description: 'Analyzed large-scale image and text data to study gender bias across visual and linguistic modalities using computer vision features and word embeddings.',
      highlights: [
        'Designed quantitative bias metrics comparing text vs. image-based representations',
        'Conducted controlled online survey experiments on computational bias measures',
        'Performed correlation analysis assessing visual vs. textual signals on gender stereotypes',
        'Impact: Presented findings at class research symposium on multimodal bias evaluation',
      ],
      image: 'https://images.unsplash.com/photo-1704793027885-28c5856bbd37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5kZXIlMjBiaWFzJTIwcmVzZWFyY2glMjBzdHVkeXxlbnwxfHx8fDE3NzE3OTk4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Computer Vision', 'NLP', 'Bias Analysis', 'Word Embeddings', 'Research'],
    },
    {
      title: 'Husky Mingle — Campus Networking & Collaboration Platform',
      period: 'Jan. 2024 - Apr. 2024',
      role: 'Developer (Team Lead)',
      organization: 'Northeastern University',
      description: 'Led development of a mobile-first campus networking platform enabling project groups, research communities, and peer collaboration.',
      highlights: [
        'Designed core features: group discovery, profile-based matching, and real-time chat',
        'Implemented Firebase authentication, cloud data storage, and push notifications',
        'Reduced time-to-first-connection from 4.2 days to 1.6 days',
        'Instrumented engagement metrics tracking post-event connections',
        'Impact: Won campus hackathon track for student networking innovation',
      ],
      image: 'https://images.unsplash.com/photo-1662148965079-7fbb45160973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBuZXR3b3JraW5nJTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MTc5OTkwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mobile Development', 'Firebase', 'Real-time Chat', 'Team Leadership'],
    },
    {
      title: 'SPAMbase — Probabilistic Email/SMS Spam Classification',
      period: 'Oct. 2023 - Nov. 2023',
      role: 'Data Scientist',
      organization: 'Independent Project',
      description: 'Built an end-to-end Naïve Bayes spam filtering system grounded in Bayes\' Theorem to classify SMS/email messages as spam or ham.',
      highlights: [
        'Engineered text preprocessing and bag-of-words feature extraction using CountVectorizer',
        'Trained probabilistic classifier estimating prior and conditional word likelihoods',
        'Evaluated performance using accuracy, precision, recall, and confusion matrix analysis',
        'Performed error inspection and threshold tuning to reduce false negatives',
        'Impact: Established strong classical ML baseline with interpretable probabilistic reasoning',
      ],
      image: 'https://images.unsplash.com/photo-1712701425609-3ab78cd5fba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFtJTIwZW1haWwlMjBmaWx0ZXIlMjBzZWN1cml0eXxlbnwxfHx8fDE3NzE3OTk5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Machine Learning', 'Naïve Bayes', 'NLP', 'scikit-learn', 'Text Classification'],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16">Featured Projects</h2>
        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2 aspect-video md:aspect-auto overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-2xl mb-1">{project.title}</h3>
                    <span className="text-sm text-slate-500 md:text-right whitespace-nowrap">{project.period}</span>
                  </div>
                  <p className="text-sm text-blue-600 mb-1">{project.role}</p>
                  <p className="text-sm text-slate-500 mb-4">{project.organization}</p>
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-slate-600">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}