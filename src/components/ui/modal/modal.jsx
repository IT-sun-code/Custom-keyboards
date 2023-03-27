import React, { useState, useEffect } from "react";
import styles from "./modal.module.css";
import Button from "../button";

const Modal = ({ isOpen, onClose, children }) => {
  const [isMounted, setIsMounted] = useState(false);

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

        <div className={styles.content}>
          <h2 className={styles.heading}>Поздравляем!</h2>
          {children}
          <img
            className={styles.logo}
            src="/images/logoInForm/logoInForm.jpg"
            alt="logo"
          />
          <p className={styles.warning}>
            <b>ВНИМАНИЕ!</b> Доставка осуществляется в течение 30-и дней с
            момента заказа
          </p>
          <Button appearance="ctvBlue">Смотреть</Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
