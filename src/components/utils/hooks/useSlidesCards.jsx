import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "../../ui/loading";
import CardsSlidesService from "../../services/cardsSlidesService";

const CardsSlidesContext = React.createContext();
export const useSlidesCards = () => {
  return useContext(CardsSlidesContext);
};

const CardsSlidesProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { content } = await CardsSlidesService.getAll();
        setSlides(content);
        setIsLoading(false);
      } catch (error) {
        errorCatcher(error);
      }
    };
    fetchData();
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

  async function createSlidesCard(data) {
    try {
      const { content } = await CardsSlidesService.create(data);
      setSlides((prevCards) => [content, ...prevCards]);
      console.log(content);
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function deleteCardSlides(id, slidesIds) {
    try {
      const { content } = await CardsSlidesService.deleteCardSlides(slidesIds);
      if (content !== null) {
        setSlides((prevState) =>
          prevState.filter((slide) => slide.cardId !== id)
        );
        console.log(slides);
      }
    } catch (error) {
      errorCatcher(error);
    }
  }

  return (
    <CardsSlidesContext.Provider
      value={{ slides, createSlidesCard, deleteCardSlides, setSlides }}
    >
      {!isLoading ? children : <Loading />}
    </CardsSlidesContext.Provider>
  );
};

CardsSlidesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CardsSlidesProvider;
