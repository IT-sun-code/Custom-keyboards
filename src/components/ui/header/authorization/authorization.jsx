import React from "react";
import styles from "./authorization.module.css";
import Modal from "../../modal";
import useModal from "../../../utils/hooks/useModal";
import { useAuth } from "../../../utils/hooks/useAuth";

const Authorization = () => {
  const { currentUser } = useAuth();
  const { modalOpen, modalVariety, handleModalOpen, handleModalClose } =
    useModal();

  return (
    <>
      <div className={styles.authorization}>
        {currentUser ? (
          <button
            onClick={() => handleModalOpen("logOut")}
            className={styles.logOut}
          >
            Выйти
          </button>
        ) : (
          <>
            <button
              onClick={() => handleModalOpen("signUp")}
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
