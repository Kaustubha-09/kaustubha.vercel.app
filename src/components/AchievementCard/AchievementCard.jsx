import React from "react";
import styles from "./AchievementCard.module.css";

const AchievementCard = ({ achievement }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{achievement.icon}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{achievement.title}</h3>
        <p className={styles.description}>{achievement.description}</p>
        <div className={styles.meta}>
          <span className={styles.organization}>{achievement.organization}</span>
          <span className={styles.date}>{achievement.date}</span>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
