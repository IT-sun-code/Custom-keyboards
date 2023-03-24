import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
