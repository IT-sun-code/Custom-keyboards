import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardItem from "./cardItem";
import styles from "./cardPage.module.css";
import CardsSlidesService from "../../services/cardsSlidesService";
import { useCards } from "../../utils/hooks/useCards";
import CardsService from "../../services/cardsService";

const CardPage = () => {
  const { id } = useParams();
  const { cards } = useCards();
  const [card, setCard] = useState({});
  const [error, setError] = useState(null);
  const [slides, setSlides] = useState([]);
  const [filteredSlides, setfilteredSlides] = useState([]);

  const navigate = useNavigate();
  const cardIndex = cards.findIndex((item) => item.id === card.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getCard = async () => {
      try {
        const cardData = await CardsService.getById(id);
        setCard(cardData);
      } catch (error) {
        errorCatcher(error);
      }
    };
    getCard();
  }, [id, cards]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { content } = await CardsSlidesService.getAll();
        setSlides(content);
      } catch (error) {
        errorCatcher(error);
      }
    };
    fetchData();
  }, [card]);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    const filteredSlides = slides.filter((slide) => slide.cardId === card.id);
    setfilteredSlides(filteredSlides);
  }, [slides, card.id]);

  const handleNextClick = () => {
    if (cardIndex + 1 === cards.length) {
      navigate(`/cards/${cards[0].id}`);
    } else {
      const nextIndex = cardIndex + 1;
      navigate(`/cards/${cards[nextIndex].id}`);
    }
  };

  const handlePrevClick = () => {
    if (cardIndex - 1 === -1) {
      navigate(`/cards/${cards[cards.length - 1].id}`);
    } else {
      const prevIndex = cardIndex - 1;
      navigate(`/cards/${cards[prevIndex].id}`);
    }
  };

  return (
    <>
      <div className={styles.arrows}>
        <button onClick={handlePrevClick}>
          <img
            className={styles.left}
            src="/icons/actionIcons/arrowSort.svg"
            alt="arrowSlideLeft"
          />
        </button>
        <button onClick={handleNextClick}>
          <img
            className={styles.right}
            src="/icons/actionIcons/arrowSort.svg"
            alt="arrowSlideRight"
          />
        </button>
      </div>
      <CardItem slides={filteredSlides} card={card} />
    </>
  );
};

export default CardPage;
