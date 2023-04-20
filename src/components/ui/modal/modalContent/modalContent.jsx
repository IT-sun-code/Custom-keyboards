import React, { useState } from "react";
import LoginForm from "../../forms/loginForm";
import RegisterForm from "../../forms/registerForm";
import Button from "../../button";
import styles from "./modalContent.module.css";
import { useAuth } from "../../../utils/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const SuccessModalContent = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className={styles.heading}>Поздравляем!</h2>
      <h3>Ваш заказ успешно оформлен!</h3>
      <img
        className={styles.logo}
        src="/images/logoInForm/logoInForm.jpg"
        alt="logo"
      />
      <p className={styles.warning}>
        <b>ВНИМАНИЕ!</b> Доставка осуществляется в течение 30-и дней с момента
        заказа
      </p>
      <Button
        appearance="ctvBlue"
        onClick={() => {
          navigate("/user");
        }}
      >
        Смотреть
      </Button>
    </>
  );
};

export const OrderModalContent = ({ orderData, onConfirm }) => {
  return (
    <>
      <h2 className={styles.heading}>Оформление заказа</h2>
      <table>
        <thead>
          <tr>
            <th>Описание заказа</th>
            <th>Данные о заказе</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Количество товаров:</td>
            <td>{`${orderData.totalQuantity} шт.`}</td>
          </tr>
          <tr>
            <td>Сумма к оплате:</td>
            <td>{`${orderData.totalPrice} руб.`}</td>
          </tr>
          <tr>
            <td>Адрес доставки:</td>
            <td>{orderData.address}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Оплата:</td>
            <td>Наличные или карта</td>
          </tr>
        </tfoot>
      </table>
      <p className={styles.warning}>
        <b className={styles.warning}>ВНИМАНИЕ! Оплата при получении!</b>
      </p>
      <Button appearance="ctvBlue" onClick={onConfirm}>
        Подтвердить
      </Button>
    </>
  );
};

export const LogOutModalContent = ({ onClose }) => {
  const { logOut } = useAuth();
  return (
    <>
      <h2 className={styles.heading}>Выход из аккаунта</h2>
      <p className={styles.message}>Вы точно хотите выйти из аккаунта?</p>
      <Button
        appearance="ctvBlue"
        onClick={() => {
          onClose();
          logOut();
        }}
      >
        Выйти
      </Button>
    </>
  );
};

export const AuthModalContent = ({ variety, onClose }) => {
  const [newVariety, setNewVariety] = useState(variety);
  const handleClick = (variant) => {
    setNewVariety(variant === "signIn" ? "signUp" : "signIn");
  };

  return newVariety === "signIn" ? (
    <>
      <h2 className={styles.heading}>Войдите в свой аккаунт</h2>
      <LoginForm onClose={onClose} />
      <p className={styles.warning}>
        <b>ВНИМАНИЕ!</b> Доставка осуществляется в течение 30-и дней с момента
        заказа
      </p>
      <button
        className={styles.btnContainer}
        onClick={() => handleClick("signIn")}
      >
        Впервые на нашем сайте? Зарегистрируйтесь
      </button>
    </>
  ) : (
    <>
      <h2 className={styles.heading}>Зарегистрируйтесь на сайте</h2>
      <RegisterForm onClose={onClose} />
      <p className={styles.warning}>
        <b>ВНИМАНИЕ!</b> Доставка осуществляется в течение 30-и дней с момента
        заказа
      </p>
      <button
        className={styles.btnContainer}
        onClick={() => handleClick("signUp")}
      >
        Уже есть аккаунт? Войдите
      </button>
    </>
  );
};
