import { Code, Brain, Server, Smartphone, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Proficiency = 'Expert' | 'Advanced' | 'Intermediate';

interface Skill {
  name: string;
  proficiency: Proficiency;
  image?: string;
}

export function Skills() {
  const skillCategories = [
    {
      category: 'AI/ML',
      icon: Brain,
      color: 'purple',
      image: '/assets/photos/hero_tech_illustration.png',
      skills: [
        { name: 'PyTorch', proficiency: 'Expert' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'RAG Pipelines', proficiency: 'Expert' as Proficiency },
        { name: 'Prompt Engineering', proficiency: 'Expert' as Proficiency },
        { name: 'Hugging Face', proficiency: 'Advanced' as Proficiency, image: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
        { name: 'OpenAI APIs', proficiency: 'Advanced' as Proficiency },
        { name: 'TensorFlow', proficiency: 'Advanced' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'LLMs', proficiency: 'Advanced' as Proficiency },
      ],
    },
    {
      category: 'Backend Systems',
      icon: Server,
      color: 'blue',
      image: '/assets/photos/work_collaboration.png',
      skills: [
        { name: 'Python', proficiency: 'Expert' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'FastAPI', proficiency: 'Expert' as Proficiency },
        { name: 'REST APIs', proficiency: 'Expert' as Proficiency },
        { name: 'Node.js', proficiency: 'Advanced' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Flask', proficiency: 'Advanced' as Proficiency },
        { name: 'GraphQL', proficiency: 'Intermediate' as Proficiency },
      ],
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      color: 'green',
      image: '/assets/photos/northeastern_team.png',
      skills: [
        { name: 'Android (Java/MVVM)', proficiency: 'Expert' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
        { name: 'Firebase', proficiency: 'Expert' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Kotlin', proficiency: 'Advanced' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'Flutter', proficiency: 'Advanced' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'iOS (Swift)', proficiency: 'Intermediate' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'orange',
      image: '/assets/photos/work_collaboration.png',
      skills: [
        { name: 'AWS', proficiency: 'Advanced' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Docker', proficiency: 'Advanced' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'GitHub Actions', proficiency: 'Advanced' as Proficiency },
        { name: 'CI/CD', proficiency: 'Advanced' as Proficiency },
        { name: 'Git', proficiency: 'Expert' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      ],
    },
    {
      category: 'Tools',
      icon: Code,
      color: 'indigo',
      image: '/assets/photos/hero_tech_illustration.png',
      skills: [
        { name: 'TypeScript', proficiency: 'Advanced' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'JavaScript', proficiency: 'Advanced' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', proficiency: 'Advanced' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'PostgreSQL', proficiency: 'Advanced' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', proficiency: 'Intermediate' as Proficiency, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'SQLite', proficiency: 'Advanced' as Proficiency },
      ],
    },
  ];

  const getProficiencyColor = (proficiency: Proficiency) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getProficiencyWidth = (proficiency: Proficiency) => {
    switch (proficiency) {
      case 'Expert':
        return 'w-full';
      case 'Advanced':
        return 'w-4/5';
      case 'Intermediate':
        return 'w-3/5';
      default:
        return 'w-1/2';
    }
  };

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
    <section id="skills" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Technologies and tools I use to build production systems
          </p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={category.category} variants={itemVariants}>
              <Card className="border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all h-full overflow-hidden">
                {/* Category Image */}
                {category.image && (
                  <div className="relative h-32 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.category}
                      className="w-full h-full object-cover opacity-60"
                      fallbackSrc="/assets/photos/work_collaboration.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent"></div>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <category.icon className="text-slate-600 dark:text-slate-400" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.category}</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          {skill.image && (
                            <div className="flex-shrink-0 w-6 h-6 rounded overflow-hidden bg-white dark:bg-slate-800 p-0.5 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                              <ImageWithFallback
                                src={skill.image}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">{skill.name}</span>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-xs flex-shrink-0 ${
                            skill.proficiency === 'Expert' 
                              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                              : skill.proficiency === 'Advanced'
                              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800'
                              : 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800'
                          }`}
                        >
                          {skill.proficiency}
                        </Badge>
                      </div>
                      <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${getProficiencyColor(skill.proficiency)} ${getProficiencyWidth(skill.proficiency)}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.05 }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}