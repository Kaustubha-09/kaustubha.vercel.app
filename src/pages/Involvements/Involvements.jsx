import React, { useEffect, useRef } from "react";
import involvementsData from "../../data/Involvements.json";
import styles from "./Involvements.module.css";

const Involvements = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>Leadership & Involvement</h1>
        <div className={styles.grid}>
        {involvementsData.map((involvement, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={styles.cardWrapper}
          >
            <div className={styles.card}>
              {involvement.logo && (
                <div className={styles.logoContainer}>
                  <img 
                    src={involvement.logo} 
                    alt={`${involvement.organization} logo`}
                    className={styles.logo}
                    loading="lazy"
                  />
                </div>
              )}
              <h3 className={styles.role}>{involvement.title}</h3>
              <h4 className={styles.organization}>{involvement.organization}</h4>
              <p className={styles.period}>{involvement.period}</p>
              <p className={styles.description}>{involvement.description}</p>
              {involvement.link && (
                <a 
                  href={involvement.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.link}
                  aria-label={`Learn more about ${involvement.organization}`}
                >
                  Learn More →
                </a>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Involvements;
