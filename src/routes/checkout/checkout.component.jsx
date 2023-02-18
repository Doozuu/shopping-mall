import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../ components/checkout-item/checkout-item.component";

import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>
        Total : ${cartTotal}
        {/* {cartItems.reduce((total, cur) => total + cur.quantity * cur.price, 0)} */}
        {/* cartTotal 대신 바로 위처럼 해도 된다. */}
      </Total>
    </CheckOutContainer>
  );
};

export default CheckOut;
