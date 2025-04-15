import React from "react";
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
              <a href="#our-cooks">Our Cooks</a>
            </li>
            <li>
              <a href="#features">See Our Features</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="#subscription">Gift Subscription</a>
            </li>
            <li>
              <a href="#feedback">Send Us Feedback</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Recipes</h3>
          <ul>
            <li>
              <a href="#this-week">What to Cook This Week</a>
            </li>
            <li>
              <a href="#pasta">Pasta</a>
            </li>
            <li>
              <a href="#dinner">Dinner</a>
            </li>
            <li>
              <a href="#healthy">Healthy</a>
            </li>
            <li>
              <a href="#vegetarian">Vegetarian</a>
            </li>
            <li>
              <a href="#vegan">Vegan</a>
            </li>
            <li>
              <a href="#christmas">Christmas</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={logo} alt="Chefify Logo" />
        </div>
        <div className="footer-info">
          <span>2023 Chefify Company</span>
          <div className="footer-links">
            <a href="#terms">Terms of Service</a>
            <span className="divider">|</span>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
