import React, { useState, useEffect } from "react";
import styles from "./cardItem.module.css";
import Slider from "../../../ui/slider";
import Loading from "../../../ui/loading";
import HeartIcon from "../../../ui/heartIcon";
import BasketIcon from "../../../ui/basketIcon";

const CardItem = ({ slides, card }) => {
  const [filteredSlides, setfilteredSlides] = useState([]);

  useEffect(() => {
    const filteredSlides = slides.filter((slide) => slide.cardId === card.id);
    setfilteredSlides(filteredSlides);
  }, [slides, card.id]);

  const [basketIconclicks, setBasketIconClicks] = useState(false);
  const handleBasketIconClick = () => {
    setBasketIconClicks(!basketIconclicks);
  };
  const [heartIconclicks, setHeartIconClicks] = useState(false);
  const handleHeartIconClick = () => {
    setHeartIconClicks(!heartIconclicks);
  };

  return (
    <>
      <div className={styles.container}>
        {filteredSlides.length <= 0 ? (
          <div className={styles.slide}>
            <Loading />
          </div>
        ) : (
          <div className={styles.slide}>
            <Slider slides={filteredSlides} appearance={"percentagesLower"} />
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
            <HeartIcon
              cardItem
              onClick={handleHeartIconClick}
              isActive={heartIconclicks}
            />
            <h2>Цена: {card.price}</h2>
            <BasketIcon
              cardItem
              onClick={handleBasketIconClick}
              isActive={basketIconclicks}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
