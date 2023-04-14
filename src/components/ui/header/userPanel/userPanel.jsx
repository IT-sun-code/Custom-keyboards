import React from "react";
import styles from "./userPanel.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../../modal";
import useModal from "../../../utils/hooks/useModal";
import { useAuth } from "../../../utils/hooks/useAuth";

function UserPanel() {
  const navigate = useNavigate();
  const location = useLocation();
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

  const getIconPath = (activePath, inactiveIcon, activeIcon) => {
    return location.pathname === activePath ? activeIcon : inactiveIcon;
  };

  return (
    <nav className={styles.panel}>
      <button
        className={styles.heart}
        onClick={() => handleClick("signIn", "/favorites")}
      >
        <img
          src={getIconPath(
            "/favorites",
            "/icons/actionIcons/heart.svg",
            "/icons/actionIcons/heartActive.svg"
          )}
          alt="heart"
        />
      </button>
      <button
        className={styles.basket}
        onClick={() => handleClick("signIn", "/basket")}
      >
        <img
          src={getIconPath(
            "/basket",
            "/icons/actionIcons/basket.svg",
            "/icons/actionIcons/basketActive.svg"
          )}
          alt="basket"
        />
      </button>
      <button
        className={styles.user}
        onClick={() => handleClick("signIn", "/user")}
      >
        <img
          src={getIconPath(
            "/user",
            "/icons/actionIcons/user.svg",
            "/icons/actionIcons/userActive.svg"
          )}
          alt="user"
        />
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
