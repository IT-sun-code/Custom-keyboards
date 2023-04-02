import React from "react";
import styles from "./heading.module.css";
import cn from "classnames";

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

export default Heading;
