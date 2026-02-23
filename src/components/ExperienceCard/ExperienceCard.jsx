import React from "react";
import styles from "./ExperienceCard.module.css";

const ExperienceCard = ({ experience }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          {experience.logo && (
            experience.website ? (
              <a 
                href={experience.website} 
                target="_blank" 
                rel="noreferrer noopener"
                className={styles.logoLink}
                aria-label={`Visit ${experience.company} website`}
              >
                <img 
                  src={experience.logo} 
                  alt={`${experience.company} logo`}
                  className={styles.logo}
                  loading="lazy"
                />
              </a>
            ) : (
              <img 
                src={experience.logo} 
                alt={`${experience.company} logo`}
                className={styles.logo}
                loading="lazy"
              />
            )
          )}
        </div>
        <div className={styles.companyInfo}>
          <h3 className={styles.company}>
            {experience.website ? (
              <a 
                href={experience.website} 
                target="_blank" 
                rel="noreferrer noopener"
                className={styles.companyLink}
                aria-label={`Visit ${experience.company} website`}
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </h3>
          <p className={styles.location}>{experience.location}</p>
        </div>
      </div>
      
      {experience.roles.map((role, idx) => (
        <div key={idx} className={styles.role}>
          <div className={styles.roleHeader}>
            <div className={styles.titleContainer}>
              <strong className={styles.title}>
                {role.projectLink ? (
                  <>
                    {role.title.split('–')[0]}
                    {' – '}
                    <a 
                      href={role.projectLink} 
                      target="_blank" 
                      rel="noreferrer noopener"
                      className={styles.projectLink}
                      aria-label={`Visit ${role.title.split('–')[1]?.trim()} project`}
                    >
                      {role.title.split('–')[1]?.trim()}
                    </a>
                  </>
                ) : (
                  role.title
                )}
              </strong>
              {role.appStoreLink && (
                <a 
                  href={role.appStoreLink} 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className={styles.appStoreLink}
                  aria-label="Download YouDescribe on App Store"
                  title="Download on App Store"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  App Store
                </a>
              )}
            </div>
            <span className={styles.period}>{role.period}</span>
          </div>
          <ul className={styles.bullets}>
            {role.bullets.map((bullet, i) => {
              // Check if bullet contains App Store link reference
              const bulletText = bullet;
              if (role.appStoreLink && bulletText.includes('App Store')) {
                const parts = bulletText.split('App Store');
                return (
                  <li key={i}>
                    {parts[0]}
                    <a 
                      href={role.appStoreLink} 
                      target="_blank" 
                      rel="noreferrer noopener"
                      className={styles.bulletLink}
                    >
                      App Store
                    </a>
                    {parts[1]}
                  </li>
                );
              }
              return <li key={i}>{bullet}</li>;
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
