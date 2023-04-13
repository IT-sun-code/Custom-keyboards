import React, { useState, useEffect } from "react";
import styles from "./modal.module.css";
import Button from "../button";
import Portal from "../../utils/portal";
import LoginForm from "../forms/loginForm";
import RegisterForm from "../forms/registerForm/registerForm";
import {
  SuccessModalContent,
  OrderModalContent,
  LogOutModalContent,
  SignInModalContent,
  RegisterModalContent,
} from "./modalContent";

const Modal = ({ variety, isOpen, onClose, children }) => {
  const [newVariety, setNewVariety] = useState(variety);
  const handleClick = (variant) => {
    setNewVariety(variant === "signIn" ? "" : "signIn");
  };

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

  return (
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
                <SuccessModalContent />
              ) : variety === "order" ? (
                <OrderModalContent />
              ) : variety === "logOut" ? (
                <LogOutModalContent />
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
  );
};

export default Modal;
