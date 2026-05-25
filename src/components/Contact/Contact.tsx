'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import styles from './Contact.module.css';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('[data-contact]', {
        opacity: 0,
        y: 32,
        duration: 1.0,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className={styles.section}>

      <h2 data-contact className={styles.heading}>
        Let's build<br />
        <em>something.</em>
      </h2>

      <a
        data-contact
        href="mailto:kaustubha.ev@gmail.com"
        className={styles.emailLink}
        aria-label="Send email to Kaustubha"
      >
        kaustubha.ev@gmail.com
      </a>

      <div data-contact className={styles.meta}>
        <a href="tel:6692046927" className={styles.metaLink}>669-204-6927</a>
        <span className={styles.metaDot} aria-hidden="true">·</span>
        <span className={styles.metaText}>San Jose, CA</span>
        <span className={styles.metaDot} aria-hidden="true">·</span>
        <span className={styles.metaText}>U.S. Citizen</span>
      </div>

      <div data-contact className={styles.formWrapper}>
        <ContactForm />
      </div>

      <div data-contact className={styles.socials}>
        {/* GitHub */}
        <a
          href="https://github.com/Kaustubha-09"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/kaustubha-ve/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>

      </div>

      <p data-contact className={styles.footer}>
        © 2025 Kaustubha Eluri · San Jose, CA
      </p>

    </section>
  );
}
