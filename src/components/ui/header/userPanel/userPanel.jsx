import React from "react";
import styles from "./userPanel.module.css";

function UserPanel() {
  return (
    <div className={styles.panel}>
      <img
        className={styles.heart}
        src="/icons/actionIcons/heart.svg"
        alt="heart"
      />
      <img
        className={styles.basket}
        src="/icons/actionIcons/basket.svg"
        alt="basket"
      />
      <img
        className={styles.user}
        src="/icons/actionIcons/user.svg"
        alt="user"
      />
    </div>
  );
}

export default UserPanel;
