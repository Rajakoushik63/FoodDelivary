// import React from "react";
import { StoreContext } from "./StoreContext";
import PropTypes from "prop-types";
import { food_list } from "../../assets/assets";
import { useState } from "react";

const StoreContextProvider = (props) => {
  const [cartItems, setCartitems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartitems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
      return totalAmount;
    }
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartitems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Ensure this is a named export
export { StoreContextProvider };
