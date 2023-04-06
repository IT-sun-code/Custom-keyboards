import React from "react";
import styles from "./basketIcon.module.css";

const BasketIcon = ({ onClick, isActive, cardItem }) => {
  return (
    <button onClick={onClick}>
      <img
        className={cardItem ? styles.basketCardItem : styles.basket}
        src={
          isActive
            ? "/icons/actionIcons/basketActive.svg"
            : "/icons/actionIcons/basket.svg"
        }
        alt="basket"
      />
    </button>
  );
};

export default BasketIcon;
