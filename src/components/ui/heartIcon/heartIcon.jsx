import React from "react";
import styles from "./heartIcon.module.css";

const HeartIcon = ({ onClick, isActive, cardItem }) => {
  return (
    <button onClick={onClick} className={cardItem ? "" : styles.heartBtn}>
      <img
        className={styles.heart}
        src={
          isActive
            ? "/icons/actionIcons/heartActive.svg"
            : "/icons/actionIcons/heart.svg"
        }
        alt="heart"
      />
    </button>
  );
};

export default HeartIcon;
