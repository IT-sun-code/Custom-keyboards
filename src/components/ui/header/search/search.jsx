import React from "react";
import styles from "./search.module.css";

const Search = () => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Поиск..."
      autoFocus
    />
  );
};

export default Search;
