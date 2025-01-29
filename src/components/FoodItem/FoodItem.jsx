import "./FoodItem.css";
import { assets } from "../../assets/assets";
import PropTypes from "prop-types";
import { useContext } from "react";
import { StoreContextProvider } from "../context/StoreContextProvider";

const FoodItem = ({ image, name, price, desc, id }) => {
  const [cartItems, addToCart, removeFromCart] =
    useContext(StoreContextProvider);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default FoodItem;
