import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../ui/loading";
import { CardsService } from "../../services/cardsService";
import Header from "../../ui/header";
import Footer from "../../ui/footer";
import CardItem from "./cardItem";
import axios from "axios";

const CardPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [slides, setSlides] = useState([]);

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
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  const filteredSlides = slides.filter((slide) => slide.cardId === card.id);
  console.log(filteredSlides);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <CardItem slides={filteredSlides} card={card} />
      )}
      <Footer />
    </>
  );
};

export default CardPage;
