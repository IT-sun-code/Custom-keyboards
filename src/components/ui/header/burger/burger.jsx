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
        <div className={styles.menu}>
          <div className={styles.item}>ГЛАВНАЯ</div>
          <div className={styles.item}>КАТАЛОГ</div>
          <div className={styles.item}>КОНСТРУКТОР КЛАВИАТУРЫ</div>
          <div className={styles.item}>О НАС</div>
          <div className={styles.item}>КОНТАКТЫ</div>
        </div>
      )}
    </div>
  );
};

export default Burger;
