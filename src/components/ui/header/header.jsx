import React from "react";
import styles from "./header.module.css";
import Burger from "./burger";
import Logo from "./logo";
import Search from "./search";
import UserPanel from "./userPanel";
import Authorization from "./authorization";
import { Link } from "react-router-dom";

const Header = ({ onSearch, search }) => {
  return (
    <header className={styles.header}>
      <Burger />
      <Link to={"/"}>
        <Logo />
      </Link>
      <Search onSearch={onSearch} search={search} />
      <UserPanel />
      <Authorization />
    </header>
  );
};

export default Header;
