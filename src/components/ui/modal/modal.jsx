import React, { useState, useEffect } from "react";
import styles from "./modal.module.css";
import Portal from "../../utils/portal";
import {
  SuccessModalContent,
  OrderModalContent,
  LogOutModalContent,
  AuthModalContent,
  EditCardContent,
  EditCardSlidesContent,
} from "./modalContent";

const Modal = ({ variety, isOpen, onClose, orderData, editData }) => {
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

  const [content, setContent] = useState(
    variety === "order" ? (
      <OrderModalContent
        orderData={orderData}
        onConfirm={() => {
          setContent(<SuccessModalContent />),
            orderData.handleOrdersClick(orderData.basketCards);
        }}
      />
    ) : variety === "logOut" ? (
      <LogOutModalContent onClose={onClose} />
    ) : variety === "signIn" || variety === "signUp" ? (
      <AuthModalContent variety={variety} onClose={onClose} />
    ) : variety === "editCard" ? (
      <EditCardContent editData={editData} />
    ) : variety === "editSlides" ? (
      <EditCardSlidesContent editData={editData} />
    ) : null
  );

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
            <div className={styles.content}>{content}</div>
          </div>
        </div>
      </div>
      )
    </Portal>
  );
};

export default Modal;
