'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Nav.module.css';

const LINKS = ['About', 'Experience', 'Projects', 'Awards', 'Leadership', 'Contact'];

export function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(navRef.current, {
        borderBottomColor: 'rgba(255,255,255,0.08)',
        backgroundColor: 'rgba(7,6,10,0.82)',
        backdropFilter: 'blur(20px)',
        duration: 0,
        scrollTrigger: {
          trigger: document.body,
          start: '80px top',
          toggleActions: 'play none none reverse',
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className={styles.nav} aria-label="Primary navigation">
      <a href="#" className={styles.logo} aria-label="Back to top">
        KE
      </a>
      <ul className={styles.links} role="list">
        {LINKS.map(label => (
          <li key={label}>
            <a href={`#${label.toLowerCase()}`} className={styles.link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
