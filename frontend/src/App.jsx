import React from "react";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartProvider>
      <h1>Naksh Jewels Shop</h1>
      <Home />
      <hr />
      <Cart />
    </CartProvider>
  );
}

export default App;
