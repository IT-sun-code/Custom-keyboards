import React from "react";
import { Link } from "react-router-dom";
import HeartIcon from "../heartIcon";
import TextBlock from "../textBlock";
import Button from "../button";
import styles from "./basketItem.module.css";

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
                <div>
                  <h3 className={styles.text}>Доставка: 30 дней</h3>
                  <div className={styles.price}>
                    <h3 className={styles.count}>{` ${1} шт.`}</h3>
                    <button>
                      <img
                        className={styles.plus}
                        src="/icons/actionIcons/plus.svg"
                        alt="plus"
                      />
                    </button>
                    <button>
                      <img src="/icons/actionIcons/minus.svg" alt="minus" />
                    </button>
                  </div>
                  <h3
                    className={styles.text}
                  >{`Цена за 1 шт: ${card.price} руб.`}</h3>
                  <h3 className={styles.text}>{`Всего: ${card.price} руб.`}</h3>
                </div>
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
