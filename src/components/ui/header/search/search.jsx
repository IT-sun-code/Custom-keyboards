import React from "react";
import styles from "./search.module.css";
import PropTypes from "prop-types";

const Search = ({ onSearch, search }) => {
  const handleSearch = (event) => {
    const value = event.target.value;
    onSearch(value);
  };
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Поиск..."
      name="search"
      value={search}
      onChange={handleSearch}
    />
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
  search: PropTypes.string,
};
export default Search;
