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
import AboutUs from "../aboutUs";
import Constructor from "../constructor";
import Page404 from "../page404";
import Modal from "../../ui/modal";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

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
    if (selectedCategory !== "") {
      return sortedCards.filter((card) => card.category === selectedCategory);
    }
    if (search !== "") {
      return sortedCards.filter(
        (card) =>
          card.title.toLowerCase().indexOf(search.toLowerCase().trim()) !== -1
      );
    }
    return sortedCards;
  }, [sortedCards, selectedCategory, search]);

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
      <div>
        <button onClick={handleModalOpen}>Открыть модальное окно</button>
        <Modal variety="" isOpen={modalOpen} onClose={handleModalClose}>
          <p className={styles.modalText}>
            Заказ успешно оформлен!
            <br /> Информацию о заказе вы можете посмотреть в личном кабинете.
          </p>
        </Modal>
      </div>
      {/* // Модальное окно______________________________________________________________ */}
      {/* <AboutUs /> */}
      {/* <Constructor /> */}
      {/* <Page404 /> */}

      {/* <Header /> */}

      <Header onSearch={handleSearch} search={search} />

      <KeyboardMainSlide />
      <Heading>
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
