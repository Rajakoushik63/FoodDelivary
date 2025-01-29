// import React from "react";
import { StoreContext } from "./StoreContext";
import PropTypes from "prop-types";
import { food_list } from "../../assets/assets";

const StoreContextProvider = (props) => {
  const contextValue = { food_list };

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
