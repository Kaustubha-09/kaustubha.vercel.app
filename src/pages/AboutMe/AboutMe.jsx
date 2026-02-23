import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <p>
          My career didn't begin in computer science—it began in architectural engineering, designing spaces where people live, work, and connect. Over time, I realized I was less drawn to physical walls and more fascinated by the systems behind them—the invisible structures that make complex things work. That curiosity led me to pursue a Master's in Computer Science at <a href="https://siliconvalley.northeastern.edu/kaustubha-eluri-aspiring-product-manager/" target="_blank" rel="noreferrer noopener" className={styles.link}>Northeastern University</a>, where my "blueprints" evolved into algorithms, APIs, and AI models.
        </p>
        
        <p>
          Today, I work at the intersection of AI, accessibility, and product engineering.
        </p>
        
        <p>
          I'm currently advancing AI accessibility research as a Research Assistant at the <a href="https://www.ski.org/" target="_blank" rel="noreferrer noopener" className={styles.link}>Smith-Kettlewell Eye Research Institute</a>, where I help develop <a href="https://ydx.youdescribe.org/home" target="_blank" rel="noreferrer noopener" className={styles.link}><strong>YouDescribeX</strong></a>—an AI-powered extension of YouDescribe that enables blind and visually impaired users to experience video content through intelligent, context-aware audio descriptions. My work spans AI/ML pipelines, real-time systems, and cross-platform engineering, ensuring WCAG-compliant, inclusive design across web, iOS, and Android.
        </p>
        
        <p>
          In parallel, as an Agentic AI Engineer Intern at Evenness, I've deployed autonomous AI agents into production environments—reducing manual effort by <strong>40%</strong>, improving throughput by <strong>25%</strong>, and maintaining <strong>99.9% uptime</strong>.
        </p>
        
        <p>
          My work across research and industry includes:
        </p>
        
        <ul className={styles.list}>
          <li><strong>94% accurate</strong> deepfake detection system</li>
          <li><strong>GPT-4–powered</strong> emergency triage assistant improving patient urgency classification</li>
          <li><strong>Award-winning</strong> mobile applications (NEUQuest, Husky Mingle) driving campus engagement</li>
        </ul>
        
        <p>
          I'm driven by problems where technology, design, and human impact converge—especially those that turn advanced AI into tools people can genuinely use. If you're building AI-driven products or hiring for Software Engineering, AI/ML, or Product Management roles, I'd love to connect.
        </p>
        
        <p className={styles.workAuth}>
          <strong>Work Authorization:</strong> U.S. Citizen (no sponsorship required).
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
