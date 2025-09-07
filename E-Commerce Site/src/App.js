import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        cartCount={cart.length}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main>
        {checkout ? (
          <Checkout cart={cart} setCheckout={setCheckout} />
        ) : (
          <>
            <ProductList addToCart={addToCart} />
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              setCheckout={setCheckout}
            />
          </>
        )}
      </main>

      <footer>
        <p>© 2025 ShopNest | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
