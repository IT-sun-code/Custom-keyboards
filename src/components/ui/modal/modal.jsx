import React, { useEffect } from "react";
import styles from "./modal.module.css";
import Portal from "../../utils/portal";
import {
  SuccessModalContent,
  OrderModalContent,
  LogOutModalContent,
  AuthModalContent,
} from "./modalContent";

const Modal = ({ variety, isOpen, onClose, children }) => {
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
                <LogOutModalContent onClose={onClose} />
              ) : variety === "signIn" || variety === "signUp" ? (
                <AuthModalContent variety={variety} onClose={onClose} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      )
    </Portal>
  );
};

export default Modal;
