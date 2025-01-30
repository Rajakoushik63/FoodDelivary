import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            required
          />
          <input type="text" name="lastName" placeholder="Last name" required />
        </div>
        <input type="email" name="email" placeholder="Email address" required />
        <input type="text" name="street" placeholder="Street" required />
        <div className="multi-field">
          <input type="text" name="city" placeholder="City" required />
          <input type="text" name="state" placeholder="State" required />
        </div>
        <div className="multi-field">
          <input type="text" name="zipcode" placeholder="Pin code" required />
          <input type="text" name="country" placeholder="Country" required />
        </div>
        <input type="text" name="phone" placeholder="Phone" required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>
                ${getTotalCartAmount()}
                {getTotalCartAmount()}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount + 2}</b>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
