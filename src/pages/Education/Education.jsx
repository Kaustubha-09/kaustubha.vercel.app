import React, { useEffect, useRef } from "react";
import EducationCard from "../../components/EducationCard/EducationCard.jsx";
import educationData from "../../data/Education.json";
import styles from "./Education.module.css";

const Education = () => {
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
        <h1 className={styles.title}>Education</h1>
        {educationData.map((education, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={styles.cardWrapper}
          >
            <EducationCard education={education} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
