import React, { useEffect, useRef } from "react";
import AchievementCard from "../../components/AchievementCard/AchievementCard.jsx";
import achievementsData from "../../data/Achievements.json";
import styles from "./Achievements.module.css";

const Achievements = () => {
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
      <h2 className={styles.title}>Achievements & Awards</h2>
      <div className={styles.grid}>
        {achievementsData.map((achievement, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={styles.cardWrapper}
          >
            <AchievementCard achievement={achievement} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
