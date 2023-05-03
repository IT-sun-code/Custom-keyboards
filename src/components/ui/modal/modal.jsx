import React, { useState, useEffect } from "react";
import styles from "./modal.module.css";
import Portal from "../../utils/portal";
import PropTypes from "prop-types";
import {
  SuccessModalContent,
  OrderModalContent,
  LogOutModalContent,
  AuthModalContent,
  EditCardContent,
  EditCardSlidesContent,
  EditUserContent,
  InDelivery,
  DeletionCardConfirm,
  DeletionCardSlidesConfirm,
} from "./modalContent";

const Modal = ({
  variety,
  isOpen,
  onClose,
  orderData,
  editData,
  deleteData,
  onHandleDelivered,
}) => {
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
    ) : variety === "editUser" ? (
      <EditUserContent onClose={onClose} />
    ) : variety === "delivery" ? (
      <InDelivery onClose={onClose} onHandleDelivered={onHandleDelivered} />
    ) : variety === "deleteCard" ? (
      <DeletionCardConfirm deleteData={deleteData} />
    ) : variety === "deleteCardSlides" ? (
      <DeletionCardSlidesConfirm deleteData={deleteData} />
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

Modal.propTypes = {
  variety: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  orderData: PropTypes.object,
  editData: PropTypes.object,
  deleteData: PropTypes.object,
  onHandleDelivered: PropTypes.func,
};
export default Modal;
