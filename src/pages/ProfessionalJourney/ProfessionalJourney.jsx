import React, { useEffect, useRef } from "react";
import professionalJourneyData from "../../data/ProfessionalJourney.json";
import styles from "./ProfessionalJourney.module.css";

const ProfessionalJourney = () => {
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

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "#64ffda";
      case "education":
        return "#4dd0e1";
      case "leadership":
        return "#ff6b9d";
      default:
        return "#64ffda";
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Professional Journey</h2>
      <p className={styles.subtitle}>
        From graduate student to research leader - my path through education, leadership roles, and professional growth in the tech industry.
      </p>
      
      <div className={styles.timeline}>
        {professionalJourneyData.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (itemsRef.current[idx] = el)}
            className={styles.timelineItem}
            style={{ "--type-color": getTypeColor(item.type) }}
          >
            <div className={styles.timelineMarker}>
              <div className={styles.markerDot}></div>
              {idx !== professionalJourneyData.length - 1 && <div className={styles.markerLine}></div>}
            </div>
            
            <div className={styles.timelineContent}>
              {item.promotion && (
                <span className={styles.promotionBadge}>Promotion</span>
              )}
              <div className={styles.timelineHeader}>
                <span className={styles.year}>{item.year}</span>
                <span className={styles.type} style={{ color: getTypeColor(item.type) }}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
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

export default ProfessionalJourney;
