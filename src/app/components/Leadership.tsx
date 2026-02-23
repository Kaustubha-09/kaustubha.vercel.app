import { Award, Users, Lightbulb, TrendingUp, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

export function Leadership() {
  const leadership = [
    {
      organization: 'NEURAI Research Lab',
      role: 'Founding Researcher',
      period: 'Mar. 2025 - Dec. 2025',
      icon: Lightbulb,
      image: '/assets/photos/northeastern_team.png',
      initiative: 'Co-founded research lab focused on interpretable and responsible ML',
      ownership: 'Led code reviews, replication efforts, and experiment consistency across team',
      outcome: 'Co-authored proposal securing $2k in compute credits; established lab infrastructure',
      link: 'https://neurai.sites.northeastern.edu/our-team/kaustubha-eluri/',
    },
    {
      organization: 'Aspiring Product Managers Club (APMC)',
      role: 'President',
      period: 'Jan. 2024 - Dec. 2025',
      icon: Users,
      image: '/assets/photos/apmc_team.png',
      initiative: 'Led student organization focused on PM interview prep and career development',
      ownership: 'Organized workshops, mentored members, managed club operations and strategy',
      outcome: 'Received student leadership award in 2025; supported 50+ members in PM career prep',
    },
    {
      organization: 'AI/Data Club',
      role: 'Core Organizer',
      period: 'Jan. 2025 - Dec. 2025',
      icon: Rocket,
      image: '/assets/photos/work_collaboration.png',
      initiative: 'Organized ML study sessions and hands-on workshops for students',
      ownership: 'Coordinated internal hackathons, built starter templates, facilitated learning',
      outcome: 'Reduced onboarding time for new participants; supported functional demos',
    },
    {
      organization: 'Student Ambassador',
      role: 'Campus Representative',
      period: 'May 2024 - Aug. 2025',
      icon: TrendingUp,
      image: '/assets/photos/student_ambassador_team.png',
      initiative: 'Represented university at academic and community events',
      ownership: 'Guided prospective students, communicated program value, built relationships',
      outcome: 'Selected based on leadership and communication ability; supported admissions',
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
    <section id="leadership" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Leadership & Involvement
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Leading initiatives that drive impact and build community
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {leadership.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all h-full overflow-hidden">
                {item.image && (
                  <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <ImageWithFallback
                      src={item.image}
                      alt={`${item.organization} Team`}
                      className="w-full h-full object-cover"
                      fallbackSrc="/assets/photos/work_collaboration.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg flex-shrink-0">
                      <item.icon className="text-slate-600 dark:text-slate-400" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 text-slate-900 dark:text-white">
                        {item.link ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {item.organization} →
                          </a>
                        ) : (
                          item.organization
                        )}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{item.role}</p>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {item.period}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white mb-1">Initiative</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.initiative}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white mb-1">Ownership</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.ownership}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white mb-1">Outcome</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
