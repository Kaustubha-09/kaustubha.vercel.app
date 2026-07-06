'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS, type Project } from '@/data/projects';
import styles from './Projects.module.css';

function ProjectTile({
  project,
  innerRef,
}: {
  project: Project;
  innerRef?: (el: HTMLElement | null) => void;
}) {
  return (
    <article ref={innerRef} className={styles.tile} data-cat={project.category}>
      {project.image && project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.tileThumb}
          aria-label={`${project.name} on GitHub`}
        >
          <img src={project.image} alt="" loading="lazy" />
        </a>
      )}
      <div className={styles.tileBody}>
        <div className={styles.meta}>
          <span className={styles.period}>{project.period}</span>
          <span className={styles.catTag} data-cat={project.category}>
            {project.category}
          </span>
        </div>
        <h3 className={styles.compactName}>{project.name}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <ul className={styles.bulletsCompact}>
          {project.bullets.slice(0, 2).map((b, j) => (
            <li key={j}>{b}</li>
          ))}
        </ul>
        <div className={styles.tech}>
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className={styles.chip}>{t}</span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoLink}
          >
            View repo →
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current.filter(Boolean), {
        opacity: 0,
        y: 32,
        duration: 0.85,
        stagger: 0.08,
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
    <section id="projects" ref={sectionRef} className={styles.section}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Projects</span>
        <h2 className={styles.heading}>
          Things I&apos;ve <em>shipped.</em>
        </h2>
        <p className={styles.lead}>
          Summaries and bullets pulled from each repository&apos;s README — written for resume clarity, not marketing fluff.
        </p>
      </header>

      <div className={styles.tileGrid}>
        {PROJECTS.map((project, i) => (
          <ProjectTile
            key={project.name}
            project={project}
            innerRef={el => { cardRefs.current[i] = el; }}
          />
        ))}
      </div>
    </section>
  );
}
