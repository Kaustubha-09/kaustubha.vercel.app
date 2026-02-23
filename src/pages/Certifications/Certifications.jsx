import React, { useEffect, useRef } from "react";
import CertificationCard from "../../components/CertificationCard/CertificationCard.jsx";
import certificationsData from "../../data/Certifications.json";
import styles from "./Certifications.module.css";

const Certifications = () => {
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
      <h2 className={styles.title}>Certifications & Coursework</h2>
      <div className={styles.grid}>
        {certificationsData.map((certification, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={styles.cardWrapper}
          >
            <CertificationCard certification={certification} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
