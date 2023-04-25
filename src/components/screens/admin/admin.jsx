import React from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Line from "../../ui/line";
import TextBlock from "../../ui/textBlock";
import styles from "./admin.module.css";
import { useAuth } from "../../utils/hooks/useAuth";
import AdminPanel from "../../ui/adminPanel";

const Admin = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Heading>
        <FirstHeading>АДМИНИСТРАТОР</FirstHeading>
        <SecondHeading>Добро пожаловать!</SecondHeading>
      </Heading>
      <section className={styles.userData}>
        <img src="/images/avatars/avatar3.svg" alt="avatar" />
        <TextBlock authData={currentUser} />
      </section>
      <Line />
      <AdminPanel />
    </>
  );
};

export default Admin;
