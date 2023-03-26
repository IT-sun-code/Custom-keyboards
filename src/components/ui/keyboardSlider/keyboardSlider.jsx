import React from "react";
import styles from "./keyboardSlider.module.css";
import Line from "../line";

const KeyboardSlider = () => {
  return (
    <>
      <Line />
      <div className={styles.block}>
        <div className={styles.text}>
          <p className={styles.questions}>Не нашли, что искали?</p>
          <h2>Создайте свою уникальную клавиатуру в нашем конструкторе</h2>
        </div>
      </div>
    </>
  );
};

export default KeyboardSlider;
