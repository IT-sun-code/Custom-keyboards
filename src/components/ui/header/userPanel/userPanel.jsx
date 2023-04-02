import React from "react";
import styles from "./userPanel.module.css";

function UserPanel() {
  return (
    <nav className={styles.panel}>
      <button className={styles.heart}>
        <img src="/icons/actionIcons/heart.svg" alt="heart" />
      </button>
      <button className={styles.basket}>
        <img src="/icons/actionIcons/basket.svg" alt="basket" />
      </button>
      <button className={styles.user}>
        <img src="/icons/actionIcons/user.svg" alt="user" />
      </button>
    </nav>
  );
}

export default UserPanel;
