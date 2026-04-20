import { Brain, Target, Rocket, TrendingUp, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { containerVariants, itemVariants } from '../../lib/animations';

const DIFFERENTIATORS = [
  { icon: Brain,   label: 'AI + Accessibility', desc: 'Production AI for blind and low-vision users — RAG, VLMs, WCAG AA+' },
  { icon: Target,  label: 'Research → Production', desc: 'Turned a research prototype into a shipped App Store product used daily' },
  { icon: Rocket,  label: 'Promoted Twice', desc: 'Intern → Lead at both Smith-Kettlewell and Evenness Inc.' },
];

const LOOKING_FOR = ['AI/ML Engineering', 'Accessibility Tech', 'Mobile Engineering', 'Full Stack / SDE'];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="01 — About"
          title="About"
          description="From architectural engineering to building intelligent systems"
          className="mb-6"
        />

        {/* Narrative + Image side by side */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              I started building things in CAD and Revit — designing structural systems, coordinating drawings, optimizing load paths.
              Architectural engineering taught me to think in systems: every element has a purpose, every constraint is a design decision.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Then I asked why the software itself couldn't be smarter. That question led me to computer science, then to AI —
              and my blueprints became pipelines. At Northeastern, I built mobile apps, trained models, and shipped production systems.
              At Smith-Kettlewell, I helped make YouDescribeX real — a research prototype that became a product used daily by blind and
              low-vision users. At Evenness, I built agentic AI workflows that cut compliance audit cycles by 40%.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Today I build AI systems at the intersection of technical precision and human need —
              <strong className="text-slate-900 dark:text-white"> especially for the people the defaults forget.</strong>
            </p>
            <a
              href="https://siliconvalley.northeastern.edu/kaustubha-eluri-aspiring-product-manager/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium transition-opacity hover:opacity-75"
              style={{ color: '#00D4AA' }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Featured on Northeastern Silicon Valley
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB0ZWNoJTIwd29ya3NwYWNlJTIwZGFya3xlbnwxfHx8fDE3NzE4MDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Coding workspace"
                className="w-full h-72 object-cover"
              />
            </div>
            {/* Accent border */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl -z-10"
              style={{ border: '2px solid rgba(0,212,170,0.3)' }}
            />
          </motion.div>
        </div>

        {/* Differentiators */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-5">
            {DIFFERENTIATORS.map(({ icon: Icon, label, desc }) => (
              <motion.div key={label} variants={itemVariants}>
                <Card className="h-full border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(0,212,170,0.1)' }}>
                      <Icon size={20} style={{ color: '#00D4AA' }} />
                    </div>
                    <h4 className="text-base font-semibold mb-2 text-slate-900 dark:text-white">{label}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
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
          <Card className="border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-semibold mb-4 text-slate-900 dark:text-white uppercase tracking-wide">AI/ML Systems</h4>
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <li>· RAG pipelines for knowledge retrieval</li>
                    <li>· Agentic workflows for automation</li>
                    <li>· Vision-Language Models for accessibility</li>
                    <li>· Production ML inference systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-4 text-slate-900 dark:text-white uppercase tracking-wide">Full-Stack Platforms</h4>
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <li>· Cross-platform mobile apps (iOS, Android)</li>
                    <li>· Scalable backend APIs (FastAPI, Node.js)</li>
                    <li>· Real-time systems with Firebase</li>
                    <li>· Cloud-native architectures (AWS, Docker)</li>
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
          <div
            className="rounded-xl p-8 border"
            style={{ background: 'rgba(0,212,170,0.05)', borderColor: 'rgba(0,212,170,0.2)' }}
          >
            <TrendingUp className="w-10 h-10 mx-auto mb-4" style={{ color: '#00D4AA' }} />
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">What I'm Looking For Next</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-5">
              Full-time SWE, AI/ML Engineering, or Product Engineering roles — building systems that solve real problems.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {LOOKING_FOR.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.3)', color: '#00D4AA' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
