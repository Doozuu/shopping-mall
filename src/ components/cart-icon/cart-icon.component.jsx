import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } =
    useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartCount}
        {/* {cartItems.reduce((acc, cur) => acc + cur.quantity, 0)} */}
        {/* useContext를 이용해 carCount를 세는 대신에 위처럼만 해도 된다. */}
      </span>
    </div>
  );
};

export default CartIcon;
