import React from "react";
import { Link } from "react-router-dom";
import HeartIcon from "../heartIcon";
import TextBlock from "../textBlock";
import Button from "../button";
import styles from "./basketItem.module.css";
import BasketItemData from "./basketItemData";

const BasketItem = ({
  currentUser,
  currentPath,
  card,
  handleHeartIconClick,
  handleBasketIconClick,
  isFavorite,
}) => {
  return (
    currentPath === "/basket" && (
      <section>
        <div className={styles.order}>
          <div className={styles.info}>
            <div className={styles.itemBasket}>
              <HeartIcon
                onClick={currentUser && handleHeartIconClick}
                isActive={isFavorite}
              />
              <Link to={`/cards/${card.id}`}>
                <img
                  className={`${styles.image} ${styles.imageBasket}`}
                  src={card.image}
                  alt="keyboard"
                />
              </Link>
            </div>
            <div className={styles.rightBlock}>
              <TextBlock {...card} />

              <div className={styles.data}>
                <BasketItemData card={card} />

                <div>
                  <Button appearance="ctvBlack" onClick={handleBasketIconClick}>
                    Удалить
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default BasketItem;
