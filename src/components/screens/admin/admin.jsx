import React from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Header from "../../ui/header";
import Line from "../../ui/line";
import TextBlock from "../../ui/textBlock";
import Button from "../../ui/button";
// import styles from "./basket.module.css";
import styles from "./admin.module.css";

const Admin = () => {
  return (
    <>
      <Header />
      <Heading>
        <FirstHeading>АДМИНИСТРАТОР</FirstHeading>
        <SecondHeading>Добро пожаловать!</SecondHeading>
      </Heading>
      <section className={styles.userData}>
        <img src="/images/avatars/avatar3.svg" alt="avatar" />
        <TextBlock authData />
      </section>
      <Line />
      <section>
        <h2 className={styles.orderHeading}>Ассортимент магазина</h2>
        <div className={styles.panel}>
          <button>
            <img src="/icons/actionIcons/add.svg" alt="add" />
          </button>
          <div className={styles.theadBlock}>
            <div className={styles.thead}>
              <h4>Артикул</h4>
              <h4>Название</h4>
              <h4>Категория</h4>
              <h4>Цена</h4>
              <h4>Фото</h4>
            </div>
            <div className={styles.thead}>
              <form action="#">
                <input
                  type="number"
                  name=""
                  id="sku"
                  placeholder="123..."
                  min="0"
                />

                <input
                  type="text"
                  name=""
                  id="title"
                  placeholder="клавиатура"
                />

                <select name="" id="category">
                  <option value="">клавиатура</option>
                  <option value="">клавиша</option>
                  <option value="">клавиши</option>
                </select>

                <input
                  type="number"
                  name=""
                  id="price"
                  placeholder="1200"
                  min="0"
                />

                <input
                  type="text"
                  name=""
                  id="image"
                  placeholder="/images/1.jpg"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
