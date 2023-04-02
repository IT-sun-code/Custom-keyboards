import React, { useState, useEffect } from "react";
import styles from "./burger.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToFooter, scrollToCatalog } from "../../../utils/scrollers";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleClick(path) {
    if (pathname === path) {
      return;
    }
    navigate(path);
  }

  console.log("Burger component rendered");

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
          <div className={styles.item} onClick={() => handleClick("/")}>
            Главная
          </div>
          <div
            className={styles.item}
            onClick={() => scrollToCatalog(pathname, navigate)}
          >
            Каталог
          </div>
          <div
            className={styles.item}
            onClick={() => handleClick("/constructor")}
          >
            Конструктор клавиатуры
          </div>
          <div className={styles.item} onClick={() => handleClick("/aboutUs")}>
            О нас
          </div>
          <div className={styles.item} onClick={scrollToFooter}>
            Контакты
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Burger);
