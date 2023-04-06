import React from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import styles from "./userPage.module.css";
import Line from "../../ui/line";
import TextBlock from "../../ui/textBlock";
import Button from "../../ui/button";

const UserPage = () => {
  const order = {
    title: "Клавиатура1234567890",
    subtitle: "Артикул: 2  ",
    description:
      "Lorem ipsum dolor sit amet consectetur. Non mauris adipiscing nulla mattis lacus vitae eu nisl at. Neque tempus euismod malesuada penatibus. Donec imperdiet bibendum dui ut scelerisque. Tincidunt amet pharetra ullamcorper sem quis enim. Odio neque integer in aliquam pharetra odio ac.",
  };

  return (
    <>
      <Heading>
        <FirstHeading>ИМЯ</FirstHeading>
        <SecondHeading>Добро пожаловать!</SecondHeading>
      </Heading>
      <section className={styles.userData}>
        <img src="/images/avatars/avatar5.svg" alt="avatar" />
        <TextBlock authData />
      </section>
      <Line />
      <section>
        <h2 className={styles.orderHeading}>Заказы</h2>
        <div className={styles.order}>
          <p className={styles.orderDate}>Дата заказа: 05.02.2023</p>
          <div className={styles.info}>
            <img
              className={styles.image}
              src="/images/keycaps/keycapsPreview/keycap1.jpg"
              alt="keyboard"
            />
            <div>
              <TextBlock {...order} />
              <div className={styles.data}>
                <div>
                  <h3 className={styles.text}>Доставка: 30 дней</h3>
                  <h3 className={styles.text}>5 шт.</h3>
                  <h3 className={styles.text}>Цена: 3000 руб.</h3>
                </div>
                <Button appearance="ctvBlack">В доставке</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.order}>
          <p className={styles.orderDate}>Дата заказа: 05.02.2023</p>
          <div className={styles.info}>
            <img
              className={styles.image}
              src="/images/keycaps/keycapsPreview/keycap1.jpg"
              alt="keyboard"
            />
            <div>
              <TextBlock {...order} />
              <div className={styles.data}>
                <div>
                  <h3 className={styles.text}>Доставка: 30 дней</h3>
                  <h3 className={styles.text}>5 шт.</h3>
                  <h3 className={styles.text}>Цена: 3000 руб.</h3>
                </div>
                <Button appearance="ctvBlack">В доставке</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserPage;
