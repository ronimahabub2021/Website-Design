import React, { useState } from "react";

const products = [
  { id: 1, name: "Wireless Headphones", price: 50, category: "Electronics" },
  { id: 2, name: "Smart Watch", price: 80, category: "Electronics" },
  { id: 3, name: "Bluetooth Speaker", price: 40, category: "Electronics" },
  { id: 4, name: "Gaming Mouse", price: 30, category: "Accessories" },
  { id: 5, name: "Laptop Backpack", price: 45, category: "Accessories" },
  { id: 6, name: "T-shirt", price: 20, category: "Clothing" },
  { id: 7, name: "Shoes", price: 60, category: "Clothing" },
];

function ProductList({ addToCart }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProducts = products.filter((product) => {
    return (
      (filter === "All" || product.category === filter) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="card" key={product.id}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p className="category">{product.category}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found 😔</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
