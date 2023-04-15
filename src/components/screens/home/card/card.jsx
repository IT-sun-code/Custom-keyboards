import React, { useState } from "react";
import styles from "./card.module.css";
import BasketIcon from "../../../ui/basketIcon";
import HeartIcon from "../../../ui/heartIcon";
import { Link } from "react-router-dom";
import { useAuth } from "../../../utils/hooks/useAuth";
import { useFavorites } from "../../../utils/hooks/useFavorites";

const Card = ({ card }) => {
  const str = card.title;
  const maxLength = 35;
  const { currentUser } = useAuth();
  const { favoriteCards, handleFavoriteClick } = useFavorites();
  const isFavorite = favoriteCards.some((favCard) => favCard.id === card.id);
  const [heartIconclicks, setHeartIconClicks] = useState(isFavorite);

  const handleHeartIconClick = async () => {
    setHeartIconClicks(!heartIconclicks);
    handleFavoriteClick(card);
  };

  const [basketIconclicks, setBasketIconClicks] = useState(false);
  const handleBasketIconClick = () => {
    setBasketIconClicks(!basketIconclicks);
  };

  return (
    <>
      <div className={styles.item}>
        <HeartIcon
          onClick={currentUser && handleHeartIconClick}
          isActive={isFavorite}
        />
        <BasketIcon
          onClick={currentUser && handleBasketIconClick}
          isActive={basketIconclicks}
        />
        <Link to={`/cards/${card.id}`}>
          <img className={styles.image} src={card.image} alt="keyboard" />
        </Link>
        <div>
          <div title={str} className={styles.tooltip}>
            <p className={styles.description}>
              {str.length > maxLength
                ? str.substring(0, maxLength - 3) + "..."
                : str}
            </p>
          </div>
          <p className={styles.description}>{`Артикул ${card.id}`}</p>
          <h3>{`Цена: ${card.price} ₽`}</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
