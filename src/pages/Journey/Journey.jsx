import React, { useState, useEffect, useRef } from "react";
import professionalJourneyData from "../../data/ProfessionalJourney.json";
import personalJourneyData from "../../data/PersonalJourney.json";
import styles from "./Journey.module.css";

const Journey = () => {
  const [activeTab, setActiveTab] = useState("professional");
  const professionalItemsRef = useRef([]);
  const personalItemsRef = useRef([]);

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

    const allItems = [...professionalItemsRef.current, ...personalItemsRef.current];
    allItems.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      allItems.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [activeTab]);

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

  const renderProfessionalJourney = () => (
    <div className={styles.timeline}>
      {professionalJourneyData.map((item, idx) => (
        <div
          key={idx}
          ref={(el) => (professionalItemsRef.current[idx] = el)}
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
  );

  const renderPersonalJourney = () => (
    <div className={styles.timeline}>
      {personalJourneyData.map((item, idx) => (
        <div
          key={idx}
          ref={(el) => (personalItemsRef.current[idx] = el)}
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
  );

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>My Journey</h2>
      <p className={styles.subtitle}>
        A blend of professional growth and personal passions - from graduate student to research leader, intertwined with photography, travel, history, and the joy of capturing life's moments.
      </p>
      
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "professional" ? styles.active : ""}`}
          onClick={() => setActiveTab("professional")}
          aria-selected={activeTab === "professional"}
        >
          Professional
        </button>
        <button
          className={`${styles.tab} ${activeTab === "personal" ? styles.active : ""}`}
          onClick={() => setActiveTab("personal")}
          aria-selected={activeTab === "personal"}
        >
          Personal
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === "professional" && renderProfessionalJourney()}
        {activeTab === "personal" && renderPersonalJourney()}
      </div>
    </section>
  );
};

export default Journey;
