import React from "react";
import styles from "./authorization.module.css";
import Modal from "../../modal";
import useModal from "../../../utils/hooks/useModal";

const Authorization = () => {
  const { modalOpen, modalVariety, handleModalOpen, handleModalClose } =
    useModal();
  const isAuthenticated = false;

  return (
    <>
      <div className={styles.authorization}>
        {isAuthenticated ? (
          <button
            onClick={() => handleModalOpen("logOut")}
            className={styles.logOut}
          >
            Выйти
          </button>
        ) : (
          <>
            <button
              onClick={() => handleModalOpen("")}
              className={styles.signUp}
            >
              Зарегистрироваться
            </button>
            <span> / </span>
            <button
              onClick={() => handleModalOpen("signIn")}
              className={styles.signIn}
            >
              Войти
            </button>
          </>
        )}
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
