import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextBlock from "../textBlock";
import Button from "../button";
import styles from "./orderItem.module.css";
import OrderItemData from "./orderItemData";
import { useOrders } from "../../utils/hooks/useOrders";
import Modal from "../modal";
import useModal from "../../utils/hooks/useModal";
import { useAuth } from "../../utils/hooks/useAuth";
import PropTypes from "prop-types";

const OrderItem = ({ currentPath, card }) => {
  const { updateUserData, currentUser } = useAuth();
  const { getOrder } = useOrders();
  const order = getOrder(card);
  const { orderDate, orderAddress, isDelivered: isOrderDelivered } = order;
  const { modalVariety, handleModalOpen, handleModalClose, modalOpen } =
    useModal();

  const [isDelivered, setIsDelivered] = useState(isOrderDelivered);

  const updatedOrders = currentUser?.orders?.map((order) => {
    if (order.id === card.id) {
      return {
        ...order,
        isDelivered: true,
      };
    } else {
      return order;
    }
  });
  const updatedUser = {
    ...currentUser,
    orders: updatedOrders,
  };

  const handleDelivered = () => {
    setIsDelivered(true);
    updateUserData(updatedUser);
  };

  return (
    currentPath === "/user" && (
      <>
        <section>
          <p className={styles.orderDate}>{orderDate}</p>
          <p className={styles.orderDate}>{orderAddress}</p>
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
                    <Button
                      isDelivered={isDelivered}
                      disabled={!isDelivered}
                      appearance={isDelivered ? "ctvBlueSubmit" : "ctvBlack"}
                      onClick={() => handleModalOpen("delivery")}
                    >
                      {isDelivered ? "Получено" : "В доставке"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {modalOpen && (
          <Modal
            variety={modalVariety}
            isOpen={modalOpen}
            onClose={handleModalClose}
            onHandleDelivered={handleDelivered}
          />
        )}
      </>
    )
  );
};

OrderItem.propTypes = {
  currentPath: PropTypes.string,
  card: PropTypes.object,
};
export default OrderItem;
