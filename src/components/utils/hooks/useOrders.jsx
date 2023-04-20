import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "./useAuth";

const OrdersContext = React.createContext();
export const useOrders = () => {
  return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
  const [ordersCards, setOrdersCards] = useState([]);
  const { currentUser, updateUserData } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      setOrdersCards([]);
    }
    if (currentUser?.orders) {
      setOrdersCards(currentUser.orders);
    }
  }, [currentUser]);

  const handleOrdersClick = async (card) => {
    const orders = currentUser?.orders || [];
    const cardIndex = orders.findIndex((ordCard) => ordCard.id === card.id);
    if (cardIndex === -1) {
      setOrdersCards([card, ...orders]);
      await updateUserData({
        ...currentUser,
        orders: [card, ...orders],
      });
    } else {
      const newOrderCards = [...orders];
      newOrderCards.splice(cardIndex, 1);
      setOrdersCards(newOrderCards);
      orders.splice(cardIndex, 1);
      await updateUserData({
        ...currentUser,
        orders: orders,
      });
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        ordersCards,
        handleOrdersClick,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
