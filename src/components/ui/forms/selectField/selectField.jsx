import React from "react";
import PropTypes from "prop-types";
import styles from "../textField/textField.module.css";

const SelectField = ({ label, value, onChange, options, error, name }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return `${styles.input} ${error ? styles.invalid : styles.valid}`;
  };

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.values(options)
      : options;

  return (
    <div className={styles.textField}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select
        className={getInputClasses()}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {optionsArray.length > 0 &&
          optionsArray.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

SelectField.propTypes = {
  defaultOption: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
};

export default SelectField;
