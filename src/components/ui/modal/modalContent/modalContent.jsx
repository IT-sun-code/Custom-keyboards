import React, { useState } from "react";
import LoginForm from "../../forms/loginForm";
import RegisterForm from "../../forms/registerForm";
import Button from "../../button";
import styles from "./modalContent.module.css";

export const SuccessModalContent = ({ children }) => {
  return (
    <>
      <h2 className={styles.heading}>Поздравляем!</h2>
      {children}
      <img
        className={styles.logo}
        src="/images/logoInForm/logoInForm.jpg"
        alt="logo"
      />
      <p className={styles.warning}>
        <b>ВНИМАНИЕ!</b> Доставка осуществляется в течение 30-и дней с момента
        заказа
      </p>
      <Button appearance="ctvBlue">Смотреть</Button>
    </>
  );
};

export const OrderModalContent = () => {
  return (
    <>
      <h2 className={styles.heading}>Оформление заказа</h2>
      <p className={styles.warning}>
        <b className={styles.warning}>ВНИМАНИЕ! Оплата при получении!</b>
      </p>
      <Button appearance="ctvBlue">Готово</Button>
    </>
  );
};

export const LogOutModalContent = () => {
  return (
    <>
      <h2 className={styles.heading}>Выход из аккаунта</h2>
      <p className={styles.warning}>
        <b className={styles.warning}>Вы точно хотите выйти из аккаунта?</b>
      </p>
      <Button appearance="ctvBlue">Выйти</Button>
    </>
  );
};

export const SignInModalContent = ({ handleClick }) => {
  return (
    <>
      <h2 className={styles.heading}>Войдите в свой аккаунт</h2>
      <LoginForm />
      <p className={styles.warning}>
        <b>ВНИМАНИЕ!</b> Доставка осуществляется в течение 30-и дней с момента
        заказа
      </p>
      <button
        className={styles.btnContainer}
        onClick={() => handleClick("register")}
      >
        Впервые на нашем сайте? Зарегистрируйтесь
      </button>
    </>
  );
};

export const RegisterModalContent = ({ handleClick }) => {
  return (
    <>
      <h2 className={styles.heading}>Зарегистрируйтесь на сайте</h2>
      <RegisterForm />
      <p className={styles.warning}>
        <b>ВНИМАНИЕ!</b> Доставка осуществляется в течение 30-и дней с момента
        заказа
      </p>
      <button
        className={styles.btnContainer}
        onClick={() => handleClick("signIn")}
      >
        Уже есть аккаунт? Войдите
      </button>
    </>
  );
};