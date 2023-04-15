import React from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Line from "../../ui/line";
import TextBlock from "../../ui/textBlock";
import Button from "../../ui/button";
import styles from "./basket.module.css";
import { useAuth } from "../../utils/hooks/useAuth";

const Basket = () => {
  const { currentUser } = useAuth();
  const order = {
    title: "Клавиатура1234567890",
    subtitle: "Артикул: 2  ",
    description:
      "Lorem ipsum dolor sit amet consectetur. Non mauris adipiscing nulla mattis lacus vitae eu nisl at. Neque tempus euismod malesuada penatibus. Donec imperdiet bibendum dui ut scelerisque. Tincidunt amet pharetra ullamcorper sem quis enim. Odio neque integer in aliquam pharetra odio ac.",
  };

  return (
    <>
      <Heading>
        <FirstHeading>ВАША КОРЗИНА</FirstHeading>
        {currentUser.favorites === 0 && (
          <SecondHeading>Здесь пока пусто</SecondHeading>
        )}
      </Heading>
      <section>
        <div className={styles.order}>
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
                  <div className={styles.price}>
                    <h3 className={styles.count}>5 шт.</h3>
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
                  <h3 className={styles.text}>Цена: 3000 руб.</h3>
                </div>
                <Button appearance="ctvBlack">Удалить</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.order}>
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
                  <div className={styles.price}>
                    <h3 className={styles.count}>5 шт.</h3>
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
                  <h3 className={styles.text}>Цена: 3000 руб.</h3>
                </div>
                <Button appearance="ctvBlack">Удалить</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Line />
      <section>
        <h2>Товары: 2 шт.</h2>
        <h2 className={styles.total}>ИТОГО: 7999 руб.</h2>
        <Button appearance="ctvBlueOrder">Оформить заказ</Button>
      </section>
    </>
  );
};

export default Basket;
