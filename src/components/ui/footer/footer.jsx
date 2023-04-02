import React from "react";
import Line from "../line";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <Line />

      <div className={styles.messengers}>
        <p>Остались вопросы?</p>
        <h2>Напишите нам в любом удобном для Вас мессенджере</h2>
      </div>

      <div className={styles.icons}>
        <a
          href="https://discordapp.com/users/695697540732944475/"
          target="_blank"
        >
          <img src="/icons/socialIcons/discord.svg" alt="discord" />
        </a>
        <a href="https://t.me/ITo_sun" target="_blank">
          <img src="/icons/socialIcons/telegram.svg" alt="telegram" />
        </a>
        <a href="https://vk.com/id228598713" target="_blank">
          <img src="/icons/socialIcons/vk.svg" alt="vk" />
        </a>
        <a href="https://wa.me/79650156925" target="_blank">
          <img src="/icons/socialIcons/whatsApp.svg" alt="whatsApp" />
        </a>
      </div>

      <Line />

      <div className={styles.messengers}>
        <h2>Или свяжитесь по телефону / почте</h2>
        <div className={styles.contact}>
          <p>Тел: +7 000 000 00 00</p>
          <p>Email: keyboards2023@yandex.ru</p>
        </div>
      </div>

      <Line />

      <div className={styles.copyright}>© 2023 created by Anastasia K.</div>
    </footer>
  );
};

export default Footer;
