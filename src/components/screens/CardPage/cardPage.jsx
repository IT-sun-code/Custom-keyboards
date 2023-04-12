import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardItem from "./cardItem";
import styles from "./cardPage.module.css";
import CardsSlidesService from "../../services/cardsSlidesService";
import { useCards } from "../../utils/hooks/useCards";

const CardPage = () => {
  const { id } = useParams();
  const { cards } = useCards();
  const [card, setCard] = useState({});
  const [error, setError] = useState(null);
  const [slides, setSlides] = useState([]);
  const [filteredSlides, setfilteredSlides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || !cards) return;
    const fetchData = async () => {
      try {
        setCard(cards[id]);
      } catch (error) {
        errorCatcher(error);
      }
    };
    fetchData();
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

  const handlePrevClick = () => {
    if (card.id - 1 < 0) {
      navigate(`/cards/${cards.length - 1}`);
    } else {
      navigate(`/cards/${card.id - 1}`);
    }
  };

  const handleNextClick = () => {
    if (card.id + 1 === cards.length) {
      navigate(`/cards/0`);
    } else {
      navigate(`/cards/${card.id + 1}`);
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
