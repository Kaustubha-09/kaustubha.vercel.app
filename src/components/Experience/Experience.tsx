'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Experience.module.css';

type Entry = {
  period: string;
  company: string;
  location: string;
  role: string;
  badge?: string;
  bullets: string[];
  metrics: string[];
};

const ENTRIES: Entry[] = [
  {
    period: 'Jul 2025 – Jan 2026',
    company: 'Smith-Kettlewell Eye Research Institute',
    location: 'San Francisco, CA · Hybrid',
    role: 'Research Software Engineer — AI, Web & Mobile\n(YouDescribeX | SKERI × SFSU Collaboration)',
    bullets: [
      'Led engineering efforts to transform YouDescribeX from a research prototype into a production-ready, AI-powered accessibility platform used by blind and low-vision users.',
      'Integrated backend inference path for AI-generated audio descriptions; prompt tuning improved relevance by 18%.',
      'Implemented Infobot for in-video Q&A with temporal grounding — top-3 hit rate of 86% on a 300-question benchmark.',
      'Tested with NVDA and VoiceOver achieving 100% keyboard navigation coverage and AA+ contrast compliance.',
      'Conducted usability sessions with 25 BVI users, reducing task time for common actions by 28%.',
    ],
    metrics: ['40+ BLV pilot users', '15% faster page loads', '20% higher 30-day retention'],
  },
  {
    period: 'May 2025 – Nov 2025',
    company: 'Evenness',
    location: 'Atlanta, GA · Hybrid',
    role: 'Agentic AI Engineer — RAG Systems & Production Microservices',
    badge: 'Internship',
    bullets: [
      'Designed and deployed RAG-backed AI workflows across production microservices to automate accessibility compliance analysis.',
      'Built a RAG-backed vector knowledge base with versioned compliance selection covering WCAG 2.0/2.1/2.2, EEA, ADA, and AODA standards.',
      'Integrated agent workflows into 4 production microservices maintaining 99.9% uptime and p95 latency under 300ms.',
      'Automated multi-step audit pipelines, cutting review cycle time from 15 min → 9 min and saving ~120 hrs/quarter.',
      'Developed monitoring dashboards to track agent execution and system health, reducing MTTR by 30%.',
    ],
    metrics: ['4 production microservices', '99.9% uptime', '~120 hrs/quarter saved'],
  },
  {
    period: 'Sep 2024 – Aug 2025',
    company: 'Northeastern University, Khoury College',
    location: 'San Jose, CA · Hybrid',
    role: 'Teaching Assistant — Mobile Applications Development (CS 5520)',
    bullets: [
      'Mentored 30+ graduate students on Android development (Java, Firebase, MVVM), contributing to an average 15% improvement in assignment scores.',
      'Built Python-based auto-graders and grading rubrics, reducing grading time by 40% and standardizing feedback within 48 hours.',
      'Led weekly labs on Android lifecycle, networking, and local storage; 90% of students shipped fully functional final projects.',
      'Redesigned two major assignments aligned with industry patterns (offline-first design, push notifications), increasing completion rates by 12 percentage points.',
    ],
    metrics: ['30+ students mentored', '40% faster grading', '90% project completion'],
  },
  {
    period: 'Dec 2023 – Jul 2024',
    company: 'Folio.Works',
    location: 'New York, NY · Hybrid',
    role: 'Technical Product Development Intern — Mobile & Growth Engineering',
    bullets: [
      'Implemented and optimized cross-platform mobile features in Flutter for iOS and Android, improving app startup time by ~400ms and reducing crash rate by 35%.',
      'Owned QA testing across 6 production releases — 60+ manual and automated test cases, bringing regression coverage to 80%.',
      'Analyzed competitor apps and app store trends to inform feature iterations; releases reached 65% MAU adoption within 30 days.',
      'Translated user feedback and product requirements into shipped functionality for an AI-powered internship-matching platform used by 200+ fellows.',
    ],
    metrics: ['~400ms startup improvement', '35% crash reduction', '6 production releases'],
  },
  {
    period: 'Nov 2020 – Mar 2022',
    company: 'bimgrafX',
    location: 'Phoenix, AZ · Hybrid',
    role: 'Graduate BIM Engineer — Technical Delivery & Business Development',
    bullets: [
      'Produced and delivered 12+ Building Information Models (BIM) using Revit, coordinating multidisciplinary inputs with 99% design specification accuracy.',
      'Promoted from intern to full-time engineer within 12 months.',
    ],
    metrics: ['12+ BIM models', '99% spec accuracy', 'Promoted in 12 months'],
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(itemRefs.current.filter(Boolean), {
        opacity: 0,
        x: -32,
        duration: 1.0,
        stagger: 0.16,
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
    <section id="experience" ref={sectionRef} className={styles.section}>
      <span className={styles.eyebrow}>Experience</span>
      <h2 className={styles.heading}>Where I&apos;ve built.</h2>

      <div className={styles.timeline}>
        {ENTRIES.map((entry, i) => (
          <div
            key={entry.company + i}
            ref={el => { itemRefs.current[i] = el; }}
            className={styles.entry}
          >
            <div className={styles.dot} aria-hidden="true" />

            <div className={styles.entryHeader}>
              <p className={styles.period}>{entry.period}</p>
              <span className={styles.location}>{entry.location}</span>
            </div>

            <p className={styles.company}>{entry.company}</p>

            <p className={styles.role}>
              {entry.role}
              {entry.badge && (
                <span className={styles.badge}>{entry.badge}</span>
              )}
            </p>

            <ul className={styles.bullets}>
              {entry.bullets.map((b, j) => (
                <li key={j} className={styles.bullet}>{b}</li>
              ))}
            </ul>

            <div className={styles.metrics}>
              {entry.metrics.map(m => (
                <span key={m} className={styles.metric}>{m}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
