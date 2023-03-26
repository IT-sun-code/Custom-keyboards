import React from "react";
import styles from "./heading.module.css";

const Heading = ({ children }) => {
  return <div className={styles.heading}>{children}</div>;
};

export default Heading;
