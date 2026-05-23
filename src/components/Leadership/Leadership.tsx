'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Leadership.module.css';

type Role = {
  period: string;
  org: string;
  location: string;
  title: string;
  bullets: string[];
  achievement: string;
  link?: string;
  pressLink?: { label: string; href: string };
};

const ROLES: Role[] = [
  {
    period: 'Mar 2025 – Dec 2025',
    org: 'NEURAI Research Lab',
    location: 'Northeastern University · San Jose, CA',
    title: 'Founding Researcher',
    link: 'https://neurai.sites.northeastern.edu/our-team/kaustubha-eluri/',
    bullets: [
      'Contributed to research on interpretable and responsible ML, implementing baseline models and reproducibility workflows.',
      'Led code reviews and replication efforts, improving experiment consistency through seeded runs and standardized documentation.',
    ],
    achievement: 'Co-authored a proposal that secured $2K in compute credits and established baseline pipelines used by new lab members.',
  },
  {
    period: 'Jan 2025 – Dec 2025',
    org: 'AI / Data Club',
    location: 'Northeastern University · San Jose, CA',
    title: 'Core Organizer',
    bullets: [
      'Organized ML study sessions and hands-on workshops covering prompt engineering and API-based model integration.',
      'Coordinated internal hackathons and supported teams in shipping functional demos.',
      'Built starter templates and setup guides that reduced onboarding time for new participants.',
    ],
    achievement: 'Helped grow and sustain an active peer-led ML community within Khoury College.',
  },
  {
    period: 'Jan 2024 – Dec 2025',
    org: 'Aspiring Product Managers Club (APMC)',
    location: 'Northeastern University · San Jose, CA',
    title: 'President',
    bullets: [
      'Led a student organization focused on PM interview prep, case practice, and peer mentoring.',
      'Organized workshops and speaker events covering PRDs, user research, and product strategy fundamentals.',
      'Expanded active membership and coordinated programming across multiple academic terms.',
    ],
    achievement: 'Grew APMC into a well-established campus organization; received a student leadership award in 2025.',
    pressLink: { label: 'Featured · ProductCon SF ↗', href: 'https://siliconvalley.northeastern.edu/in-the-field-product-management-insights-at-productcon-sf/' },
  },
  {
    period: 'May 2024 – Aug 2025',
    org: 'Northeastern University',
    location: 'San Jose, CA',
    title: 'Student Ambassador',
    bullets: [
      'Represented the university at academic and community events, supporting student outreach, onboarding, and engagement.',
      'Guided prospective and incoming students on academic programs, campus resources, and student life.',
      'Collaborated with faculty and administrative teams to relay student feedback and improve campus experience initiatives.',
    ],
    achievement: 'Selected as campus ambassador based on leadership, communication ability, and student involvement.',
  },
  {
    period: 'Jan 2024 – May 2025',
    org: 'Adobe Creative Campus Club',
    location: 'Northeastern University · San Jose, CA',
    title: 'Vice President',
    bullets: [
      'Led workshops introducing students to Adobe creative tools and portfolio workflows.',
      'Co-organized design challenges and cross-club creative events.',
    ],
    achievement: 'Recognized by Adobe Creative Campus for student engagement initiatives.',
  },
];

export function Leadership() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(itemRefs.current.filter(Boolean), {
        opacity: 0,
        x: -32,
        duration: 1.0,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="leadership" ref={sectionRef} className={styles.section}>
      <span className={styles.eyebrow}>Leadership</span>
      <h2 className={styles.heading}>How I&apos;ve led.</h2>

      <div className={styles.timeline}>
        {ROLES.map((role, i) => (
          <div
            key={role.org + i}
            ref={el => { itemRefs.current[i] = el; }}
            className={styles.entry}
          >
            <div className={styles.dot} aria-hidden="true" />

            <div className={styles.entryHeader}>
              <p className={styles.period}>{role.period}</p>
              <span className={styles.location}>{role.location}</span>
            </div>

            <p className={styles.org}>
              {role.link ? (
                <a href={role.link} target="_blank" rel="noopener noreferrer" className={styles.orgLink}>
                  {role.org} ↗
                </a>
              ) : role.org}
            </p>
            <p className={styles.title}>{role.title}</p>

            <ul className={styles.bullets}>
              {role.bullets.map((b, j) => (
                <li key={j} className={styles.bullet}>{b}</li>
              ))}
            </ul>

            <div className={styles.achievement}>
              <span className={styles.achievementLabel}>Key Achievement</span>
              {role.achievement}
            </div>

            {role.pressLink && (
              <a href={role.pressLink.href} target="_blank" rel="noopener noreferrer" className={styles.pressLink}>
                {role.pressLink.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
