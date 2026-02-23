import React, { useEffect, useRef } from "react";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard.jsx";
import experienceData from "../../data/Experience.json";
import styles from "./Experience.module.css";

const Experience = () => {
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
        <h1 className={styles.title}>Experience</h1>
        {experienceData.map((experience, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={styles.cardWrapper}
          >
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
