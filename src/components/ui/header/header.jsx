import React, { useState } from "react";
import styles from "./header.module.css";
import Burger from "./burger";
import Logo from "./logo";
import UserPanel from "./userPanel";
import Authorization from "./authorization";
import { useNavigate, useLocation } from "react-router-dom";
// import Modal from "../modal";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleClick(path) {
    if (pathname === path) {
      return;
    }
    navigate(path);
    console.log("heared");
  }

  // Модальное окно______________________________________________________________
  // const [modalOpen, setModalOpen] = useState(false);

  // const handleModalOpen = () => {
  //   setModalOpen(true);
  //   console.log("open");
  // };

  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };

  return (
    <>
      <header className={styles.header}>
        <Burger />
        <button onClick={() => handleClick("/")}>
          <Logo />
        </button>
        <UserPanel />
        <Authorization />
      </header>

      {/* Модальное окно______________________________________________________________ */}
      {/* <div>
        <button onClick={handleModalOpen}>Открыть модальное окно</button>
        <Modal variety="signIn" isOpen={modalOpen} onClose={handleModalClose} />
      </div> */}
    </>
  );
};

export default Header;

{
  /* <Modal variety="" isOpen={modalOpen} onClose={handleModalClose}> */
}
{
  /* <p className={styles.modalText}>
            Заказ успешно оформлен!
            <br /> Информацию о заказе вы можете посмотреть в личном кабинете.
          </p> */
}
{
  /* </Modal> */
}
