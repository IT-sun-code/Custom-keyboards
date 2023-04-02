import React, { useState, useEffect, useMemo } from "react";
import Card from "./card";
import Filters from "./filters";
import styles from "../home/home.module.css";
import Footer from "../../ui/footer";
import Loading from "../../ui/loading";
import Header from "../../ui/header";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Heading from "../../ui/heading";
import KeyboardMainSlide from "../../ui/keyboardMainSlide";
import KeyboardSlider from "../../ui/keyboardSlider";
import Button from "../../ui/button";
import Modal from "../../ui/modal";
import { CardsService } from "../../services/cardsService";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await CardsService.getAll();
      setCards(data);
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

  // Модальное окно______________________________________________________________
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
    console.log("open");
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* <button onClick={scrollToFooter}>СКРОЛЛ</button> */}

      {/* <div>
        <button onClick={handleModalOpen}>Открыть модальное окно</button>
        <Modal variety="" isOpen={modalOpen} onClose={handleModalClose}>
          <p className={styles.modalText}>
            Заказ успешно оформлен!
            <br /> Информацию о заказе вы можете посмотреть в личном кабинете.
          </p>
        </Modal>
      </div> */}
      {/* // Модальное окно______________________________________________________________ */}

      <Header onSearch={handleSearch} search={search} />

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
        />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {noResults ? (
              <SecondHeading>Ничего не найдено...</SecondHeading>
            ) : (
              <section className={styles.container}>
                {filteredCards.map((card) => (
                  <Card key={card.id} card={card} />
                ))}
              </section>
            )}
          </>
        )}
        <KeyboardSlider />
      </main>

      <Footer />
    </>
  );
};

export default Home;
