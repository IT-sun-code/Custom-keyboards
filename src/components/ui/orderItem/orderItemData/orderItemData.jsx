import React from "react";
import styles from "./orderItemData.module.css";
import { useOrders } from "../../../utils/hooks/useOrders";

const OrderItemData = ({ card }) => {
  const { getOrder } = useOrders();
  const order = getOrder(card);
  const { totalPrice, quantity, deliveryDate } = order;

  return (
    <div className={styles.data}>
      <div>
        <h3 className={styles.text}>{`Доставка: ${deliveryDate}`}</h3>
        <div className={styles.price}>
          <h3 className={styles.count}>{` ${quantity} шт.`}</h3>
        </div>
        <h3 className={styles.text}>{`Цена за 1 шт: ${card.price} руб.`}</h3>
        <h3 className={styles.text}>{`Всего: ${totalPrice} руб.`}</h3>
      </div>
    </div>
  );
};

export default OrderItemData;
