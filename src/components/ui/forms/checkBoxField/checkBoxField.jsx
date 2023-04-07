import React from "react";
import PropTypes from "prop-types";
import styles from "./checkBoxField.module.css";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };

  return (
    <div className={styles.checkbox}>
      <input
        className={styles.square}
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
        checked={value}
      />
      <label className={styles.label} htmlFor={name}>
        {children}
      </label>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
  error: PropTypes.string,
};

export default CheckBoxField;
