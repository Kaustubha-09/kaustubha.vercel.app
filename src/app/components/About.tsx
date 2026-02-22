import { Code2, Brain, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Brain,
      title: 'AI/ML Systems',
      description: 'Building production-ready AI systems with PyTorch, RAG pipelines, and LLMs',
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Architecting scalable web and mobile applications with modern frameworks',
    },
    {
      icon: Users,
      title: 'Accessibility-First',
      description: 'Creating inclusive technology that empowers blind and low-vision users',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-slate-600 mb-6">
              I'm a Research Software Engineer specializing in AI/ML and accessibility systems. Currently pursuing my M.S. in Computer Science at Northeastern University with a focus on AI, Generative AI, and scalable system design.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              My work at Smith-Kettlewell Eye Research Institute and Evenness, Inc. has centered on building production AI systems that serve real users—from accessibility platforms serving blind/low-vision communities to compliance analysis systems achieving 100% WCAG coverage.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              I'm passionate about bridging research and engineering, shipping AI systems that work reliably in production, and mentoring the next generation of developers.
            </p>
          </div>
          <div className="grid gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-blue-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}