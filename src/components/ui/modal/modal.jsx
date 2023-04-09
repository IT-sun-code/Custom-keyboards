import React, { useState, useEffect } from "react";
import styles from "./modal.module.css";
import Button from "../button";
import Portal from "../../utils/portal";
import LoginForm from "../forms/loginForm";
import RegisterForm from "../forms/registerForm/registerForm";

const Modal = ({ variety, isOpen, onClose, children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [newVariety, setNewVariety] = useState(variety);

  const handleClick = (variant) => {
    console.log("clickkkkk");
    setNewVariety(variant === "signIn" ? "" : "signIn");
  };

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return isMounted ? (
    <Portal>
      (
      <div
        className={isOpen ? styles.overlayOpen : styles.overlayClosed}
        onClick={onClose}
      >
        <div
          className={isOpen ? styles.modalOpen : styles.modalClosed}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          <div className={styles.containerContent}>
            <div className={styles.content}>
              {variety === "success" ? (
                <>
                  <h2 className={styles.heading}>Поздравляем!</h2>
                  {children}
                  <img
                    className={styles.logo}
                    src="/images/logoInForm/logoInForm.jpg"
                    alt="logo"
                  />
                  <p className={styles.warning}>
                    <b>ВНИМАНИЕ!</b> Доставка осуществляется в течение 30-и дней
                    с момента заказа
                  </p>
                  <Button appearance="ctvBlue">Смотреть</Button>
                </>
              ) : variety === "order" ? (
                <>
                  <h2 className={styles.heading}>Оформление заказа</h2>
                  <p className={styles.warning}>
                    <b className={styles.warning}>
                      ВНИМАНИЕ! Оплата при получении!
                    </b>
                  </p>
                  <Button appearance="ctvBlue">Готово</Button>
                </>
              ) : newVariety === "signIn" ? (
                <>
                  <h2 className={styles.heading}>Войдите в свой аккаунт</h2>
                  <LoginForm />
                  <p className={styles.warning}>
                    <b>ВНИМАНИЕ!</b> Доставка осуществляется в течение 30-и дней
                    с момента заказа
                  </p>
                  <button
                    className={styles.btnContainer}
                    onClick={() => handleClick(newVariety)}
                  >
                    Впервые на нашем сайте? Зарегистрируйтесь
                  </button>
                </>
              ) : (
                <>
                  <h2 className={styles.heading}>Зарегистрируйтесь на сайте</h2>
                  <RegisterForm />
                  <p className={styles.warning}>
                    <b>ВНИМАНИЕ!</b> Доставка осуществляется в течение 30-и дней
                    с момента заказа
                  </p>
                  <button
                    className={styles.btnContainer}
                    onClick={() => handleClick("")}
                  >
                    Уже есть аккаунт? Войдите
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      )
    </Portal>
  ) : null;
};

export default Modal;
