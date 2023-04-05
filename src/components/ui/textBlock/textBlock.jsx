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
      <h3 className={styles.titleAuth}>Имя</h3>
      <p className={styles.subtitleAuth}>
        <b>Логин:</b> логин при регистрации
      </p>
      <p className={styles.subtitleAuth}>
        <b>Телефон:</b> +7 000 000 00 00
      </p>
      <p className={styles.subtitleAuth}>
        <b>Почта:</b> keyboards2023@yandex.ru
      </p>
      <p className={styles.subtitleAuth}>
        <b>Адрес:</b> г. Санкт-Петербург, ул. Гороховая, д.21, кв.1
      </p>
    </div>
  );
};

export default TextBlock;
