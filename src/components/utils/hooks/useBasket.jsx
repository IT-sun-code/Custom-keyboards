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

  const setTotalPrice = async (card, quantity) => {
    const basket = currentUser.basket;
    const updatedBasket = basket.map((item) => {
      if (item.id === card.id) {
        return {
          ...item,
          totalPrice: item.price * quantity,
        };
      }
      return item;
    });
    await updateUserData({
      ...currentUser,
      basket: updatedBasket,
    });
    console.log(updatedBasket);
  };

  const getTotalPrice = (card) => {
    const basket = currentUser.basket;
    const index = basket.findIndex((item) => item.id === card.id);
    return index >= 0 ? basket[index].totalPrice : 0;
  };

  const getQuantity = (card) => {
    const basket = currentUser.basket;
    const index = basket.findIndex((item) => item.id === card.id);
    return index >= 0 ? basket[index].quantity : 0;
  };

  const handleIncreaseQuantity = async (card, quantity) => {
    const basket = currentUser.basket;
    const updatedBasket = basket.map((item) => {
      if (item.id === card.id) {
        return {
          ...item,
          quantity: ++item.quantity,
        };
      }
      return item;
    });
    await updateUserData({
      ...currentUser,
      basket: updatedBasket,
    });
    setTotalPrice(card, quantity + 1);
  };

  const handleDecreaseQuantity = async (card, quantity) => {
    const basket = currentUser.basket;
    const updatedBasket = basket.map((item) => {
      if (item.id === card.id) {
        if (item.quantity > 1) {
          return {
            ...item,
            quantity: --item.quantity,
          };
        }
      }
      return item;
    });
    await updateUserData({
      ...currentUser,
      basket: updatedBasket,
    });
    if (quantity > 1) {
      setTotalPrice(card, quantity - 1);
    }
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
        getQuantity,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        getTotalPrice,
        handleDeleteBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
