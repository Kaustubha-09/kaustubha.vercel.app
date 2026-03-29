import { Code, Brain, Server, Smartphone, Cloud, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { containerVariants, itemVariants } from '../../lib/animations';

type Proficiency = 'Expert' | 'Advanced' | 'Intermediate';

interface Skill {
  name: string;
  proficiency: Proficiency;
}

export function Skills() {
  const skillCategories = [
    {
      category: 'AI / ML',
      icon: Brain,
      skills: [
        { name: 'PyTorch', proficiency: 'Expert' as Proficiency },
        { name: 'RAG Pipelines', proficiency: 'Expert' as Proficiency },
        { name: 'Prompt Engineering', proficiency: 'Expert' as Proficiency },
        { name: 'LLMs', proficiency: 'Advanced' as Proficiency },
        { name: 'Hugging Face', proficiency: 'Advanced' as Proficiency },
        { name: 'OpenAI APIs', proficiency: 'Advanced' as Proficiency },
        { name: 'TensorFlow', proficiency: 'Advanced' as Proficiency },
      ],
    },
    {
      category: 'Backend Systems',
      icon: Server,
      skills: [
        { name: 'Python', proficiency: 'Expert' as Proficiency },
        { name: 'FastAPI', proficiency: 'Expert' as Proficiency },
        { name: 'REST APIs', proficiency: 'Expert' as Proficiency },
        { name: 'Node.js', proficiency: 'Advanced' as Proficiency },
        { name: 'Flask', proficiency: 'Advanced' as Proficiency },
        { name: 'GraphQL', proficiency: 'Intermediate' as Proficiency },
      ],
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      skills: [
        { name: 'Android (Java/MVVM)', proficiency: 'Expert' as Proficiency },
        { name: 'Firebase', proficiency: 'Expert' as Proficiency },
        { name: 'Kotlin', proficiency: 'Advanced' as Proficiency },
        { name: 'Flutter', proficiency: 'Advanced' as Proficiency },
        { name: 'iOS (Swift)', proficiency: 'Intermediate' as Proficiency },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'Git', proficiency: 'Expert' as Proficiency },
        { name: 'AWS', proficiency: 'Advanced' as Proficiency },
        { name: 'Docker', proficiency: 'Advanced' as Proficiency },
        { name: 'GitHub Actions', proficiency: 'Advanced' as Proficiency },
        { name: 'CI/CD', proficiency: 'Advanced' as Proficiency },
      ],
    },
    {
      category: 'Frontend & Tools',
      icon: Code,
      skills: [
        { name: 'TypeScript', proficiency: 'Advanced' as Proficiency },
        { name: 'React', proficiency: 'Advanced' as Proficiency },
        { name: 'JavaScript', proficiency: 'Advanced' as Proficiency },
        { name: 'PostgreSQL', proficiency: 'Advanced' as Proficiency },
        { name: 'SQLite', proficiency: 'Advanced' as Proficiency },
        { name: 'MongoDB', proficiency: 'Intermediate' as Proficiency },
      ],
    },
    {
      category: 'Accessibility',
      icon: Eye,
      skills: [
        { name: 'WCAG 2.1 (AA+)', proficiency: 'Expert' as Proficiency },
        { name: 'Accessibility Auditing', proficiency: 'Expert' as Proficiency },
        { name: 'Keyboard Navigation', proficiency: 'Expert' as Proficiency },
        { name: 'NVDA Screen Reader', proficiency: 'Advanced' as Proficiency },
        { name: 'VoiceOver', proficiency: 'Advanced' as Proficiency },
      ],
    },
  ];

  const chipStyle = (proficiency: Proficiency) => {
    if (proficiency === 'Expert') {
      return {
        background: 'rgba(0,212,170,0.1)',
        border: '1px solid rgba(0,212,170,0.35)',
        color: '#00D4AA',
      };
    }
    if (proficiency === 'Advanced') {
      return {
        background: 'transparent',
        border: '1px solid rgba(148,163,184,0.25)',
        color: 'rgb(148,163,184)',
      };
    }
    return {
      background: 'transparent',
      border: '1px solid rgba(100,116,139,0.2)',
      color: 'rgb(100,116,139)',
    };
  };

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="05 — Skills"
          title="Technical Skills"
          description="Technologies and tools I use to build production systems"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.category} variants={itemVariants}>
              <div className="card-sweep h-full rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg transition-all bg-white dark:bg-slate-900">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                    <category.icon className="text-slate-600 dark:text-slate-400" size={18} />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Chip cloud */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={chipStyle(skill.proficiency)}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                  <span
                    className="px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(0,212,170,0.1)',
                      border: '1px solid rgba(0,212,170,0.35)',
                      color: '#00D4AA',
                      fontSize: '0.65rem',
                    }}
                  >
                    Expert
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-full"
                    style={{
                      border: '1px solid rgba(148,163,184,0.25)',
                      color: 'rgb(148,163,184)',
                      fontSize: '0.65rem',
                    }}
                  >
                    Advanced
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-full"
                    style={{
                      border: '1px solid rgba(100,116,139,0.2)',
                      color: 'rgb(100,116,139)',
                      fontSize: '0.65rem',
                    }}
                  >
                    Intermediate
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
