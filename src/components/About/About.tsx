'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';

const SKILLS = ['Python', 'PyTorch', 'React', 'Android', 'FastAPI', 'WCAG AA+'];

type CourseGroup = { label: string; courses: string[] };

const COURSEWORK: CourseGroup[] = [
  {
    label: 'Bridge',
    courses: [
      'CS 5001 Intensive Foundations of CS',
      'CS 5002 Discrete Structures',
      'CS 5004 Object-Oriented Design',
      'CS 5008 Data Structures & Algorithms in Systems',
    ],
  },
  {
    label: 'Core',
    courses: ['CS 5800 Algorithms'],
  },
  {
    label: 'Breadth',
    courses: [
      'CS 5520 Mobile Application Development',
      'CS 5610 Web Development',
    ],
  },
  {
    label: 'AI / Systems',
    courses: [
      'CS 5100 Foundations of Artificial Intelligence',
      'CS 6140 Machine Learning',
      'CS 6180 Foundations of Generative AI',
      'CS 6620 Fundamentals of Cloud Computing',
    ],
  },
  {
    label: 'Co-op',
    courses: ['CS 6954 Work Experience'],
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('[data-about]', {
        opacity: 0,
        y: 44,
        duration: 1.1,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>

        {/* Portrait */}
        <div data-about className={styles.portraitCol}>
          <div className={styles.portrait}>
            <Image
              src="/portrait.jpg"
              alt="Kaustubha Eluri"
              fill
              sizes="(max-width: 768px) 220px, 340px"
              className={styles.portraitImg}
              priority
            />
            <div className={styles.portraitGlow} aria-hidden="true" />
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <span data-about className={styles.eyebrow}>About</span>

          <span data-about className={styles.rolePill}>
            Mobile & AI Systems Engineer
          </span>

          <h2 data-about className={styles.heading}>
            Building AI<br />for everyone.
          </h2>

          <p data-about className={styles.bio}>
            I started my career designing buildings. Today, I design intelligent systems.
          </p>

          <p data-about className={styles.bio}>
            My background in architectural engineering taught me how to think in structures —
            how every component connects, supports, and scales. When I transitioned into
            computer science at Northeastern University, my blueprints became algorithms,
            APIs, and AI models — but the mindset stayed the same: build things that work
            beautifully and reliably.
          </p>

          <p data-about className={styles.bio}>
            Now, I&apos;m a Mobile &amp; AI Systems Engineer focused on building
            production-ready, accessibility-first platforms. Featured by{' '}
            <a
              href="https://siliconvalley.northeastern.edu/kaustubha-eluri-aspiring-product-manager/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bioLink}
            >
              Northeastern Silicon Valley
            </a>
            .
          </p>

          <div data-about className={styles.chips}>
            {SKILLS.map(s => (
              <span key={s} className={styles.chip}>{s}</span>
            ))}
          </div>

          <div data-about className={styles.eduRow}>
            <div className={styles.eduItem}>
              <span className={styles.eduInstitution}>Northeastern University</span>
              <span className={styles.eduDegree}>M.S. Computer Science · 2023–2025</span>
            </div>
            <div className={styles.eduItem}>
              <span className={styles.eduInstitution}>JNAFAU</span>
              <span className={styles.eduDegree}>B.Tech Architectural Engineering · 2017–2021</span>
            </div>
          </div>

          {/* NEU Coursework */}
          <div data-about className={styles.coursework}>
            <span className={styles.courseworkEyebrow}>NEU M.S. coursework</span>
            <div className={styles.courseGroups}>
              {COURSEWORK.map(group => (
                <div key={group.label} className={styles.courseGroup}>
                  <span className={styles.courseGroupLabel}>{group.label}</span>
                  <div className={styles.courseChips}>
                    {group.courses.map(c => (
                      <span key={c} className={styles.courseChip}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.courseworkFocus}>
              Focused on AI/ML, Generative AI, mobile &amp; web development, cloud computing, and scalable system design.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
