import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <div className="nav-logo">
            <img src="/delhiBookStore-logo.png" />
          </div>
          <div className="location">
            <p className="top-text">Deliver to</p>
            <div className="location-icon">
              <i className="fa-solid fa-location-dot" />
              <p className="bottom-text">India</p>
            </div>
          </div>
        </div>
        <div className="nav-center">
          <select className="search-dropdown">
            <option>All</option>
            <option>All Departments</option>
            <option>Arts &amp; Crafts</option>
          </select>
          <input
            type="text"
            placeholder="Search Delhi Book Store"
            className="search-box"
          />
          <div className="search-icon">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#28416c" }}
            ></i>
          </div>
        </div>
        <div className="nav-right">
          <div className="language-option">
            <div className="flag">
              <i className="fa-regular fa-flag" />
            </div>
            <select className="select-language">
              <option value="lan">EN</option>
              <option value="lan">ES</option>
              <option value="lan">AR</option>
            </select>
          </div>
          <div className="account-option">
            <p className="top-text">Hello, sign in</p>
            <select className="select-account">
              <option value="Account">Account &amp; Lists</option>
              <option value="Account">Account &amp; Lists</option>
              <option value="Account">Account &amp; Lists</option>
            </select>
          </div>
          <div className="order-option">
            <p className="top-text">Returns</p>
            <p className="bottom-text">&amp; Orders</p>
          </div>
          <div className="cart-option">
            <div className="cart-logo">
              <i className="fa-solid fa-cart-shopping" />
            </div>
            Cart
          </div>
        </div>
      </nav>
      <div className="nav-options">
        <div className="all-logo">
          <i className="fa-solid fa-bars" />
          <p className="list">All</p>
        </div>
        <div className="options">
          <p>Today's Deals</p>
          <p>Customer Service</p>
          <p>Registry</p>
          <p>Gift Cards</p>
          <p> Sell</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
