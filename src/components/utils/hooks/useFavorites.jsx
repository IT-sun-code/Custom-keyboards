import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "./useAuth";

const FavoritesContext = React.createContext();
export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const { currentUser, updateUserData } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      setFavoriteCards([]);
    }
    if (currentUser?.favorites) {
      setFavoriteCards(currentUser.favorites);
    }
  }, [currentUser]);

  const handleFavoriteClick = async (card) => {
    const favorites = currentUser?.favorites || [];
    const cardIndex = favorites.findIndex((favCard) => favCard.id === card.id);
    if (cardIndex === -1) {
      setFavoriteCards([card, ...favorites]);
      await updateUserData({
        ...currentUser,
        favorites: [card, ...favorites],
      });
    } else {
      const newFavoriteCards = [...favorites];
      newFavoriteCards.splice(cardIndex, 1);
      setFavoriteCards(newFavoriteCards);
      favorites.splice(cardIndex, 1);
      await updateUserData({
        ...currentUser,
        favorites: favorites,
      });
    }
  };

  return (
    <FavoritesContext.Provider value={{ favoriteCards, handleFavoriteClick }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
