import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import {
  calculateCurrentDate,
  calculateDeliveryDate,
} from "../calculateDeliveryDate";
import PropTypes from "prop-types";

const OrdersContext = React.createContext();
export const useOrders = () => {
  return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
  const [ordersCards, setOrdersCards] = useState([]);
  const { currentUser, updateUserData } = useAuth();
  const currentDate = calculateCurrentDate();
  const deliveryDate = calculateDeliveryDate();
  const orderAddress = currentUser?.address;

  useEffect(() => {
    if (!currentUser) {
      setOrdersCards([]);
    }
    if (currentUser?.orders) {
      setOrdersCards(currentUser.orders);
    }
  }, [currentUser]);

  // const handleOrdersClick = async (basketCards) => {
  //   console.log(basketCards);
  //   let orders = currentUser?.orders || [];
  //   const newOrders = basketCards.map((card) => ({
  //     ...card,
  //     orderDate: currentDate,
  //     deliveryDate: deliveryDate,
  //     orderAddress: orderAddress,
  //     isDelivered: false,
  //   }));

  //   const updatedOrders = orders.reduce((acc, order) => {
  //     const existingOrder = newOrders.find(
  //       (newOrder) =>
  //         newOrder.id === order.id && newOrder.orderDate === order.orderDate
  //     );

  //     if (existingOrder) {
  //       return [
  //         ...acc,
  //         {
  //           ...existingOrder,
  //           quantity: existingOrder.quantity + order.quantity,
  //           totalPrice: existingOrder.totalPrice + order.totalPrice,
  //         },
  //       ];
  //     } else {
  //       return [...acc, order];
  //     }
  //   }, []);

  //   orders = [
  //     ...newOrders.filter(
  //       (newOrder) =>
  //         !orders.some(
  //           (order) =>
  //             order.id === newOrder.id && order.orderDate === newOrder.orderDate
  //         )
  //     ),
  //     ...updatedOrders,
  //   ];

  //   await updateUserData({
  //     ...currentUser,
  //     orders: orders,
  //   });
  // };

  const handleOrdersClick = async (basketCards) => {
    let orders = currentUser?.orders || [];
    const newOrders = basketCards.map((card) => ({
      ...card,
      orderDate: currentDate,
      deliveryDate: deliveryDate,
      orderAddress: orderAddress,
      quantity: card.quantity,
      totalPrice: card.totalPrice,
      isDelivered: false,
    }));

    const updatedOrders = orders.reduce((acc, order) => {
      const existingOrder = newOrders.find(
        (newOrder) =>
          newOrder.id === order.id &&
          newOrder.orderDate === order.orderDate &&
          newOrder.isDelivered === order.isDelivered
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

  const getOrder = (card) => {
    const orders = currentUser?.orders;
    if (orders) {
      const index = orders.findIndex(
        (item) => item.id === card.id && item.orderDate === card.orderDate
      );
      return index >= 0 ? orders[index] : {};
    }
    return {};
  };

  return (
    <OrdersContext.Provider
      value={{
        ordersCards,
        handleOrdersClick,
        getOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

OrdersProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default OrdersProvider;
