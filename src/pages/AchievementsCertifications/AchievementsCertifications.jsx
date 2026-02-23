import React, { useState, useEffect, useRef } from "react";
import AchievementCard from "../../components/AchievementCard/AchievementCard.jsx";
import CertificationCard from "../../components/CertificationCard/CertificationCard.jsx";
import achievementsData from "../../data/Achievements.json";
import certificationsData from "../../data/Certifications.json";
import styles from "./AchievementsCertifications.module.css";

const AchievementsCertifications = () => {
  const [activeTab, setActiveTab] = useState("achievements");
  const achievementsCardsRef = useRef([]);
  const certificationsCardsRef = useRef([]);

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

    const allCards = [...achievementsCardsRef.current, ...certificationsCardsRef.current];
    allCards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      allCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [activeTab]);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>Achievements & Certifications</h1>
        <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "achievements" ? styles.active : ""}`}
          onClick={() => setActiveTab("achievements")}
          aria-selected={activeTab === "achievements"}
        >
          Achievements
        </button>
        <button
          className={`${styles.tab} ${activeTab === "certifications" ? styles.active : ""}`}
          onClick={() => setActiveTab("certifications")}
          aria-selected={activeTab === "certifications"}
        >
          Certifications
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === "achievements" && (
          <div className={styles.grid}>
            {achievementsData.map((achievement, idx) => (
              <div
                key={idx}
                ref={(el) => (achievementsCardsRef.current[idx] = el)}
                className={styles.cardWrapper}
              >
                <AchievementCard achievement={achievement} />
              </div>
            ))}
          </div>
        )}
        
        {activeTab === "certifications" && (
          <div className={styles.grid}>
            {certificationsData.map((certification, idx) => (
              <div
                key={idx}
                ref={(el) => (certificationsCardsRef.current[idx] = el)}
                className={styles.cardWrapper}
              >
                <CertificationCard certification={certification} />
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default AchievementsCertifications;
