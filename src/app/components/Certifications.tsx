import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  focus: string;
  link?: string;
}

export function Certifications() {
  const certifications: Certification[] = [
    {
      name: 'Data Science for Construction, Architecture and Engineering',
      issuer: 'edX',
      date: 'Dec. 2024',
      focus: 'Applied ML in infrastructure and built-environment systems',
    },
    {
      name: 'Generative AI for Creativity and Innovation',
      issuer: 'Adobe',
      date: 'Nov. 2023',
      focus: 'Applied generative AI for UX prototyping and content generation',
    },
    {
      name: 'Foundations of Cloud Computing',
      issuer: 'Codecademy',
      date: 'Feb. 2023',
      focus: 'Cloud-native architecture and serverless workflows (AWS EC2, S3, Lambda)',
    },
    {
      name: 'Computer Applications of AI and e-Construction',
      issuer: 'edX',
      date: 'Apr. 2022',
      focus: 'AI-driven automation in digital construction and BIM workflows',
    },
    {
      name: 'BIM: From Sketch to Digital Twin',
      issuer: 'Coursera',
      date: 'Mar. 2022',
      focus: 'Digital twin modeling, lifecycle simulation, and BIM-to-analytics integration',
    },
    {
      name: 'Programming Essentials in Python (PCAP)',
      issuer: 'Cisco',
      date: 'Aug. 2022',
      focus: 'Python OOP, data structures, exception handling, and file I/O',
    },
    {
      name: 'Introduction to Artificial Intelligence',
      issuer: 'University of Helsinki',
      date: 'Jul. 2022',
      focus: 'Search algorithms, planning systems, and reasoning under uncertainty',
    },
  ];

  const issuerColors: Record<string, string> = {
    edX: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
    Adobe: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
    Codecademy: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800',
    Coursera: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    Cisco: 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800',
    'University of Helsinki': 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-eyebrow mb-3">07 — Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Continuous learning across AI, cloud, and systems domains
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.name} variants={itemVariants}>
              <Card className="border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all h-full group">
                <CardContent className="pt-6 flex flex-col h-full gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                        {cert.link ? (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                          >
                            {cert.name}
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          cert.name
                        )}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      variant="outline"
                      className={`text-xs ${issuerColors[cert.issuer] ?? 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
                    >
                      {cert.issuer}
                    </Badge>
                    <span className="text-xs text-slate-400 dark:text-slate-500">{cert.date}</span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-auto">
                    {cert.focus}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
