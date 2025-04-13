import React from "react";
import logo from "../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Chefify Logo" className="logo" />
          <span className="brand-name">Chefify</span>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="search-input"
          />
        </div>
        <nav className="nav-links">
          <a href="#what-to-cook">What to cook</a>
          <a href="#recipes">Recipes</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#occasions">Occasions</a>
          <a href="#about-us">About Us</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
