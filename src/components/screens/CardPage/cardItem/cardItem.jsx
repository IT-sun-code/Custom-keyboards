import React, { useState, useEffect } from "react";
import styles from "./cardItem.module.css";
import Slider from "../../../ui/slider";
import Loading from "../../../ui/loading";
import HeartIcon from "../../../ui/heartIcon";
import BasketIcon from "../../../ui/basketIcon";
import { useFavorites } from "../../../utils/hooks/useFavorites";
import { useBasket } from "../../../utils/hooks/useBasket";
import { useAuth } from "../../../utils/hooks/useAuth";

const CardItem = ({ slides, card }) => {
  const [filteredSlides, setfilteredSlides] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const filteredSlides = slides.filter((slide) => slide.cardId === card.id);
    setfilteredSlides(filteredSlides);
  }, [slides, card.id]);

  const { favoriteCards, handleFavoriteClick } = useFavorites();
  const isFavorite = favoriteCards.some((favCard) => favCard.id === card.id);
  const [heartIconclicks, setHeartIconClicks] = useState(isFavorite);
  const handleHeartIconClick = async () => {
    setHeartIconClicks(!heartIconclicks);
    handleFavoriteClick(card);
  };

  const { basketCards, handleBasketClick } = useBasket();
  const isBasket = basketCards.some((basketCard) => basketCard.id === card.id);
  const [basketIconclicks, setBasketIconClicks] = useState(isBasket);
  const handleBasketIconClick = async () => {
    setBasketIconClicks(!basketIconclicks);
    handleBasketClick(card);
  };

  return (
    <>
      <div className={styles.container}>
        {filteredSlides.length <= 0 ? (
          <div className={styles.slide}>
            <Loading />
          </div>
        ) : (
          <div className={styles.slide}>
            <Slider slides={filteredSlides} appearance={"percentagesLower"} />
          </div>
        )}

        <div className={styles.item}>
          <div className={styles.characteristics}>
            <h4 className={styles.title}>{card.title}</h4>
            <h4 className={styles.sku}>Артикул: {card.id}</h4>
            <p>
              <b>Описание: </b>
              {card.description}
            </p>
          </div>
          <div className={styles.actionBlock}>
            {!currentUser?.admin ? (
              <>
                <HeartIcon
                  cardItem
                  onClick={handleHeartIconClick}
                  isActive={isFavorite}
                />
                <h2>Цена: {card.price}</h2>
                <BasketIcon
                  cardItem
                  onClick={handleBasketIconClick}
                  isActive={isBasket}
                />
              </>
            ) : (
              <h2 className={styles.price}>Цена: {card.price}</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
