'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Moments.module.css';

const PHOTOS = [
  { src: '/moments/speaking.jpg',  alt: 'Speaking at a Northeastern event',         caption: 'Addressing the cohort',               area: 'speaking' },
  { src: '/moments/medal.jpg',     alt: 'Laurel & Scroll LVX VERITAS VIRTVS medal', caption: 'Laurel & Scroll · LVX VERITAS VIRTVS', area: 'medal'    },
  { src: '/moments/stage.jpg',     alt: 'On stage at Convocation 2026',             caption: 'Convocation 2026 · Northeastern',      area: 'stage'    },
  { src: '/moments/bite.jpg',      alt: 'Biting the Laurel & Scroll medal',         caption: 'Laurel & Scroll 100 · Class of 2026',  area: 'bite'     },
  { src: '/moments/dinner.jpg',    alt: 'Speaking at a leadership dinner',          caption: 'Silicon Valley Leadership Legacy',     area: 'dinner'   },
  { src: '/moments/friends.jpg',   alt: 'Group photo after graduation',             caption: 'With the crew · May 2026',             area: 'friends'  },
];

export function Moments() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll('[data-photo]') ?? [];
      gsap.from(items, {
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        stagger: 0.1,
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
    <section id="moments" ref={sectionRef} className={styles.section}>
      <span className={styles.eyebrow}>In Focus</span>
      <h2 className={styles.heading}>
        Moments that<br /><em>matter.</em>
      </h2>

      <div ref={gridRef} className={styles.grid}>
        {PHOTOS.map(p => (
          <div key={p.area} className={styles.cell} style={{ gridArea: p.area }} data-photo>
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.img}
            />
            <div className={styles.overlay}>
              <span className={styles.caption}>{p.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
