import React, { useState, useEffect } from "react";
import styles from "./cardItem.module.css";
import Slider from "../../../ui/slider";
import Loading from "../../../ui/loading";

const CardItem = ({ slides, card }) => {
  const [filteredSlides, setfilteredSlides] = useState([]);

  useEffect(() => {
    const filteredSlides = slides.filter((slide) => slide.cardId === card.id);
    setfilteredSlides(filteredSlides);
  }, [slides, card.id]);

  return (
    <>
      <div className={styles.container}>
        {filteredSlides.length > 0 ? (
          <div className={styles.slide}>
            <Slider slides={filteredSlides} appearance={"percentagesLower"} />
          </div>
        ) : (
          <Loading />
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
            <button>
              <img
                className={styles.heart}
                src="/icons/actionIcons/heart.svg"
                alt="heart"
              />
            </button>
            <h2>Цена: {card.price}</h2>
            <button>
              <img
                className={styles.basket}
                src="/icons/actionIcons/basket.svg"
                alt="basket"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
