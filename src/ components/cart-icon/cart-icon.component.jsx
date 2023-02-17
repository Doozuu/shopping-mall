import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } =
    useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>
        {cartCount}
        {/* {cartItems.reduce((acc, cur) => acc + cur.quantity, 0)} */}
        {/* useContext를 이용해 carCount를 세는 대신에 위처럼만 해도 된다. */}
      </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
