import React, { useEffect, useRef, useState } from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const cardsRef = useRef([]);

  // Sample photo data - you can replace these with your actual photos
  const photos = [
    {
      id: 1,
      src: "/assets/personal/professional-headshot.webp",
      alt: "Professional headshot",
      category: "portrait",
      description: "Professional headshot"
    },
    {
      id: 2,
      src: "/assets/personal/background.webp",
      alt: "Background photo",
      category: "travel",
      description: "Travel photography"
    },
    // Add more photos here - you'll need to add your actual photos to the public/assets/photos directory
  ];

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const openModal = (photo) => {
    setSelectedImage(photo);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedImage]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Gallery</h2>
      <p className={styles.subtitle}>
        A collection of my photography, travels, and moments captured along the way. 
        Follow me on <a href="https://instagram.com/kaustubha_ev" target="_blank" rel="noreferrer noopener" className={styles.instagramLink}>Instagram</a> for more!
      </p>
      
      <div className={styles.gallery}>
        {photos.map((photo, idx) => (
          <div
            key={photo.id}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={styles.photoWrapper}
            onClick={() => openModal(photo)}
          >
            <div className={styles.photoCard}>
              <img 
                src={photo.src} 
                alt={photo.alt}
                className={styles.photo}
                loading="lazy"
              />
              <div className={styles.photoOverlay}>
                <p className={styles.photoDescription}>{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal} aria-label="Close">
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className={styles.modalImage}
            />
            <p className={styles.modalDescription}>{selectedImage.description}</p>
          </div>
        </div>
      )}

      <div className={styles.cta}>
        <p>Want to see more? Check out my photography on Instagram!</p>
        <a 
          href="https://instagram.com/kaustubha_ev" 
          target="_blank" 
          rel="noreferrer noopener"
          className={styles.ctaButton}
        >
          Follow on Instagram
        </a>
      </div>
    </section>
  );
};

export default Gallery;
