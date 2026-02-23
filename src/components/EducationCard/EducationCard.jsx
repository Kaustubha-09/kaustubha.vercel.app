import React from "react";
import styles from "./EducationCard.module.css";

const EducationCard = ({ education }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          {education.logo && (
            education.website ? (
              <a 
                href={education.website} 
                target="_blank" 
                rel="noreferrer noopener"
                className={styles.logoLink}
                aria-label={`Visit ${education.institution} website`}
              >
                <img 
                  src={education.logo} 
                  alt={`${education.institution} logo`}
                  className={styles.logo}
                  loading="lazy"
                />
              </a>
            ) : (
              <img 
                src={education.logo} 
                alt={`${education.institution} logo`}
                className={styles.logo}
                loading="lazy"
              />
            )
          )}
        </div>
        <div className={styles.institutionInfo}>
          <h3 className={styles.institution}>
            {education.website ? (
              <a 
                href={education.website} 
                target="_blank" 
                rel="noreferrer noopener"
                className={styles.institutionLink}
                aria-label={`Visit ${education.institution} website`}
              >
                {education.institution}
              </a>
            ) : (
              education.institution
            )}
          </h3>
          <p className={styles.location}>{education.location}</p>
        </div>
      </div>
      
      <div className={styles.degreeInfo}>
        <h4 className={styles.degree}>{education.degree}</h4>
        <span className={styles.period}>{education.period}</span>
      </div>
      
      {education.description && (
        <p className={styles.description}>{education.description}</p>
      )}
      
      {education.featuredLink && (
        <div className={styles.featured}>
          <a 
            href={education.featuredLink} 
            target="_blank" 
            rel="noreferrer noopener"
            className={styles.featuredLink}
            aria-label="Read featured article on Northeastern Silicon Valley site"
          >
            <span className={styles.featuredIcon}>⭐</span>
            Featured on Northeastern Silicon Valley site
          </a>
        </div>
      )}
      
      {education.courses && (
        <div className={styles.courses}>
          {education.courses.bridge && (
            <div className={styles.courseGroup}>
              <h5 className={styles.courseGroupTitle}>Bridge Courses</h5>
              <div className={styles.courseList}>
                {education.courses.bridge.map((course, i) => (
                  <span key={i} className={styles.course}>{course}</span>
                ))}
              </div>
            </div>
          )}
          
          {education.courses.core && (
            <div className={styles.courseGroup}>
              <h5 className={styles.courseGroupTitle}>Core Courses</h5>
              <div className={styles.courseList}>
                {education.courses.core.map((course, i) => (
                  <span key={i} className={styles.course}>{course}</span>
                ))}
              </div>
            </div>
          )}
          
          {education.courses.breadth && (
            <div className={styles.courseGroup}>
              <h5 className={styles.courseGroupTitle}>Breadth Electives</h5>
              <div className={styles.courseList}>
                {education.courses.breadth.map((course, i) => (
                  <span key={i} className={styles.course}>{course}</span>
                ))}
              </div>
            </div>
          )}
          
          {education.courses.aiSystems && (
            <div className={styles.courseGroup}>
              <h5 className={styles.courseGroupTitle}>AI/Systems Electives</h5>
              <div className={styles.courseList}>
                {education.courses.aiSystems.map((course, i) => (
                  <span key={i} className={styles.course}>{course}</span>
                ))}
              </div>
            </div>
          )}
          
          {education.courses.coop && (
            <div className={styles.courseGroup}>
              <h5 className={styles.courseGroupTitle}>Co-op</h5>
              <div className={styles.courseList}>
                {education.courses.coop.map((course, i) => (
                  <span key={i} className={styles.course}>{course}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EducationCard;
