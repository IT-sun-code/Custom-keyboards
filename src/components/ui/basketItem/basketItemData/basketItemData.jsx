import React from "react";
import styles from "./basketItemData.module.css";
import { calculateDeliveryDate } from "../../../utils/calculateDeliveryDate";
import { useBasket } from "../../../utils/hooks/useBasket";

const BasketItemData = ({ card }) => {
  const { handleIncreaseQuantity, handleDecreaseQuantity, getBasketItem } =
    useBasket();
  const deliveryDdate = calculateDeliveryDate();
  const basketItem = getBasketItem(card);
  const { quantity, totalPrice } = basketItem;

  return (
    <div className={styles.data}>
      <div>
        <h3 className={styles.text}>{`Доставка: ${deliveryDdate}`}</h3>
        <div className={styles.price}>
          <h3 className={styles.count}>{` ${quantity} шт.`}</h3>
          <button onClick={() => handleIncreaseQuantity(card, quantity)}>
            <img
              className={styles.plus}
              src="/icons/actionIcons/plus.svg"
              alt="plus"
            />
          </button>
          <button onClick={() => handleDecreaseQuantity(card, quantity)}>
            <img src="/icons/actionIcons/minus.svg" alt="minus" />
          </button>
        </div>
        <h3 className={styles.text}>{`Цена за 1 шт: ${card.price} руб.`}</h3>
        <h3 className={styles.text}>{`Всего: ${totalPrice} руб.`}</h3>
      </div>
    </div>
  );
};

export default BasketItemData;
