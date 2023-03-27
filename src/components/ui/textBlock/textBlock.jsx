import React from "react";
import styles from "./textBlock.module.css";

const TextBlock = ({ title, subtitle, description }) => {
  return (
    <div className={styles.textBlock}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <p>{description}</p>
    </div>
  );
};

export default TextBlock;
