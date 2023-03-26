import React from "react";
import styles from "./button.module.css";
import cn from "classnames";

const Button = ({ children, appearance }) => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.buttonCtvBlue]: appearance === "ctvBlue",
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
