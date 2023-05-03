import React from "react";
import styles from "./heading.module.css";
import cn from "classnames";
import PropTypes from "prop-types";

const Heading = ({ children, appearance }) => {
  return (
    <section
      className={cn(
        styles.heading,
        {
          [styles.mainPage]: appearance === "mainPage",
        },
        []
      )}
    >
      {children}
    </section>
  );
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  appearance: PropTypes.string,
};
export default Heading;
