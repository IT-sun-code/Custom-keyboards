import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../ui/loading";
import { CardsService } from "../../services/cardsService";
import Header from "../../ui/header";
import Footer from "../../ui/footer";
import CardItem from "./cardItem";
import axios from "axios";
import styles from "./cardPage.module.css";

const CardPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [slides, setSlides] = useState([]);
  const [filteredSlides, setfilteredSlides] = useState([]);
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await CardsService.getAll();
      setCards(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const data = await CardsService.getById(id);
      setCard(data);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/cardSlides");
      setSlides(response.data);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const filteredSlides = slides.filter((slide) => slide.cardId === card.id);
    setfilteredSlides(filteredSlides);
    setIsLoading(false);
  }, [slides, card.id]);

  const handlePrevClick = () => {
    if (card.id - 1 === 0) {
      navigate(`/cards/${cards.length}`);
    } else {
      navigate(`/cards/${card.id - 1}`);
    }
  };

  const handleNextClick = () => {
    if (card.id + 1 === cards.length + 1) {
      navigate(`/cards/1`);
    } else {
      navigate(`/cards/${card.id + 1}`);
    }
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.arrows}>
            <button onClick={handlePrevClick}>
              <img
                className={styles.left}
                src="/icons/actionIcons/arrowSortAsc.svg"
                alt="arrowSlideLeft"
              />
            </button>
            <button onClick={handleNextClick}>
              <img
                className={styles.right}
                src="/icons/actionIcons/arrowSortAsc.svg"
                alt="arrowSlideRight"
              />
            </button>
          </div>
          <CardItem slides={filteredSlides} card={card} />
        </>
      )}
      <Footer />
    </>
  );
};

export default CardPage;
