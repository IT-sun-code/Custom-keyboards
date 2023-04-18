import React from "react";
import styles from "./textBlock.module.css";

const TextBlock = ({ title, subtitle, description, authData }) => {
  return !authData ? (
    <div className={styles.textBlock}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <p>{description}</p>
    </div>
  ) : (
    <div className={styles.textBlock}>
      <h3 className={styles.titleAuth}>{authData.userName}</h3>
      <p className={styles.subtitleAuth}>
        <b>Статус:</b> {authData.orders ? "продвинутый" : "новичок"}
      </p>
      <p className={styles.subtitleAuth}>
        <b>Телефон:</b> {authData.phone}
      </p>
      <p className={styles.subtitleAuth}>
        <b>Почта:</b> {authData.email}
      </p>
      <p className={styles.subtitleAuth}>
        <b>Адрес:</b> {authData.address}
      </p>
    </div>
  );
};

export default TextBlock;
