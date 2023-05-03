import React from "react";
import styles from "./button.module.css";
import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({
  children,
  appearance,
  disabled,
  onClick,
  onClose,
  isDelivered,
}) => {
  return (
    <button
      disabled={isDelivered}
      onClick={onClick ? onClick : onClose}
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

Button.propTypes = {
  children: PropTypes.string,
  appearance: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  isDelivered: PropTypes.bool,
};
export default Button;
