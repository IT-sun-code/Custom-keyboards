import { useState } from "react";
import styles from "./burger.module.css";
import { Link } from "react-router-dom";

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
          <Link to={"/"}>
            <div className={styles.item}>Главная</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.item}>Каталог</div>
          </Link>
          <Link to={"/constructor"}>
            <div className={styles.item}>Конструктор клавиатуры</div>
          </Link>
          <Link to={"/aboutUs"}>
            <div className={styles.item}>О нас</div>
          </Link>
          <Link to={"/footer"}>
            <div className={styles.item}>Контакты</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Burger;
