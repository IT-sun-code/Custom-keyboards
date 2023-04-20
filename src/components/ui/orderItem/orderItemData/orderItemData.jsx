import React from "react";
import styles from "./orderItemData.module.css";
import { useOrders } from "../../../utils/hooks/useOrders";

const OrderItemData = ({ card }) => {
  const { getQuantity, getTotalPrice, getDeliveryDate } = useOrders();
  const deliveryDdate = getDeliveryDate(card);
  const quantity = getQuantity(card);
  const total = getTotalPrice(card);

  return (
    <div className={styles.data}>
      <div>
        <h3 className={styles.text}>{`Доставка: ${deliveryDdate}`}</h3>
        <div className={styles.price}>
          <h3 className={styles.count}>{` ${quantity} шт.`}</h3>
        </div>
        <h3 className={styles.text}>{`Цена за 1 шт: ${card.price} руб.`}</h3>
        <h3 className={styles.text}>{`Всего: ${total} руб.`}</h3>
      </div>
    </div>
  );
};

export default OrderItemData;
