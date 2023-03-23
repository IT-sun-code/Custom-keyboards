import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Card from "./card/card";
import styles from "../home/home.module.css";
import Footer from "../../ui/footer/footer";
import Filters from "./filters/filters";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/cards");
      setCards(response.data);
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

  return (
    <>
      <Filters setSortOrder={setSortOrder} />

      <div className={styles.container}>
        {sortedCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;
