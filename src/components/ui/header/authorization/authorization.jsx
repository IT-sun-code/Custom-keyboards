import React, { useState } from "react";
import styles from "./authorization.module.css";
import Modal from "../../modal";

const Authorization = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVariety, setModalVariety] = useState("");

  const handleModalOpen = (variety) => {
    setModalVariety(variety);
    setModalOpen(true);
    console.log("open");
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={styles.authorization}>
        <button onClick={() => handleModalOpen("")} className={styles.signUp}>
          Зарегистрироваться
        </button>
        <span> / </span>
        <button
          onClick={() => handleModalOpen("signIn")}
          className={styles.signIn}
        >
          Войти
        </button>
      </div>
      {modalOpen && (
        <Modal
          variety={modalVariety}
          isOpen={modalOpen}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default Authorization;
