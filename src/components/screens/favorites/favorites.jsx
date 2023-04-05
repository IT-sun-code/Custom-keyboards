import React from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Header from "../../ui/header";
import Footer from "../../ui/footer";
import Line from "../../ui/line";
import TextBlock from "../../ui/textBlock";
import Button from "../../ui/button";
// import styles from "./basket.module.css";
import Card from "../home/card";
import styles from "./favorites.module.css";

const Favorites = () => {
  const card = {
    title: "Клавиатура1234567890",
    id: 1,
    price: 3400,
    image: "/images/keycaps/keycapsPreview/keycap1.jpg",
  };

  return (
    <>
      <Header />
      <Heading>
        <FirstHeading>ИЗБРАННОЕ</FirstHeading>
        <SecondHeading>Здесь пока пусто</SecondHeading>
      </Heading>
      <section className={styles.container}>
        <Card card={card} />
      </section>
      <Footer />
    </>
  );
};

export default Favorites;
