'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import styles from './VideoIntro.module.css';

const CinematicLayer = dynamic(
  () => import('../CinematicLayer/CinematicLayer').then(m => ({ default: m.CinematicLayer })),
  { ssr: false }
);

export function VideoIntro() {
  const sectionRef  = useRef<HTMLElement>(null);
  const bgVideoRef  = useRef<HTMLVideoElement>(null);
  const fgVideoRef  = useRef<HTMLVideoElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);
  const tapBadgeRef = useRef<HTMLDivElement>(null);

  const [muted,   setMuted]   = useState(true);
  const [playing, setPlaying] = useState(true);
  const [showTap, setShowTap] = useState(true);

  // ── GSAP entrance ─────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(overlayRef.current,
        { opacity: 1 },
        { opacity: 0.62, duration: 2.2 }
      )
      .fromTo(
        contentRef.current?.querySelectorAll('[data-enter]') ?? [],
        { opacity: 0, y: 38 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.18 },
        '-=1.6'
      )
      .fromTo(scrollRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 1.0 },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Auto-hide "tap for sound" badge ───────────────────────────────────────
  useEffect(() => {
    const timer = setTimeout(() => setShowTap(false), 4200);
    return () => clearTimeout(timer);
  }, []);

  // ── Controls ───────────────────────────────────────────────────────────────
  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    setShowTap(false);
    if (bgVideoRef.current) bgVideoRef.current.muted = next;
    if (fgVideoRef.current) fgVideoRef.current.muted = next;
  };

  const togglePlay = () => {
    const next = !playing;
    setPlaying(next);
    if (bgVideoRef.current) next ? bgVideoRef.current.play() : bgVideoRef.current.pause();
    if (fgVideoRef.current) next ? fgVideoRef.current.play() : fgVideoRef.current.pause();
  };

  return (
    <section ref={sectionRef} className={styles.section}>

      {/* ── Background video (blurred, darkened) ──────────────────────────── */}
      <video
        ref={bgVideoRef}
        className={styles.bgVideo}
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* ── Dark gradient overlay ─────────────────────────────────────────── */}
      <div ref={overlayRef} className={styles.overlay} />

      {/* ── Three.js bokeh particles ──────────────────────────────────────── */}
      <CinematicLayer />

      {/* ── Foreground talking-head video ─────────────────────────────────── */}
      <div className={styles.fgWrapper}>
        <video
          ref={fgVideoRef}
          className={styles.fgVideo}
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className={styles.fgGlow} />
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div ref={contentRef} className={styles.content}>
        <p data-enter className={styles.eyebrow}>Research Software Engineer</p>

        <h1 className={styles.name}>
          <span data-enter className={styles.nameFirst}>Kaustubha</span>
          <em   data-enter className={styles.nameLast}>Eluri</em>
        </h1>

        <p data-enter className={styles.tagline}>
          AI/ML · Accessibility · Building systems that work for everyone
        </p>

        <div data-enter className={styles.pills}>
          <span className={styles.pill}>Smith-Kettlewell Eye Research Institute</span>
          <span className={styles.pill}>Northeastern SV</span>
        </div>
      </div>

      {/* ── "Tap for sound" badge ─────────────────────────────────────────── */}
      <div
        ref={tapBadgeRef}
        className={`${styles.tapBadge} ${showTap ? styles.tapVisible : styles.tapHidden}`}
        onClick={toggleMute}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
        Tap for sound
      </div>

      {/* ── Controls ──────────────────────────────────────────────────────── */}
      <div className={styles.controls}>
        <button
          className={styles.controlBtn}
          onClick={toggleMute}
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          )}
        </button>

        <button
          className={styles.controlBtn}
          onClick={togglePlay}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="6" y="4" width="4" height="16"/>
              <rect x="14" y="4" width="4" height="16"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          )}
        </button>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <div ref={scrollRef} className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>scroll</span>
      </div>

    </section>
  );
}
