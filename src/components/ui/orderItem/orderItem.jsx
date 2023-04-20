import React from "react";
import { Link } from "react-router-dom";
import TextBlock from "../textBlock";
import Button from "../button";
import styles from "./orderItem.module.css";
import OrderItemData from "./orderItemData";

const OrderItem = ({ currentUser, currentPath, card }) => {
  return (
    currentPath === "/user" && (
      <section>
        <div className={styles.order}>
          <div className={styles.info}>
            <div className={styles.itemBasket}>
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
                <OrderItemData card={card} />

                <div>
                  <Button appearance="ctvBlack">Доставляется</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default OrderItem;
