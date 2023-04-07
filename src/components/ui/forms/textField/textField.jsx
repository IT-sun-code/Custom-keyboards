import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./textField.module.css";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return `${styles.input} ${error ? styles.invalid : styles.valid}`;
  };

  return (
    <div className={styles.textField}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div>
        <input
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
        />
        {error && <div className={styles.errorMessage}>{error}</div>}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;
