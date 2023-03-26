import React, { useState } from "react";
import styles from "./slider.module.css";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const previousImage = () => {
    setCurrentIndex((currentIndex + slides.length - 1) % slides.length);
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
    console.log("tttttttttt");
  };

  return (
    <div className={styles.slider}>
      <div className={styles.imageContainer}>
        {slides[currentIndex] && (
          <img
            src={slides[currentIndex].image}
            alt="slide"
            className={styles.image}
          />
        )}

        <div className={styles.hi}>
          <img
            src="/icons/actionIcons/arrowSlideLeft.svg"
            alt="arrowSlideLeft"
            onClick={previousImage}
            className={`${styles.arrow} ${styles.left}`}
          />
        </div>

        <div>
          <img
            src="/icons/actionIcons/arrowSlideRight.svg"
            alt="arrowSlideRight"
            onClick={nextImage}
            className={`${styles.arrow} ${styles.right}`}
          />
        </div>
      </div>

      <div className={styles.controls}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
