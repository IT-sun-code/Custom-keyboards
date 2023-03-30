import React from "react";
import styles from "./search.module.css";

const Search = ({ onSearch, search }) => {
  const handleSearch = (event) => {
    const value = event.target.value;
    onSearch(value);
    // console.log(value);
  };

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Поиск..."
      name="search"
      autoFocus
      value={search}
      onChange={handleSearch}
    />
  );
};

export default Search;
