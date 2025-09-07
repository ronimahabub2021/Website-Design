import React, { useState } from "react";

function Checkout({ cart, setCheckout }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const [form, setForm] = useState({ name: "", address: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}! Your order has been placed.`);
    setCheckout(false);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          value={form.address}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <h3>Total: ${total}</h3>
        <button type="submit">Place Order</button>
      </form>
      <button onClick={() => setCheckout(false)}>Back to Cart</button>
    </div>
  );
}

export default Checkout;
