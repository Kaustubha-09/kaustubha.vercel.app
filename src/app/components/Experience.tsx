import { Briefcase, Brain, Zap, Users, ChevronDown, ChevronUp, Target, TrendingUp, MapPin, ExternalLink, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ExperiencePosition {
  title: string;
  period: string;
  link?: string;
  appStoreLink?: string;
  problem: string;
  whatIBuilt: string[];
  impact: string[];
  icons: any[];
}

interface Experience {
  company: string;
  logo?: string;
  location: string;
  featured: boolean;
  problem: string;
  positions: ExperiencePosition[];
}

export function Experience() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (key: string) => {
    setExpandedCards(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Month name to number mapping
  const monthMap: { [key: string]: number } = {
    'jan': 1, 'january': 1, 'jan.': 1,
    'feb': 2, 'february': 2, 'feb.': 2,
    'mar': 3, 'march': 3, 'mar.': 3,
    'apr': 4, 'april': 4, 'apr.': 4,
    'may': 5, 'may.': 5,
    'jun': 6, 'june': 6, 'jun.': 6,
    'jul': 7, 'july': 7, 'jul.': 7,
    'aug': 8, 'august': 8, 'aug.': 8,
    'sep': 9, 'september': 9, 'sep.': 9,
    'oct': 10, 'october': 10, 'oct.': 10,
    'nov': 11, 'november': 11, 'nov.': 11,
    'dec': 12, 'december': 12, 'dec.': 12,
  };

  // Parse date from period (e.g., "Sep. 2025 - Jan. 2026" -> {month: 9, year: 2025})
  const parseDate = (period: string): { month: number; year: number } => {
    const parts = period.split(' - ');
    const startDate = parts[0].trim();
    const monthMatch = startDate.match(/([a-z]+)\.?\s+(\d{4})/i);
    
    if (monthMatch) {
      const monthName = monthMatch[1].toLowerCase();
      const year = parseInt(monthMatch[2], 10);
      const month = monthMap[monthName] || 1;
      return { month, year };
    }
    
    const yearMatch = period.match(/\d{4}/);
    const year = yearMatch ? parseInt(yearMatch[0], 10) : 2000;
    return { month: 1, year };
  };

  const experiences: Experience[] = [
    {
      company: 'Smith-Kettlewell Eye Research Institute',
      logo: '/assets/experience/skeri_logo.jpeg',
      location: 'San Francisco, CA',
      featured: true,
      problem: 'Blind and low-vision users lack accessible video content. Existing solutions are manual, slow, and don\'t scale.',
      positions: [
        {
          title: 'Research Software Engineer - AI & Accessibility Systems – YouDescribeX',
          period: 'Sep. 2025 - Jan. 2026',
          link: 'https://ydx.youdescribe.org/home',
          problem: 'How do we transform a research prototype into a production-ready platform serving real users?',
          whatIBuilt: [
            'Promoted to lead engineering efforts across AI/ML, web, and mobile platforms, overseeing end-to-end system design, implementation, and deployment',
            'Led a cross-functional team of researchers, engineers, and accessibility specialists to deliver new features with biweekly releases',
            'Architected multi-platform accessibility features across web, iOS, and Android apps, ensuring scalability and consistent user experience',
            'Defined technical roadmap and mentored junior developers, fostering best practices in AI integration, mobile development, and accessibility-first design',
          ],
          impact: [
            'Elevated YouDescribeX from research prototype to production-ready platform adopted by 40+ blind/low-vision users in pilot testing',
            'Maintained crash rate below 1% while delivering biweekly releases',
          ],
          icons: [Brain, Users, Zap],
        },
        {
          title: 'Research Assistant – YouDescribeX',
          period: 'Jul. 2025 - Dec. 2025',
          link: 'https://ydx.youdescribe.org/home',
          appStoreLink: 'https://apps.apple.com/us/app/youdescribe/id1177344886',
          problem: 'How do we generate accurate, context-aware audio descriptions for video content at scale?',
          whatIBuilt: [
            'Developed YouDescribeX to improve accessibility for blind and visually impaired users; optimized API and client flows',
            'Integrated a new backend inference path for AI-generated descriptions by updating API and service layers while maintaining backward compatibility',
            'Built ML pipelines for generating and refining audio description prompts; prompt tuning and ranking methods',
            'Implemented Infobot for in-video Q&A with temporal grounding',
            'Tested accessibility with NVDA and VoiceOver, achieving keyboard navigation coverage and contrast compliance',
            'Conducted usability sessions with 25 BVI users',
          ],
          impact: [
            'Improved relevance by 18% through prompt tuning and ranking methods',
            'Achieved top-3 hit rate of 86% on 300-question benchmark',
            '15% faster page loads and 20% higher 30-day retention',
            '100% keyboard navigation coverage and AA+ contrast compliance',
            'Reduced task time for common actions by 28%',
          ],
          icons: [Brain, Target],
        },
      ],
    },
    {
      company: 'Evenness, Inc.',
      logo: '/assets/experience/evenness_rocks_logo.jpeg',
      location: 'Atlanta, GA',
      featured: true,
      problem: 'Manual accessibility audits are slow, expensive, and inconsistent. Organizations need automated, accurate compliance analysis.',
      positions: [
        {
          title: 'Lead AI Engineer — Data & Compliance Platform',
          period: 'Sep. 2025 - Feb. 2026',
          problem: 'How do we build an AI system that accurately evaluates accessibility compliance across multiple standards?',
          whatIBuilt: [
            'Led development of an AI-powered accessibility analysis platform with agent workflows and real-time evaluation across WCAG 2.0/2.1/2.2 standards',
            'Expanded accessibility rules and analysis logic to achieve 100% WCAG 2.1 coverage',
            'Added multi-standard compliance support (EEA, ADA, AODA) with unified scoring and reporting',
            'Implemented performance optimizations reducing end-to-end analysis runtime',
          ],
          impact: [
            '100% WCAG 2.1 coverage achieved',
            '60-70% reduction in end-to-end analysis runtime',
            'Delivered production-ready compliance analysis system adopted as the primary accessibility evaluation workflow',
          ],
          icons: [Brain, Zap, Target],
        },
        {
          title: 'Agentic AI Engineer (Intern) - RAG & Production Systems',
          period: 'May. 2025 - Sep. 2025',
          problem: 'How do we automate multi-step accessibility audit workflows using AI agents?',
          whatIBuilt: [
            'Built a RAG-backed vector knowledge base and integrated versioned compliance selection for accessibility analysis',
            'Integrated agent workflows into 4 production microservices',
            'Automated multi-step audit pipelines',
            'Developed monitoring dashboards to track agent execution and system health',
            'Improved dashboard UX and assistant experience (KASHA AI Assistant) with supporting architecture and user-flow documentation',
          ],
          impact: [
            'Maintained 99.9% uptime and p95 latency under 300ms',
            'Reduced review cycle time from 15 min → 9 min, saving ~120 hrs/quarter',
            'Reduced MTTR by 30%',
            'Shipped and stabilized agentic workflows used in production accessibility audits',
          ],
          icons: [Brain, TrendingUp],
        },
      ],
    },
    {
      company: 'Northeastern University – Khoury College of Computer Sciences',
      logo: '/assets/experience/northeastern_university_logo.jpeg',
      location: 'San Jose, CA',
      featured: false,
      problem: 'Students need hands-on mentorship and industry-aligned assignments to succeed in mobile development.',
      positions: [
        {
          title: 'Teaching Assistant – CS 5520 Mobile Application Development',
          period: 'Sep. 2024 - Aug. 2025',
          problem: 'How do we improve student outcomes while scaling course delivery?',
          whatIBuilt: [
            'Mentored 30+ graduate students on Android development (Java, Firebase, MVVM)',
            'Built Python-based auto-graders and grading rubrics',
            'Led weekly labs on Android lifecycle, networking, and local storage',
            'Worked with faculty to redesign two major assignments aligned with industry patterns (offline-first design, push notifications)',
          ],
          impact: [
            'Average 15% improvement in assignment scores',
            'Reduced grading time by 40% and standardizing feedback turnaround within 48 hours',
            '90% of students shipped fully functional final projects',
            'Increased completion rates by 12 percentage points',
            'Improved course delivery efficiency and student project quality through tooling, structured mentoring, and assignment design',
          ],
          icons: [Users, Target],
        },
      ],
    },
    {
      company: 'Folio.Works',
      logo: '/assets/experience/folioworks_logo.jpeg',
      location: 'New York, NY',
      featured: false,
      problem: 'Mobile app performance issues and crashes were impacting user experience and retention.',
      positions: [
        {
          title: 'Technical Product Development Intern',
          period: 'Dec. 2023 - Jul. 2024',
          problem: 'How do we improve app stability and performance while shipping features rapidly?',
          whatIBuilt: [
            'Implemented and optimized cross-platform mobile features in Flutter for iOS and Android',
            'Contributed to feature planning and prioritization by translating user feedback and product requirements into shipped functionality',
            'Owned QA testing across 6 production releases, creating and executing 60+ manual and automated test cases',
            'Analyzed competitor apps and app store trends to inform feature iterations',
          ],
          impact: [
            'Improved app startup time by ~400ms',
            'Reduced crash rate by 35%',
            'Increased regression coverage to 80%',
            'Supported releases that reached 65% MAU adoption within 30 days',
            'Shipped and validated 6 production releases while supporting growth of an AI-powered internship-matching platform used by 200+ fellows',
          ],
          icons: [Zap, Target],
        },
      ],
    },
    {
      company: 'bimgrafX',
      logo: '/assets/experience/bimgrafx_logo.jpeg',
      location: 'Phoenix, AZ',
      featured: false,
      problem: 'Building Information Modeling requires precise coordination and accuracy to meet design specifications.',
      positions: [
        {
          title: 'Graduate BIM Engineer',
          period: 'Nov. 2020 - Mar. 2022',
          problem: 'How do we deliver accurate BIM models that meet design specifications?',
          whatIBuilt: [
            'Produced and delivered 12+ Building Information Models (BIM) using Revit, coordinating multidisciplinary inputs',
          ],
          impact: [
            'Achieved 99% design specification accuracy',
            'Promoted from intern to full-time engineer within 12 months',
          ],
          icons: [Target],
        },
      ],
    },
  ];

  // Sort experiences by date (newest first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const aDate = parseDate(a.positions[0].period);
    const bDate = parseDate(b.positions[0].period);
    if (bDate.year !== aDate.year) {
      return bDate.year - aDate.year;
    }
    return bDate.month - aDate.month;
  });

  const featuredExp = sortedExperiences.filter(e => e.featured);
  const otherExp = sortedExperiences.filter(e => !e.featured);

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
    <section id="experience" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Building production AI systems and leading engineering teams
          </p>
        </motion.div>

        {/* Featured Experiences */}
        {featuredExp.length > 0 && (
          <motion.div 
            className="mb-16 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredExp.map((exp, expIdx) => (
              <motion.div key={expIdx} variants={itemVariants}>
                <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Company Header */}
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {exp.logo && (
                        <div className="flex-shrink-0 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                          <ImageWithFallback
                            src={exp.logo}
                            alt={`${exp.company} Logo`}
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                {exp.company}
                              </h3>
                              <Badge className="bg-blue-500 text-white text-xs">Featured</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Positions */}
                  <CardContent className="p-6 md:p-8">
                    {exp.positions.map((pos, posIdx) => {
                      const cardKey = `${exp.company}-${posIdx}`;
                      const isExpanded = expandedCards[cardKey];
                      
                      return (
                        <div key={posIdx} className={posIdx > 0 ? "pt-8 mt-8 border-t border-slate-200 dark:border-slate-800" : ""}>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <h4 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                                {pos.title}
                              </h4>
                              <div className="flex items-center gap-3 flex-wrap">
                                <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                                  <Calendar className="w-4 h-4" />
                                  <span>{pos.period}</span>
                                </div>
                                {pos.link && (
                                  <a 
                                    href={pos.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>View Project</span>
                                  </a>
                                )}
                                {pos.appStoreLink && (
                                  <a 
                                    href={pos.appStoreLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>App Store</span>
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>

                          <p className="text-base text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                            {pos.problem}
                          </p>

                          <button
                            onClick={() => toggleCard(cardKey)}
                            className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors mb-4 group"
                          >
                            <span className="text-sm font-medium text-slate-900 dark:text-white">
                              {isExpanded ? 'Hide Details' : 'View What I Built & Impact'}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                            )}
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="grid md:grid-cols-2 gap-6 p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                  <div>
                                    <div className="flex items-center gap-2 mb-4">
                                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                        <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                      </div>
                                      <h5 className="text-base font-semibold text-slate-900 dark:text-white">What I Built</h5>
                                    </div>
                                    <ul className="space-y-3">
                                      {pos.whatIBuilt.map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                                          <span className="text-blue-500 mt-1 flex-shrink-0 font-bold">▸</span>
                                          <span className="leading-relaxed">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2 mb-4">
                                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                        <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                                      </div>
                                      <h5 className="text-base font-semibold text-slate-900 dark:text-white">Impact</h5>
                                    </div>
                                    <ul className="space-y-3">
                                      {pos.impact.map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                                          <span className="text-green-500 mt-1 flex-shrink-0 font-bold">✓</span>
                                          <span className="leading-relaxed">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Other Experiences */}
        {otherExp.length > 0 && (
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {otherExp.map((exp, expIdx) => (
              <motion.div key={expIdx} variants={itemVariants}>
                <Card className="border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Company Header */}
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      {exp.logo && (
                        <div className="flex-shrink-0 p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                          <ImageWithFallback
                            src={exp.logo}
                            alt={`${exp.company} Logo`}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Positions */}
                  <CardContent className="flex-1 flex flex-col">
                    {exp.positions.map((pos, posIdx) => {
                      const cardKey = `${exp.company}-${posIdx}`;
                      const isExpanded = expandedCards[cardKey];
                      
                      return (
                        <div key={posIdx} className={posIdx > 0 ? "pt-4 mt-4 border-t border-slate-200 dark:border-slate-800" : ""}>
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                            {pos.title}
                          </h4>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {pos.period}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
                            {pos.problem}
                          </p>

                          <button
                            onClick={() => toggleCard(cardKey)}
                            className="w-full flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-sm"
                          >
                            <span className="font-medium text-slate-900 dark:text-white">
                              {isExpanded ? 'Hide Details' : 'View Details'}
                            </span>
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden mt-4"
                              >
                                <div className="space-y-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                  <div>
                                    <h6 className="text-xs font-semibold text-slate-900 dark:text-white mb-2">What I Built</h6>
                                    <ul className="space-y-2">
                                      {pos.whatIBuilt.slice(0, 3).map((item, idx) => (
                                        <li key={idx} className="flex gap-2 text-xs text-slate-700 dark:text-slate-300">
                                          <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 className="text-xs font-semibold text-slate-900 dark:text-white mb-2">Impact</h6>
                                    <ul className="space-y-2">
                                      {pos.impact.slice(0, 2).map((item, idx) => (
                                        <li key={idx} className="flex gap-2 text-xs text-slate-700 dark:text-slate-300">
                                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
