import React from "react";
import styles from "./heartIcon.module.css";
import PropTypes from "prop-types";

const HeartIcon = ({ onClick, isActive, cardItem }) => {
  console.log(cardItem);
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

HeartIcon.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  cardItem: PropTypes.bool,
};
export default HeartIcon;
