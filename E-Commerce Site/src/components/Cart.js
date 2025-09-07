import React from "react";

function Cart({ cart, removeFromCart, setCheckout }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty 🛒</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}{" "}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button className="checkout-btn" onClick={() => setCheckout(true)}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
