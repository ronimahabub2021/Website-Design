import React from "react";

function Navbar({ cartCount, darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <h1>🛒 ShopNest</h1>
      <div>
        <span>Cart ({cartCount})</span>
        <button className="dark-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
