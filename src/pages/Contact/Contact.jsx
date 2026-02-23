import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here (e.g., EmailJS, Formspree, etc.)
    // For now, we'll use mailto as fallback
    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:kaustubha.ev@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.subtitle}>
        Get in touch before I write another line of code!
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name, your fame"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email<span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Where can I reach you back?"
            className={styles.input}
            required
          />
          <p className={styles.helperText}>
            Temporary emails are also accepted, unless you wish to hear back 😉
          </p>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message<span className={styles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your words, my inbox."
            className={styles.textarea}
            rows="6"
            required
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
          <button type="button" onClick={handleReset} className={styles.resetButton}>
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
