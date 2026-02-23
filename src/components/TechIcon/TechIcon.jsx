import React from "react";
import styles from "./TechIcon.module.css";

const techIcons = {
  "Python": "🐍",
  "Java": "☕",
  "JavaScript": "📜",
  "React": "⚛️",
  "React.js": "⚛️",
  "Node.js": "🟢",
  "PyTorch": "🔥",
  "TensorFlow": "🧠",
  "scikit-learn": "🔬",
  "Flask": "🌶️",
  "FastAPI": "⚡",
  "Docker": "🐳",
  "Git": "📦",
  "Firebase": "🔥",
  "Android": "🤖",
  "iOS": "🍎",
  "Flutter": "💙",
  "Swift": "🐦",
  "PostgreSQL": "🐘",
  "MongoDB": "🍃",
  "AWS": "☁️",
  "Azure": "☁️",
  "GCP": "☁️",
  "GitHub": "🐙",
  "NLP": "💬",
  "Computer Vision": "👁️",
  "Machine Learning": "🤖",
  "Deep Learning": "🧠",
  "Generative AI": "✨",
  "Research": "🔬",
  "Mobile Development": "📱",
  "Web Development": "🌐",
  "Redux": "🔄",
  "MySQL": "🗄️",
  "Tailwind CSS": "🎨",
  "Next.js": "▲",
};

const TechIcon = ({ tech }) => {
  const icon = techIcons[tech] || "💻";
  
  return (
    <span className={styles.icon} title={tech}>
      {icon}
    </span>
  );
};

export default TechIcon;
