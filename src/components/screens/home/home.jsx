import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Card from "./card/card";
import styles from "../home/home.module.css";
import Footer from "../../ui/footer/footer";
import Filters from "./filters/filters";
import Loading from "../../loader/loading";
import Burger from "../../ui/header/burger/burger";
import Logo from "../../ui/header/logo/logo";
import Authorization from "../../ui/header/authorization/authorization";
import Search from "../../ui/header/search/search";
import UserPanel from "../../ui/header/userPanel/userPanel";
import Header from "../../ui/header/header";

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

      <Footer />
    </>
  );
};

export default Home;
