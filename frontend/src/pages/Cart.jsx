import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={() => removeFromCart(item.id)}
          onQuantityChange={(quantity) => updateQuantity(item.id, quantity)}
        />
      ))}
      {cart.length > 0 && (
        <h3>Total: ${cart.reduce((a, b) => a + b.price * b.quantity, 0)}</h3>
      )}
    </div>
  );
};

export default Cart;
