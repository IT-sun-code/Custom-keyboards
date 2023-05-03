import React from "react";
import styles from "./secondHeading.module.css";
import PropTypes from "prop-types";

const SecondHeading = ({ children }) => {
  return <h2 className={styles.secondHeading}>{children}</h2>;
};

SecondHeading.propTypes = {
  children: PropTypes.string,
};
export default SecondHeading;
