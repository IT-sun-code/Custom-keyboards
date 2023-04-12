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
  }, []);

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

  return (
    <CardsContext.Provider value={{ cards }}>
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
