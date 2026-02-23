import React, { useEffect, useRef } from "react";
import personalJourneyData from "../../data/PersonalJourney.json";
import styles from "./PersonalJourney.module.css";

const PersonalJourney = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Personal Journey</h2>
      <p className={styles.subtitle}>
        Beyond code - exploring photography, travel, history, and the moments that shape who I am. A journey of discovery, creativity, and connection.
      </p>
      
      <div className={styles.timeline}>
        {personalJourneyData.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (itemsRef.current[idx] = el)}
            className={styles.timelineItem}
            style={{ "--type-color": "#ffd93d" }}
          >
            <div className={styles.timelineMarker}>
              <div className={styles.markerDot}>
                {item.icon && <span className={styles.personalIcon}>{item.icon}</span>}
              </div>
              {idx !== personalJourneyData.length - 1 && <div className={styles.markerLine}></div>}
            </div>
            
            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <span className={styles.year}>{item.year}</span>
                <span className={styles.type} style={{ color: "#ffd93d" }}>
                  Personal
                </span>
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <h4 className={styles.organization}>{item.organization}</h4>
              <p className={styles.location}>{item.location}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalJourney;
