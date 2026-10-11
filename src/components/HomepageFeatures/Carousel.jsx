import React, { useState } from 'react';
import styles from './Carousel.module.css';

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={prev} aria-label="Previous">
        ‹
      </button>

      <img
        className={styles.slide}
        src={images[index].src}
        alt={images[index].alt}
      />

      <button className={styles.arrow} onClick={next} aria-label="Next">
        ›
      </button>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}