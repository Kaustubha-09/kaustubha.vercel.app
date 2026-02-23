import React, { useEffect, useRef } from "react";
import skillsData from "../../data/Skills.json";
import styles from "./Skills.module.css";

const Skills = () => {
  const groupsRef = useRef([]);

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

    groupsRef.current.forEach((group) => {
      if (group) observer.observe(group);
    });

    return () => {
      groupsRef.current.forEach((group) => {
        if (group) observer.unobserve(group);
      });
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>Skills & Tools</h1>
        {skillsData.map((group, idx) => (
          <div
            key={idx}
            ref={(el) => (groupsRef.current[idx] = el)}
            className={styles.groupWrapper}
          >
            <div className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.items}>
                {group.items.map((skill, i) => (
                  <span key={i} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
