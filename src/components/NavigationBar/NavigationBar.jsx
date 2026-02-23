import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaFolderOpen, FaTools, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuIcon}>
            <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ""}`}></span>
            <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ""}`}></span>
            <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ""}`}></span>
          </span>
        </button>

        <ul className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
          <li>
            <Link 
              to="/" 
              className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaHome className={styles.icon} />
              <span>Introduction</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/about-me" 
              className={`${styles.link} ${isActive("/about-me") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUser className={styles.icon} />
              <span>About Me</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`${styles.link} ${isActive("/projects") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaFolderOpen className={styles.icon} />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className={`${styles.link} ${isActive("/skills") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTools className={styles.icon} />
              <span>Skills & Tools</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/experience" 
              className={`${styles.link} ${isActive("/experience") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaBriefcase className={styles.icon} />
              <span>Experience</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/education" 
              className={`${styles.link} ${isActive("/education") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaGraduationCap className={styles.icon} />
              <span>Education</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`${styles.link} ${isActive("/contact") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaEnvelope className={styles.icon} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
