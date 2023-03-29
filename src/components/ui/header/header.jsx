import React from "react";
import styles from "./header.module.css";
import Burger from "./burger";
import Logo from "./logo";
import Search from "./search";
import UserPanel from "./userPanel";
import Authorization from "./authorization";

const Header = ({ onSearch, selectedCategory }) => {
  return (
    <header className={styles.header}>
      <Burger />
      <Logo />
      <Search onSearch={onSearch} selectedCategory={selectedCategory} />
      <UserPanel />
      <Authorization />
    </header>
  );
};

export default Header;
