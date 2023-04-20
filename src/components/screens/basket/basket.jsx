import React from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Line from "../../ui/line";
import Button from "../../ui/button";
import styles from "./basket.module.css";
import { useAuth } from "../../utils/hooks/useAuth";
import { useBasket } from "../../utils/hooks/useBasket";
import Card from "../home/card";
import useModal from "../../utils/hooks/useModal";
import Modal from "../../ui/modal";
import { useOrders } from "../../utils/hooks/useOrders";

const Basket = () => {
  const { modalVariety, handleModalOpen, handleModalClose, modalOpen } =
    useModal();
  const { basketCards } = useBasket();
  const { currentUser } = useAuth();

  const totalQuantity = basketCards.reduce(
    (total, card) => total + card.quantity,
    0
  );
  const totalPrice = basketCards.reduce(
    (total, card) => total + card.totalPrice,
    0
  );

  const { handleOrdersClick } = useOrders();

  const orderData = {
    basketCards: basketCards,
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
    address: currentUser.address,
    handleOrdersClick: handleOrdersClick,
  };

  return (
    <>
      <Heading>
        <FirstHeading>ВАША КОРЗИНА</FirstHeading>
        {basketCards?.length === 0 && (
          <SecondHeading>Здесь пока пусто</SecondHeading>
        )}
      </Heading>
      <section className={styles.container}>
        {basketCards &&
          basketCards.map((basket) => <Card card={basket} key={basket.id} />)}
      </section>
      <Line />
      <section>
        <h2>{`Товаров: ${totalQuantity} шт.`}</h2>
        <h2 className={styles.total}>{`ИТОГО: ${totalPrice} руб.`}</h2>
        <Button
          appearance="ctvBlueOrder"
          onClick={() => handleModalOpen("order")}
        >
          Оформить заказ
        </Button>
      </section>
      {modalOpen && (
        <Modal
          variety={modalVariety}
          isOpen={modalOpen}
          onClose={handleModalClose}
          orderData={orderData}
        />
      )}
    </>
  );
};

export default Basket;
