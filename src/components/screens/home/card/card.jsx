import React, { useState } from "react";
import styles from "./card.module.css";
import BasketIcon from "../../../ui/basketIcon";
import HeartIcon from "../../../ui/heartIcon";

const Card = ({ card, onClick }) => {
  const str = card.title;
  const maxLength = 35;

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
      <div className={styles.item}>
        <HeartIcon onClick={handleHeartIconClick} isActive={heartIconclicks} />
        <BasketIcon
          onClick={handleBasketIconClick}
          isActive={basketIconclicks}
        />
        <img
          className={styles.image}
          src={card.image}
          alt="keyboard"
          onClick={onClick}
        />
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
