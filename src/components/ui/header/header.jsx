import React from "react";
import styles from "../header/header.module.css";
import Burger from "./burger/burger";
import Logo from "./logo/logo";
import Search from "./search/search";
import UserPanel from "./userPanel/userPanel";
import Authorization from "./authorization/authorization";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Burger />
        <Logo />
        <Search />
        <UserPanel />
        <Authorization />
      </header>
    </>
  );
};

export default Header;
