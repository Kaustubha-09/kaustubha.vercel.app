import React from "react";
import styles from "./CertificationCard.module.css";

const CertificationCard = ({ certification }) => {
  return (
    <div className={styles.card}>
      {certification.logo && (
        <div className={styles.logoContainer}>
          <img 
            src={certification.logo} 
            alt={`${certification.issuer} logo`}
            className={styles.logo}
            loading="lazy"
          />
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{certification.title}</h3>
          <span className={styles.date}>{certification.date}</span>
        </div>
        
        <h4 className={styles.issuer}>{certification.issuer}</h4>
        
        <p className={styles.description}>{certification.description}</p>
        
        {certification.highlights && certification.highlights.length > 0 && (
          <ul className={styles.highlights}>
            {certification.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
