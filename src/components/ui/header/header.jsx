import React from "react";
import styles from "./header.module.css";
import Burger from "./burger";
import Logo from "./logo";
import Search from "./search";
import UserPanel from "./userPanel";
import Authorization from "./authorization";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ onSearch, search }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleClick(path) {
    if (pathname === path) {
      return;
    }
    navigate(path);
  }

  return (
    <header className={styles.header}>
      <Burger />
      <button onClick={() => handleClick("/")}>
        <Logo />
      </button>
      {onSearch && <Search onSearch={onSearch} search={search} />}
      <UserPanel />
      <Authorization />
    </header>
  );
};

export default Header;
