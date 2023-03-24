import React from "react";
import styles from "./authorization.module.css";

const Authorization = () => {
  return (
    <>
      <div className={styles.authorization}>
        <span className={styles.signUp}>Зарегистрироваться</span>
        <span> / </span>
        <span className={styles.signIn}>Войти</span>
      </div>
    </>
  );
};

export default Authorization;
