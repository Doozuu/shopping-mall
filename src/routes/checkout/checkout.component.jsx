import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../ components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">
        Total : ${cartTotal}
        {/* {cartItems.reduce((total, cur) => total + cur.quantity * cur.price, 0)} */}
        {/* cartTotal 대신 바로 위처럼 해도 된다. */}
      </span>
    </div>
  );
};

export default CheckOut;
