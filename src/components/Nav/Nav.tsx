'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Nav.module.css';

const LINKS = ['About', 'Experience', 'Projects', 'Awards', 'Leadership', 'Contact'];

export function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 640) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const drawer = mounted
    ? createPortal(
        <div
          id="mobile-nav-drawer"
          className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          aria-hidden={!isOpen}
        >
          <ul role="list">
            {LINKS.map(label => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className={styles.drawerLink}
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.nav} ${scrolled ? styles.navScrolled : ''} ${isOpen ? styles.navMenuOpen : ''}`}
        aria-label="Primary navigation"
      >
        <a href="#" className={styles.logo} aria-label="Back to top" onClick={close}>
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

        <button
          type="button"
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
        >
          <span /><span /><span />
        </button>
      </nav>

      {drawer}
    </>
  );
}
