import React, { useState, useEffect } from "react";
import styles from "./keyboardMainSlide.module.css";

const KeyboardMainSlide = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <img
      className={`${styles.keyboardMainSlide} ${isHidden ? styles.hidden : ""}`}
      src="/images/keyboardMainSlides/keyboardMainSlide.jpg"
      alt="keyboardMainSlide"
    />
  );
};

export default KeyboardMainSlide;
