import React, { useState, useEffect, useMemo } from "react";
import Card from "./card";
import Filters from "./filters";
import styles from "../home/home.module.css";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Heading from "../../ui/heading";
import KeyboardMainSlide from "../../ui/keyboardMainSlide";
import KeyboardSlider from "../../ui/keyboardSlider";
import Button from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { useCards } from "../../utils/hooks/useCards";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const { cards } = useCards();
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
    let filtered = sortedCards;
    if (selectedCategory !== "") {
      filtered = filtered.filter((card) => card.category === selectedCategory);
    }
    if (search !== "") {
      filtered = filtered.filter(
        (card) =>
          card.title.toLowerCase().indexOf(search.toLowerCase().trim()) !== -1
      );
    }
    return filtered;
  }, [sortedCards, selectedCategory, search]);

  const noResults = search !== "" && filteredCards.length === 0;

  useEffect(() => {
    if (selectedCategory !== "") {
      setSearch("");
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (search !== "") {
      setSelectedCategory("");
    }
  }, [search]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const navigate = useNavigate();
  const handleCardClick = (cardId) => {
    navigate(`/cards/${cardId}`);
  };

  return (
    <>
      <main>
        <KeyboardMainSlide />
        <Heading appearance="mainPage">
          <FirstHeading>КАСТОМНАЯ КЛАВИАТУРА</FirstHeading>
          <SecondHeading>Делаем вашу работу комфортнее!</SecondHeading>
          <Button appearance="ctvBlue">Заказать</Button>
        </Heading>
        <Filters
          setSortOrder={setSortOrder}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          onSearch={handleSearch}
          search={search}
        />
        {noResults ? (
          <SecondHeading>Ничего не найдено...</SecondHeading>
        ) : (
          <section className={styles.container}>
            {filteredCards.map((card) => (
              <Card
                key={card.id}
                card={card}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </section>
        )}
        <KeyboardSlider />
      </main>
    </>
  );
};

export default Home;
