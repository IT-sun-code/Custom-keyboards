import React from "react";
import styles from "./secondHeading.module.css";

const SecondHeading = ({ children }) => {
  return <h2 className={styles.secondHeading}>{children}</h2>;
};

export default SecondHeading;
