import React, { useState, useEffect } from "react";
import styles from "./search.module.css";

const Search = ({ onSearch, selectedCategory }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  useEffect(() => {
    if (selectedCategory !== "") {
      setSearchQuery("");
    }
  }, [selectedCategory]);

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Поиск..."
      name="search"
      autoFocus
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};

export default Search;
