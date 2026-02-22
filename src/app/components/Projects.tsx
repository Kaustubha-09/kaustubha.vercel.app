import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'YouDescribeX',
      description: 'AI-powered accessibility platform for blind/low-vision users with audio descriptions, temporal Q&A, and multi-platform support. Featured on App Store.',
      image: 'https://images.unsplash.com/photo-1576864333223-db90dadfb975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwdGVjaG5vbG9neSUyMGJsaW5kJTIwdmlzaW9ufGVufDF8fHx8MTc3MTc5NzMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['AI/ML', 'iOS', 'Android', 'FastAPI', 'Accessibility'],
      link: 'https://ydx.youdescribe.org/home',
    },
    {
      title: 'Semantic Diff Prompting',
      description: 'Novel prompt-engineering framework for Vision-Language Models modeling temporal semantic changes. Achieved 56-68% token reduction while improving action-focused coverage.',
      image: 'https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGVlcCUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTc5NzMzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Generative AI', 'VLMs', 'Prompt Engineering', 'Video Understanding'],
    },
    {
      title: 'Echolin.AI',
      description: 'Deepfake media detection platform using CNN-based models and Grad-CAM interpretability. Open-sourced with 120+ GitHub stars.',
      image: 'https://images.unsplash.com/photo-1653836592221-9e85949e71a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwZmFrZSUyMGRldGVjdGlvbiUyMHNlY3VyaXR5fGVufDF8fHx8MTc3MTc5NzMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Deep Learning', 'CNN', 'FastAPI', 'Computer Vision'],
    },
    {
      title: 'RapidTriage AI',
      description: 'ML-driven emergency triage classification system. Improved macro-F1 by +0.12 through optimization and class-imbalance mitigation. Top project in course demo day.',
      image: 'https://images.unsplash.com/photo-1758404958502-44f156617bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBtZWRpY2FsJTIwdHJpYWdlJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzcxNzk3MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Machine Learning', 'Healthcare AI', 'Classification', 'Python'],
    },
    {
      title: 'NEUQuest',
      description: 'Full-stack Android event discovery app with offline caching, Firebase integration, and push notifications. Top hackathon project serving 200+ users.',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGFuZHJvaWR8ZW58MXx8fHwxNzcxNzk3MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Android', 'Firebase', 'Java', 'MVVM'],
    },
    {
      title: 'Notification Urgency Classifier',
      description: 'NLP system classifying notifications into Eisenhower Matrix priority levels. Improved accuracy from 0.41 → 0.93 using TF-IDF and Naive Bayes.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTczMTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['NLP', 'Machine Learning', 'Text Classification', 'DistilBART'],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <div className="flex gap-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}