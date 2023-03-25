import { useState } from "react";
import styles from "./burger.module.css";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.burgerMenu}>
      <div
        className={`${styles.icon} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      {isOpen && (
        <div className={`${styles.menu}`}>
          <div className={styles.item}>Главная</div>
          <div className={styles.item}>Каталог</div>
          <div className={styles.item}>Конструктор клавиатуры</div>
          <div className={styles.item}>О нас</div>
          <div className={styles.item}>Контакты</div>
        </div>
      )}
    </div>
  );
};

export default Burger;
