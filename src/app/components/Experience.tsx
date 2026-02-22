import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'Smith-Kettlewell Eye Research Institute',
      location: 'San Francisco, CA',
      positions: [
        {
          title: 'Research Software Engineer - AI & Accessibility Systems',
          period: 'Sep. 2025 - Jan. 2026',
          highlights: [
            'Led engineering across AI/ML, web, and mobile platforms for YouDescribeX accessibility platform',
            'Reduced crash rate below 1% while maintaining biweekly release cadence',
            'Architected multi-platform accessibility features serving 40+ blind/low-vision pilot users',
            'Defined technical roadmap and mentored junior developers on AI integration and accessibility-first design',
          ],
        },
        {
          title: 'Research Assistant',
          period: 'Jul. 2025 - Dec. 2025',
          highlights: [
            'Built ML pipelines for AI-generated audio descriptions, improving relevance by 18%',
            'Implemented Infobot Q&A system with 86% top-3 hit rate on 300-question benchmark',
            'Achieved 100% keyboard navigation coverage and AA+ contrast compliance',
            'Optimized API flows for 15% faster page loads and 20% higher 30-day retention',
          ],
        },
      ],
    },
    {
      company: 'Evenness, Inc.',
      location: 'Atlanta, GA',
      positions: [
        {
          title: 'Lead AI Engineer — Data & Compliance Platform',
          period: 'Sep. 2025 - Feb. 2026',
          highlights: [
            'Led AI-powered accessibility analysis platform achieving 100% WCAG 2.1 coverage',
            'Reduced end-to-end analysis runtime by 60-70% through performance optimization',
            'Added multi-standard compliance support (EEA, ADA, AODA) with unified scoring',
            'Delivered production-ready compliance system adopted as primary evaluation workflow',
          ],
        },
        {
          title: 'Agentic AI Engineer (Intern)',
          period: 'May. 2025 - Sep. 2025',
          highlights: [
            'Built RAG-backed vector knowledge base for versioned compliance analysis',
            'Integrated agent workflows into 4 production microservices with 99.9% uptime',
            'Reduced review cycle time from 15 min → 9 min, saving ~120 hrs/quarter',
            'Developed monitoring dashboards reducing MTTR by 30%',
          ],
        },
      ],
    },
    {
      company: 'Northeastern University',
      location: 'San Jose, CA',
      positions: [
        {
          title: 'Teaching Assistant - Mobile Application Development',
          period: 'Sep. 2024 - Aug. 2025',
          highlights: [
            'Mentored 30+ graduate students on Android development, improving assignment scores by 15%',
            'Built Python auto-graders reducing grading time by 40%',
            '90% of students shipped fully functional final projects',
            'Redesigned assignments improving completion rates by 12 percentage points',
          ],
        },
      ],
    },
    {
      company: 'Folio.Works',
      location: 'New York, NY',
      positions: [
        {
          title: 'Technical Product Development Intern',
          period: 'Dec. 2023 - Jul. 2024',
          highlights: [
            'Optimized Flutter mobile features, improving startup time by ~400ms',
            'Reduced crash rate by 35% through comprehensive QA testing',
            'Increased regression coverage to 80% with 60+ test cases',
            'Shipped 6 production releases reaching 65% MAU adoption within 30 days',
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Briefcase className="text-blue-600" size={32} />
          <h2 className="text-4xl md:text-5xl text-center">Experience</h2>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-8">
              <div className="mb-6">
                <h3 className="text-2xl mb-1">{exp.company}</h3>
                <p className="text-slate-500">{exp.location}</p>
              </div>
              {exp.positions.map((pos, posIdx) => (
                <div key={posIdx} className="mb-8 last:mb-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h4 className="text-lg text-slate-900">{pos.title}</h4>
                    <span className="text-sm text-slate-500 md:text-right">{pos.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {pos.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-3 text-slate-600">
                        <span className="text-blue-500 mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
