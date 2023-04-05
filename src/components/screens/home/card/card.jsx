import React from "react";
import styles from "./card.module.css";

const Card = ({ card, onClick }) => {
  const str = card.title;
  const maxLength = 35;

  return (
    <>
      <div className={styles.item} onClick={onClick}>
        <img
          className={styles.heart}
          src="/icons/actionIcons/heart.svg"
          alt="heart"
        />
        <img
          className={styles.basket}
          src="/icons/actionIcons/basket.svg"
          alt="basket"
        />
        <img className={styles.image} src={card.image} alt="keyboard" />
        <div>
          <div title={str} className={styles.tooltip}>
            <p className={styles.description}>
              {str.length > maxLength
                ? str.substring(0, maxLength - 3) + "..."
                : str}
            </p>
          </div>
          <p className={styles.description}>{`Артикул ${card.id}`}</p>
          <h3>{`Цена: ${card.price} ₽`}</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
