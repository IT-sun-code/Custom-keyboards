import React from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import styles from "./userPage.module.css";
import Line from "../../ui/line";
import TextBlock from "../../ui/textBlock";
import { useAuth } from "../../utils/hooks/useAuth";
import { useOrders } from "../../utils/hooks/useOrders";
import Card from "../home/card";

const UserPage = () => {
  const { currentUser } = useAuth();
  const { ordersCards } = useOrders();

  return (
    <>
      <Heading>
        <FirstHeading>{currentUser?.userName?.toUpperCase()}</FirstHeading>
        <SecondHeading>Добро пожаловать!</SecondHeading>
      </Heading>
      <section className={styles.userData}>
        <img src="/images/avatars/avatar5.svg" alt="avatar" />
        <TextBlock authData={currentUser} />
      </section>
      <Line />
      <section>
        <h2 className={styles.orderHeading}>Заказы</h2>
        {ordersCards?.length === 0 && (
          <SecondHeading>Здесь пока пусто</SecondHeading>
        )}
        {ordersCards &&
          ordersCards.map((order) => (
            <Card card={order} key={`${order.id}_${Date.now()}`} />
          ))}
      </section>
    </>
  );
};

export default UserPage;
