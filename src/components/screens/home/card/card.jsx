import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../utils/hooks/useAuth";
import { useFavorites } from "../../../utils/hooks/useFavorites";
import { useBasket } from "../../../utils/hooks/useBasket";
import ProductItem from "../../../ui/productItem";
import BasketItem from "../../../ui/basketItem";

const Card = ({ card }) => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

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
      <ProductItem
        currentPath={currentPath}
        currentUser={currentUser}
        card={card}
        isFavorite={isFavorite}
        isBasket={isBasket}
        handleHeartIconClick={handleHeartIconClick}
        handleBasketIconClick={handleBasketIconClick}
      />
      <BasketItem
        currentUser={currentUser}
        currentPath={currentPath}
        card={card}
        handleHeartIconClick={handleHeartIconClick}
        handleBasketIconClick={handleBasketIconClick}
        isFavorite={isFavorite}
      />
    </>
  );
};

export default Card;
