'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Awards.module.css';

type Award = {
  name: string;
  issuer: string;
  year: string;
  links?: { label: string; href: string }[];
};

const AWARDS: Award[] = [
  {
    name: 'Laurel & Scroll 100',
    issuer: 'Northeastern University',
    year: 'Apr 2026',
    links: [
      { label: 'Northeastern News ↗', href: 'https://news.northeastern.edu/2026/04/15/laurel-and-scroll-100-2026-inductees/' },
      { label: 'Khoury Feature ↗',    href: 'https://www.khoury.northeastern.edu/khoury-students-bring-in-record-awards-haul-at-2026-northeastern-convocation/' },
    ],
  },
  { name: 'Silicon Valley Leadership Legacy', issuer: 'Northeastern University',  year: 'Apr 2026' },
  { name: 'Khoury College Recognition',       issuer: 'Khoury CS — Nominee',      year: '2026'     },
  { name: 'Top Project — RapidTriage AI',     issuer: 'Northeastern University',  year: '2025'     },
  { name: 'Hackathon — Husky Mingle',         issuer: 'Student Networking Track', year: '2024'     },
];

export function Awards() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs    = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(rowRefs.current.filter(Boolean), {
        opacity: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="awards" ref={sectionRef} className={styles.section}>
      <span className={styles.eyebrow}>Recognition</span>
      <h2 className={styles.heading}>
        Honored for<br /><em>engineering</em> excellence.
      </h2>

      <div className={styles.list}>
        {AWARDS.map((award, i) => (
          <div
            key={award.name}
            ref={el => { rowRefs.current[i] = el; }}
            className={styles.row}
          >
            <span className={styles.rowNumber} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className={styles.rowBody}>
              <span className={styles.rowName}>{award.name}</span>
              {award.links && (
                <div className={styles.rowLinks}>
                  {award.links.map(l => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.rowLink}>
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.rowMeta}>
              <span>{award.issuer}</span>
              <span>{award.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
