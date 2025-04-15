import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button className="send-button">Send</button>
          </div>
        </div>

        <div className="footer-section">
          <h3>Learn More</h3>
          <ul>
            <li>
              <NavLink
                to="/our-cooks"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Our Cooks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                See Our Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>
              <NavLink
                to="/subscription"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Gift Subscription
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feedback"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Send Us Feedback
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Recipes</h3>
          <ul>
            <li>
              <NavLink
                to="/recipes/this-week"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                What to Cook This Week
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes/pasta"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Pasta
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes/dinner"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Dinner
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes/healthy"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Healthy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes/vegetarian"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Vegetarian
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes/vegan"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Vegan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes/christmas"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Christmas
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <NavLink to="/">
            <img src={logo} alt="Chefify Logo" />
          </NavLink>
        </div>
        <div className="footer-info">
          <span>2023 Chefify Company</span>
          <div className="footer-links">
            <NavLink
              to="/terms"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Terms of Service
            </NavLink>
            <span className="divider">|</span>
            <NavLink
              to="/privacy"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
