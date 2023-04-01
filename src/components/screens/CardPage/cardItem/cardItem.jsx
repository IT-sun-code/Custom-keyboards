import React from "react";
import styles from "./cardItem.module.css";
import Slider from "../../../ui/slider";

const CardItem = ({ slides, card }) => {
  return (
    <>
      <div className={styles.container}>
        {slides && (
          <div className={styles.slide}>
            <Slider slides={slides} appearance={"percentagesLower"} />
          </div>
        )}

        <div className={styles.item}>
          <div className={styles.characteristics}>
            <h4 className={styles.title}>{card.title}</h4>
            <h4 className={styles.sku}>Артикул: {card.id}</h4>
            <p>
              <b>Описание: </b>
              {card.description}
            </p>
          </div>
          <div className={styles.actionBlock}>
            <img
              className={styles.heart}
              src="/icons/actionIcons/heart.svg"
              alt="heart"
            />
            <h2>Цена: {card.price}</h2>
            <img
              className={styles.basket}
              src="/icons/actionIcons/basket.svg"
              alt="basket"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
