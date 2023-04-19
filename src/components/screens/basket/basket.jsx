import React from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Line from "../../ui/line";
import TextBlock from "../../ui/textBlock";
import Button from "../../ui/button";
import styles from "./basket.module.css";
import { useAuth } from "../../utils/hooks/useAuth";
import { useBasket } from "../../utils/hooks/useBasket";
import Card from "../home/card";

const Basket = () => {
  const { basketCards } = useBasket();
  const { currentUser } = useAuth();
  console.log(basketCards);

  return (
    <>
      <Heading>
        <FirstHeading>ВАША КОРЗИНА</FirstHeading>
        {basketCards.length === 0 && (
          <SecondHeading>Здесь пока пусто</SecondHeading>
        )}
      </Heading>
      <section className={styles.container}>
        {basketCards &&
          basketCards.map((basket) => <Card card={basket} key={basket.id} />)}
      </section>
      <Line />
      <section>
        <h2>{`Товары: ${basketCards.length} шт.`}</h2>
        <h2 className={styles.total}>{`ИТОГО: 7999 руб.`}</h2>
        <Button appearance="ctvBlueOrder">Оформить заказ</Button>
      </section>
    </>
  );
};

export default Basket;
