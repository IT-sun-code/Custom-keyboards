import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "./useAuth";

const BasketContext = React.createContext();
export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basketCards, setBasketCards] = useState([]);
  const { currentUser, updateUserData } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      setBasketCards([]);
    }
    if (currentUser?.basket) {
      setBasketCards(currentUser.basket);
    }
  }, [currentUser]);

  const handleBasketClick = async (card) => {
    const basket = currentUser?.basket || [];
    const cardIndex = basket.findIndex(
      (basketCard) => basketCard.id === card.id
    );
    if (cardIndex === -1) {
      setBasketCards([card, ...basket]);
      await updateUserData({
        ...currentUser,
        basket: [card, ...basket],
      });
    } else {
      const newBasketCards = [...basket];
      newBasketCards.splice(cardIndex, 1);
      setBasketCards(newBasketCards);
      basket.splice(cardIndex, 1);
      await updateUserData({
        ...currentUser,
        basket: basket,
      });
    }
  };

  return (
    <BasketContext.Provider value={{ basketCards, handleBasketClick }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
