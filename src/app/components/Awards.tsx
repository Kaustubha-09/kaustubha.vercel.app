import { Trophy } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { containerVariants, itemVariants } from '../../lib/animations';

interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
  tier: 'gold' | 'silver';
}

export function Awards() {
  const awards: Award[] = [
    {
      title: 'Laurel & Scroll 100 Award',
      organization: 'Northeastern University',
      date: 'Apr. 2026',
      description: 'Selected among top graduating students for outstanding academic achievement, leadership, and impact.',
      tier: 'gold',
    },
    {
      title: 'Silicon Valley Leadership Legacy Award',
      organization: 'Northeastern University',
      date: 'Apr. 2026',
      description: 'Recognized for leadership and contributions to the Northeastern Silicon Valley community.',
      tier: 'gold',
    },
    {
      title: 'Khoury College Recognition (Nominee)',
      organization: 'Northeastern University',
      date: '2026',
      description: 'Nominated for academic excellence and contributions to Khoury College of Computer Sciences.',
      tier: 'silver',
    },
    {
      title: 'Top Project Recognition',
      organization: 'Northeastern University',
      date: '2025',
      description: 'Awarded for RapidTriage AI for technical depth and evaluation rigor at course demo day.',
      tier: 'silver',
    },
    {
      title: 'Hackathon Recognition – Student Networking Innovation',
      organization: 'Northeastern University',
      date: '2024',
      description: 'Won for Husky Mingle, a mobile-first collaboration platform, at campus hackathon.',
      tier: 'silver',
    },
  ];

  return (
    <section id="awards" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="05 — Awards"
          title="Awards & Recognition"
          description="Recognized for academic achievement, technical excellence, and leadership"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awards.map((award) => (
            <motion.div key={award.title} variants={itemVariants}>
              <Card className="border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all h-full">
                <CardContent className="pt-6 flex flex-col h-full gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className="p-2 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{ background: award.tier === 'gold' ? 'rgba(251,191,36,0.15)' : 'rgba(148,163,184,0.1)' }}
                    >
                      <Trophy
                        className="w-4 h-4"
                        style={{ color: award.tier === 'gold' ? '#F59E0B' : 'rgb(148,163,184)' }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                        {award.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800">
                      {award.organization}
                    </Badge>
                    <span className="text-xs text-slate-400 dark:text-slate-500">{award.date}</span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-auto">
                    {award.description}
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
