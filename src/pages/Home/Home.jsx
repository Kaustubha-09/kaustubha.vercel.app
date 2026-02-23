import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithubSquare, FaEnvelope, FaFileDownload } from "react-icons/fa";
import styles from "./Home.module.css";

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = "1";
    }
  }, []);

  return (
    <section className={styles.container} ref={heroRef}>
      <div className={styles.row}>
        <div className={styles.imageWrapper}>
          <img 
            src="/assets/personal/golden-gate-bridge.webp" 
            alt="Kaustubha Venkata Eluri"
            className={styles.professionalHeadshot}
            loading="eager"
          />
        </div>
      </div>
      
      <div className={styles.row}>
        <div className={styles.col}>
          <span className={`${styles.textWhite} ${styles.headingOne}`}>
            Kaustubha Venkata Eluri
          </span>
        </div>
      </div>
      
      <div className={styles.row}>
        <div className={styles.col}>
          <span className={`${styles.textWhite} ${styles.headingThree}`}>
            Agentic AI Engineer · Software Engineer · Accessibility Advocate
          </span>
        </div>
      </div>
      
      <div className={styles.row}>
        <div className={styles.col}>
          <a 
            href="https://linkedin.com/in/kaustubha-ve/" 
            target="_blank" 
            rel="noreferrer noopener"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
        <div className={styles.col}>
          <a 
            href="https://github.com/Kaustubha-09" 
            target="_blank" 
            rel="noreferrer noopener"
            aria-label="GitHub Profile"
          >
            <FaGithubSquare className={styles.icon} />
          </a>
        </div>
        <div className={styles.col}>
          <a 
            href="mailto:kaustubha.ev@gmail.com"
            aria-label="Send Email"
          >
            <FaEnvelope className={styles.icon} />
          </a>
        </div>
      </div>
      
      <div className={styles.row}>
        <div className={styles.col}>
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.resumeButton}
            aria-label="Download Resume"
          >
            <FaFileDownload className={styles.iconSmall} />
            Résumé
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
