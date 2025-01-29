// import { useContext } from 'react'
import "./FoodItem.css";
import { assets } from "../../assets/assets";
// import { StoreContext } from '../../Context/StoreContext';
import PropTypes from "prop-types";

const FoodItem = ({ image, name, price, desc, id }) => {
  // const [itemCount, setItemCount] = useState(0);
  // const {cartItems,addToCart,removeFromCart,url,currency} = useContext(StoreContext);
  return (
    <div className="food-item" id={id}>
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
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
