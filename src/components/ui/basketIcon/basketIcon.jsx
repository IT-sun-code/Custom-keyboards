import React from "react";
import styles from "./basketIcon.module.css";
import PropTypes from "prop-types";

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

BasketIcon.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  cardItem: PropTypes.bool,
};
export default BasketIcon;
