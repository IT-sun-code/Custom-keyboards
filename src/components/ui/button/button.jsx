import React from "react";
import styles from "./button.module.css";
import cn from "classnames";

const Button = ({ children, appearance, disabled }) => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.buttonCtvBlue]: appearance === "ctvBlue",
          [styles.buttonCtvBlueOrder]: appearance === "ctvBlueOrder",
          [disabled ? styles.ctvBlueSubmit : styles.disabled]:
            appearance === "ctvBlueSubmit",
          [styles.buttonCtvBlack]: appearance === "ctvBlack",
        },
        []
      )}
    >
      {children}
    </button>
  );
};

export default Button;
