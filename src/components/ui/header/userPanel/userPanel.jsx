import React from "react";
import styles from "./userPanel.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "../../modal";
import useModal from "../../../utils/hooks/useModal";
import { useAuth } from "../../../utils/hooks/useAuth";

function UserPanel() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { modalOpen, modalVariety, handleModalOpen, handleModalClose } =
    useModal();

  const handleClick = (variety, url) => {
    if (currentUser) {
      navigate(url);
    } else {
      handleModalOpen(variety);
    }
  };

  return (
    <nav className={styles.panel}>
      <button
        className={styles.heart}
        onClick={() => handleClick("signIn", "/favorites")}
      >
        <img src="/icons/actionIcons/heart.svg" alt="heart" />
      </button>
      <button
        className={styles.basket}
        onClick={() => handleClick("signIn", "/basket")}
      >
        <img src="/icons/actionIcons/basket.svg" alt="basket" />
      </button>
      <button
        className={styles.user}
        onClick={() => handleClick("signIn", "/user")}
      >
        <img src="/icons/actionIcons/user.svg" alt="user" />
      </button>
      {modalOpen && (
        <Modal
          variety={modalVariety}
          isOpen={modalOpen}
          onClose={handleModalClose}
        />
      )}
    </nav>
  );
}

export default UserPanel;
