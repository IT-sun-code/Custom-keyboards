import React from "react";
import styles from "./firstHeading.module.css";

const FirstHeading = ({ children }) => {
  return <h1 className={styles.firstHeading}>{children}</h1>;
};

export default FirstHeading;
