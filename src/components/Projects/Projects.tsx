'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.css';

type Project = {
  name: string;
  period: string;
  description: string;
  bullets: string[];
  tech: string[];
  metric: string;
  link?: string; // to be added once GitHub is ready
};

const PROJECTS: Project[] = [
  {
    name: 'Echolin.AI',
    period: 'Jun – Jul 2025',
    description: 'AI-powered deepfake media forensics platform with CNN ensemble detection and real-time analysis.',
    bullets: [
      'Architected end-to-end deepfake detection using CNN-based models and ensemble classification strategies.',
      'Built scalable data pipelines for large real vs. synthetic image datasets with augmentation for model generalization.',
      'Integrated Grad-CAM–based visual interpretability to analyze model attention regions.',
      'Engineered a low-latency inference system with FastAPI and GPU-backed execution for real-time analysis.',
    ],
    tech: ['PyTorch', 'FastAPI', 'Grad-CAM', 'CNN', 'GPU inference'],
    metric: '120+ GitHub stars',
  },
  {
    name: 'RapidTriage AI',
    period: 'Jan – Apr 2025',
    description: 'AI-driven emergency care prioritization using structured and free-text clinical-style inputs.',
    bullets: [
      'Designed a triage classification system to predict patient priority levels from clinical-style inputs.',
      'Improved macro-F1 by +0.12 through model selection, hyperparameter optimization, and class-imbalance mitigation.',
      'Applied probability calibration and detailed error analysis to reduce overconfident predictions on high-risk cases.',
      'Simulated emergency department workflows via a dashboard prototype to analyze downstream queue prioritization.',
    ],
    tech: ['Scikit-learn', 'calibration', 'NLP', 'ML pipeline', 'class imbalance'],
    metric: 'Top project — course demo day',
  },
  {
    name: 'Semantic Diff Prompting',
    period: 'Sep – Dec 2025',
    description: 'Prompt-engineering framework for Vision–Language Models that models temporal semantic changes across video frames.',
    bullets: [
      'Introduced Semantic Diff Prompting — structured, state-aware prompts to capture object transitions and motion events while suppressing static visual redundancy.',
      'Engineered an end-to-end video understanding pipeline for frame extraction, multimodal caption generation, and offline evaluation — no fine-tuning required.',
      'Developed metrics for token efficiency, lexical redundancy, and action-centric information density.',
      'Achieved 56–68% token reduction while improving action-focused semantic coverage vs. baseline frame-wise prompting.',
    ],
    tech: ['GPT-4V', 'VLMs', 'token efficiency', 'video understanding', 'prompt engineering'],
    metric: '56–68% token reduction',
  },
  {
    name: 'Notification Urgency Classifier',
    period: 'Sep – Dec 2025',
    description: 'Supervised NLP system classifying notifications into Eisenhower Matrix priority levels using message text alone.',
    bullets: [
      'Built an end-to-end ML pipeline with text normalization, TF-IDF feature extraction, and Multinomial Naïve Bayes.',
      'Synthesized a representative dataset of professional notifications for controlled experimentation.',
      'Improved classification accuracy from 0.41 → 0.93 over a rule-based keyword classifier baseline.',
      'Upgraded summarization from rule-based heuristics to DistilBART for improved content condensation.',
    ],
    tech: ['NLP', 'TF-IDF', 'Naïve Bayes', 'DistilBART', 'Scikit-learn'],
    metric: 'Accuracy 0.41 → 0.93',
  },
  {
    name: 'NEUQuest',
    period: 'May – Aug 2024',
    description: 'Full-stack Android event discovery and travel companion app for students with offline-first architecture.',
    bullets: [
      'Built with Firebase Realtime Database, authentication, maps integration, and push notifications.',
      'Implemented offline caching and resilient data synchronization; achieved 90%+ Lighthouse performance and accessibility scores.',
      'Supported onboarding of 200+ users with instrumented engagement tracking including notification click-through metrics.',
      'Reduced recurring support issues via in-app verification flows, deep linking, and improved navigation reliability.',
    ],
    tech: ['Android', 'Firebase', 'MVVM', 'Maps API', 'push notifications'],
    metric: '200+ users onboarded',
  },
  {
    name: 'Husky Mingle',
    period: 'Jan – Apr 2024',
    description: 'Mobile-first campus networking platform enabling project groups, research communities, and peer collaboration.',
    bullets: [
      'Designed core features including group discovery, profile-based matching, and real-time chat workflows.',
      'Implemented Firebase auth, cloud storage, and push notifications to drive sustained post-event engagement.',
      'Reduced time-to-first-connection from 4.2 days to 1.6 days through improved onboarding and profile setup flows.',
      'Instrumented engagement metrics during pilot — tracking growth in post-event connections and cross-group interactions.',
    ],
    tech: ['Android', 'Firebase', 'real-time chat', 'deep linking', 'MVVM'],
    metric: 'Hackathon winner — student networking track',
  },
];

export function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    if (!wrapper || !track) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      const getDistance = () => track.scrollWidth - wrapper.offsetWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: wrapper,
        pin: true,
        start: 'top top',
        end: () => `+=${getDistance()}`,
        scrub: 1.2,
        animation: tween,
        invalidateOnRefresh: true,
      });

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div id="projects" ref={wrapperRef} className={styles.wrapper}>
      <div ref={trackRef} className={styles.track}>

        {/* Title slide */}
        <div className={styles.titleSlide}>
          <span className={styles.eyebrow}>Projects</span>
          <h2 className={styles.heading}>
            Things I&apos;ve<br />
            <em>shipped.</em>
          </h2>
          <p className={styles.subtitle}>Scroll to explore →</p>
        </div>

        {/* Project cards */}
        {PROJECTS.map(project => (
          <article key={project.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardYear}>{project.period}</span>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                  aria-label={`View ${project.name} on GitHub`}
                >
                  GitHub →
                </a>
              ) : (
                <span className={styles.cardLinkSoon}>GitHub coming soon</span>
              )}
            </div>

            <h3 className={styles.cardName}>{project.name}</h3>
            <p className={styles.cardDesc}>{project.description}</p>

            <ul className={styles.cardBullets}>
              {project.bullets.map((b, i) => (
                <li key={i} className={styles.cardBullet}>{b}</li>
              ))}
            </ul>

            <div className={styles.cardFooter}>
              <div className={styles.cardTech}>
                {project.tech.map(t => (
                  <span key={t} className={styles.pill}>{t}</span>
                ))}
              </div>
              <p className={styles.cardMetric}>{project.metric}</p>
            </div>
          </article>
        ))}

      </div>
    </div>
  );
}
