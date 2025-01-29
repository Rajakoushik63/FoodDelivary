// import React from "react";
import { StoreContext } from "./StoreContext";
import PropTypes from "prop-types";
import { food_list } from "../../assets/assets";
import { useEffect, useState } from "react";

const StoreContextProvider = (props) => {
  const [cartItems, setCartitems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartitems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const removeFromCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartitems,
    addToCart,
    removeFromCart,
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
