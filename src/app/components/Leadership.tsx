import { Award } from 'lucide-react';

export function Leadership() {
  const leadership = [
    {
      organization: 'NEURAI Research Lab',
      role: 'Founding Researcher',
      period: 'Mar. 2025 - Dec. 2025',
      highlights: [
        'Contributed to research on interpretable and responsible ML',
        'Led code reviews and replication efforts for experiment consistency',
        'Co-authored proposal securing $2k in compute credits',
      ],
      link: 'https://neurai.sites.northeastern.edu/our-team/kaustubha-eluri/',
    },
    {
      organization: 'Aspiring Product Managers Club (APMC)',
      role: 'President',
      period: 'Jan. 2024 - Dec. 2025',
      highlights: [
        'Led student organization focused on PM interview prep and mentoring',
        'Organized workshops covering PRDs, user research, and product strategy',
        'Received student leadership award in 2025',
      ],
    },
    {
      organization: 'AI/Data Club',
      role: 'Core Organizer',
      period: 'Jan. 2025 - Dec. 2025',
      highlights: [
        'Organized ML study sessions and hands-on workshops',
        'Coordinated internal hackathons supporting functional demos',
        'Built starter templates reducing onboarding time for new participants',
      ],
    },
    {
      organization: 'Student Ambassador',
      role: 'Campus Representative',
      period: 'May 2024 - Aug. 2025',
      highlights: [
        'Represented university at academic and community events',
        'Guided prospective students on programs and campus resources',
        'Selected based on leadership and communication ability',
      ],
    },
  ];

  return (
    <section id="leadership" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Award className="text-blue-600" size={32} />
          <h2 className="text-4xl md:text-5xl text-center">Leadership & Involvement</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((item, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl p-6">
              <div className="mb-4">
                <h3 className="text-xl mb-1">
                  {item.link ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {item.organization} →
                    </a>
                  ) : (
                    item.organization
                  )}
                </h3>
                <p className="text-slate-600">{item.role}</p>
                <p className="text-sm text-slate-500">{item.period}</p>
              </div>
              <ul className="space-y-2">
                {item.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex gap-3 text-slate-600 text-sm">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
