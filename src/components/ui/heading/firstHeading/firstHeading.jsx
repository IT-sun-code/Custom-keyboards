import React from "react";
import styles from "./firstHeading.module.css";
import PropTypes from "prop-types";

const FirstHeading = ({ children }) => {
  return <h1 className={styles.firstHeading}>{children}</h1>;
};

FirstHeading.propTypes = {
  children: PropTypes.string,
};
export default FirstHeading;
