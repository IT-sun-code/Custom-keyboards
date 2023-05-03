import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import PropTypes from "prop-types";

const BasketContext = React.createContext();
export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const { currentUser, updateUserData } = useAuth();
  const [basketCards, setBasketCards] = useState([]);

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
      const newCard = { ...card, quantity: 1, totalPrice: card.price };
      setBasketCards([newCard, ...basket]);
      await updateUserData({
        ...currentUser,
        basket: [newCard, ...basket],
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

  const handleIncreaseQuantity = async (card, quantity) => {
    const basket = currentUser.basket;
    const updatedBasket = basket.map((item) => {
      if (item.id === card.id) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: item.price * newQuantity,
        };
      }
      return item;
    });
    await updateUserData({
      ...currentUser,
      basket: updatedBasket,
    });
  };

  const handleDecreaseQuantity = async (card, quantity) => {
    const basket = currentUser.basket;
    const updatedBasket = basket.map((item) => {
      if (item.id === card.id) {
        if (item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: item.price * newQuantity,
          };
        }
      }
      return item;
    });
    await updateUserData({
      ...currentUser,
      basket: updatedBasket,
    });
  };

  const getBasketItem = (card) => {
    const basketItems = currentUser?.basket;
    if (basketItems) {
      const index = basketItems.findIndex((item) => item.id === card.id);
      return index >= 0 ? basketItems[index] : {};
    }
    return {};
  };

  const handleDeleteBasket = async () => {
    setBasketCards([]);
    await updateUserData({
      ...currentUser,
      basket: [],
    });
  };

  return (
    <BasketContext.Provider
      value={{
        basketCards,
        handleBasketClick,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleDeleteBasket,
        getBasketItem,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

BasketProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default BasketProvider;
