import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../ui/loading";
import { CardsService } from "../../services/cardsService";
import CardItem from "./cardItem";
import styles from "./cardPage.module.css";
import CardsSlidesService from "../../services/cardsSlidesService";

const CardPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
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
    setIsLoading(false);
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
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default CardPage;
