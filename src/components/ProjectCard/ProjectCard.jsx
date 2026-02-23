import React from "react";
import TechIcon from "../TechIcon/TechIcon.jsx";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  // Get primary technologies from tags (first 3-4)
  const primaryTechs = project.tags.slice(0, 4);
  
  return (
    <div className={styles.card}>
      {project.image && (
        <div className={styles.imageContainer}>
          <img 
            src={project.image} 
            alt={`${project.title} project screenshot`}
            className={styles.image}
            loading="lazy"
          />
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.techIcons}>
            {primaryTechs.map((tech, i) => (
              <TechIcon key={i} tech={tech} />
            ))}
          </div>
        </div>
        
        <p className={styles.description}>{project.description}</p>
        
        <ul className={styles.highlights}>
          {project.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
        
        <div className={styles.tags}>
          {project.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        
        <div className={styles.links}>
          {project.links?.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noreferrer noopener"
              className={styles.link}
              aria-label={`View ${project.title} on GitHub`}
            >
              View on GitHub
            </a>
          )}
          {project.links?.website && (
            <a 
              href={project.links.website} 
              target="_blank" 
              rel="noreferrer noopener"
              className={`${styles.link} ${styles.linkPrimary}`}
              aria-label={`Visit ${project.title} website`}
            >
              Visit Website
            </a>
          )}
          {project.links?.demo && (
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noreferrer noopener"
              className={`${styles.link} ${styles.linkPrimary}`}
              aria-label={`View ${project.title} demo`}
            >
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
