import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Card from "./card";
import Filters from "./filters";
import styles from "../home/home.module.css";
import Footer from "../../ui/footer";
import Loading from "../../loading";
import Header from "../../ui/header";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Heading from "../../ui/heading";
import KeyboardMainSlide from "../../ui/keyboardMainSlide";
import KeyboardSlider from "../../ui/keyboardSlider";
import Button from "../../ui/button";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/cards");
      setCards(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const [sortOrder, setSortOrder] = useState(null);

  const sortedCards = useMemo(() => {
    if (sortOrder === "asc") {
      return [...cards].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      return [...cards].sort((a, b) => b.price - a.price);
    } else {
      return cards;
    }
  }, [cards, sortOrder]);

  const filteredCards = useMemo(() => {
    if (selectedCategory === "") {
      return sortedCards;
    } else {
      return sortedCards.filter((card) => card.category === selectedCategory);
    }
  }, [selectedCategory, sortedCards]);

  return (
    <>
      <Header />

      <KeyboardMainSlide />

      <Heading>
        <FirstHeading>КАСТОМНАЯ КЛАВИАТУРА</FirstHeading>
        <SecondHeading>Делаем вашу работу комфортнее!</SecondHeading>
        <Button appearance="ctvBlue">Заказать</Button>
      </Heading>

      <Filters
        setSortOrder={setSortOrder}
        setSelectedCategory={setSelectedCategory}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          {filteredCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}

      <KeyboardSlider />

      <Footer />
    </>
  );
};

export default Home;
