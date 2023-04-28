import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardsService from "../../services/cardsService";
import Loading from "../../ui/loading";

const CardsContext = React.createContext();
export const useCards = () => {
  return useContext(CardsContext);
};

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUpdatedCard, setIsUpdatedCard] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      try {
        const { content } = await CardsService.getAll();
        setCards(content);
        setIsLoading(false);
      } catch (error) {
        errorCatcher(error);
      }
    };
    getCards();
  }, [isUpdatedCard]);

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

  async function createCard(data) {
    try {
      const { content } = await CardsService.create(data);
      setCards((prevCards) => [content, ...prevCards]);
      console.log(content);
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function deleteCard(id) {
    try {
      const { content } = await CardsService.deleteCard(id);
      if (content === null) {
        setCards((prevState) => prevState.filter((c) => c.id !== id));
      }
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function updateCard(id, updatedData) {
    try {
      const updatedCard = await CardsService.updateCard(id, updatedData);
      setCards((prevCards) =>
        prevCards.map((card) => (card.id === id ? updatedCard : card))
      );
      setIsUpdatedCard(!isUpdatedCard);
      console.log(updatedCard);
    } catch (error) {
      errorCatcher(error);
    }
  }

  return (
    <CardsContext.Provider
      value={{ cards, createCard, deleteCard, updateCard }}
    >
      {!isLoading ? children : <Loading />}
    </CardsContext.Provider>
  );
};

CardsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CardsProvider;
