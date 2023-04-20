import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import {
  calculateCurrentDate,
  calculateDeliveryDate,
} from "../calculateDeliveryDate";

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

  const currentDate = calculateCurrentDate();
  const deliveryDate = calculateDeliveryDate();
  const orderAddress = currentUser?.address;

  const handleOrdersClick = async (basketCards) => {
    console.log(basketCards);
    let orders = currentUser?.orders || [];
    const newOrders = basketCards.map((card) => ({
      ...card,
      orderDate: currentDate,
      deliveryDate: deliveryDate,
      orderAddress: orderAddress,
    }));

    const updatedOrders = orders.reduce((acc, order) => {
      const existingOrder = newOrders.find(
        (newOrder) =>
          newOrder.id === order.id && newOrder.orderDate === order.orderDate
      );

      if (existingOrder) {
        return [
          ...acc,
          {
            ...existingOrder,
            quantity: existingOrder.quantity + order.quantity,
            totalPrice: existingOrder.totalPrice + order.totalPrice,
          },
        ];
      } else {
        return [...acc, order];
      }
    }, []);

    orders = [
      ...newOrders.filter(
        (newOrder) =>
          !orders.some(
            (order) =>
              order.id === newOrder.id && order.orderDate === newOrder.orderDate
          )
      ),
      ...updatedOrders,
    ];

    await updateUserData({
      ...currentUser,
      orders: orders,
    });
  };

  const getTotalPrice = (card) => {
    const orders = currentUser.orders;
    const index = orders.findIndex((item) => item.id === card.id);
    return index >= 0 ? orders[index].totalPrice : 0;
  };

  const getQuantity = (card) => {
    const orders = currentUser.orders;
    const index = orders.findIndex((item) => item.id === card.id);
    return index >= 0 ? orders[index].quantity : 0;
  };

  const getOrderDate = (card) => {
    const orders = currentUser?.orders;
    if (orders) {
      const index = orders.findIndex((item) => item.id === card.id);
      return index >= 0 ? orders[index].orderDate : 0;
    }
  };

  const getDeliveryDate = (card) => {
    const orders = currentUser.orders;
    const index = orders.findIndex((item) => item.id === card.id);
    return index >= 0 ? orders[index].deliveryDate : 0;
  };

  const getAddress = (card) => {
    const orders = currentUser?.orders;
    if (orders) {
      const index = orders.findIndex((item) => item.id === card.id);
      return index >= 0 ? orders[index].orderAddress : 0;
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        ordersCards,
        handleOrdersClick,
        getTotalPrice,
        getQuantity,
        getOrderDate,
        getDeliveryDate,
        getAddress,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
