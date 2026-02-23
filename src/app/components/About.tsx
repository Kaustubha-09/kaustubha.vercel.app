import { Code2, Brain, Users, User, TrendingUp, Target, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

export function About() {
  const timeline = [
    {
      year: '2021',
      title: 'Architectural Engineer → Computer Scientist',
      description: 'Transitioned from building physical structures to designing intelligent systems',
    },
    {
      year: '2023',
      title: 'M.S. Computer Science @ Northeastern',
      description: 'Focused on AI/ML, Generative AI, and scalable system design',
    },
    {
      year: '2024',
      title: 'Teaching Assistant & Product Leader',
      description: 'Mentored 30+ students, led APMC as President, built mobile apps',
    },
    {
      year: '2025',
      title: 'Research SWE @ Smith-Kettlewell',
      description: 'Led AI/ML engineering for YouDescribeX, serving blind/low-vision users',
    },
    {
      year: '2025-2026',
      title: 'Lead AI Engineer @ Evenness',
      description: 'Built production AI systems achieving 100% WCAG coverage',
    },
  ];

  const problemsICareAbout = [
    {
      icon: Brain,
      title: 'AI + Accessibility',
      description: 'Building AI systems that make technology accessible to everyone, especially blind and low-vision users',
    },
    {
      icon: Target,
      title: 'Research → Production',
      description: 'Bridging the gap between research prototypes and production-ready systems that serve real users',
    },
    {
      icon: Rocket,
      title: 'Scalable Systems',
      description: 'Designing systems that scale reliably, from mobile apps to cloud infrastructure',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            From architectural engineering to building intelligent systems
          </p>
        </motion.div>
        
        {/* Journey Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-slate-900 dark:text-white leading-relaxed mb-6 font-medium">
              I started my career designing buildings. Today, I design intelligent systems.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              My background in architectural engineering taught me how to think in structures—how every component connects, supports, and scales. When I transitioned into computer science at Northeastern University, my blueprints became algorithms, APIs, and AI models—but the mindset stayed the same: <strong className="text-slate-900 dark:text-white">build things that work beautifully and reliably.</strong>
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Now, I'm a Research Software Engineer focused on building production-ready, accessibility-first platforms. At Smith-Kettlewell, I helped transform YouDescribeX from a research prototype into a real product used by blind and low-vision users. At Evenness, I built and deployed agentic AI workflows across production microservices—achieving 99.9% uptime and reducing audit cycles by 40%.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-slate-900 dark:text-white">Career Timeline</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-20"
                  variants={itemVariants}
                >
                  <div className="absolute left-6 top-2 w-4 h-4 bg-slate-900 dark:bg-white rounded-full border-4 border-white dark:border-slate-900"></div>
                  <Card className="border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="text-xs">{item.year}</Badge>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What I Care About */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-slate-900 dark:text-white">What I Care About</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {problemsICareAbout.map((problem, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="h-full border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                      <problem.icon className="text-slate-600 dark:text-slate-400" size={20} />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{problem.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{problem.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Systems I Build */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-slate-900 dark:text-white">Systems I Build</h3>
          <Card className="border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">AI/ML Systems</h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>• RAG pipelines for knowledge retrieval</li>
                    <li>• Agentic workflows for automation</li>
                    <li>• Vision-Language Models for accessibility</li>
                    <li>• Production ML inference systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Full-Stack Platforms</h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>• Cross-platform mobile apps (iOS, Android)</li>
                    <li>• Scalable backend APIs (FastAPI, Node.js)</li>
                    <li>• Real-time systems with Firebase</li>
                    <li>• Cloud-native architectures</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* What I'm Looking For */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border border-slate-200 dark:border-slate-800 bg-slate-900 dark:bg-white text-white dark:text-slate-900">
            <CardContent className="p-8">
              <TrendingUp className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">What I'm Looking For Next</h3>
              <p className="text-sm text-white/90 dark:text-slate-600 max-w-2xl mx-auto mb-6">
                I'm seeking full-time Software Engineering, AI/ML Engineering, or Product Engineering roles where I can build intelligent systems that solve real problems.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="bg-white/10 dark:bg-slate-900/10 border-white/30 dark:border-slate-900/30 text-white dark:text-slate-900">AI/ML Systems</Badge>
                <Badge variant="outline" className="bg-white/10 dark:bg-slate-900/10 border-white/30 dark:border-slate-900/30 text-white dark:text-slate-900">Accessibility Tech</Badge>
                <Badge variant="outline" className="bg-white/10 dark:bg-slate-900/10 border-white/30 dark:border-slate-900/30 text-white dark:text-slate-900">Mobile Engineering</Badge>
                <Badge variant="outline" className="bg-white/10 dark:bg-slate-900/10 border-white/30 dark:border-slate-900/30 text-white dark:text-slate-900">Production Systems</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}