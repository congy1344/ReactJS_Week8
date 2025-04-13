import React from "react";
import bannerImage from "../assets/images/Banner.png";
import chefAvatar from "../assets/images/Avatar.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-right">
        <img
          src={bannerImage}
          alt="Chef preparing food"
          className="main-image"
        />
      </div>
      <div className="banner-content">
        <div className="recipe-card">
          <div className="recipe-tag">Recipe of the day</div>
          <h2 className="recipe-title">Salad Caprese</h2>
          <p className="recipe-description">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            herbs, olive oil, and balsamic vinegar create a refreshing dish for
            lunch or appetizer.
          </p>
          <div className="recipe-author">
            <img src={chefAvatar} alt="Chef" className="author-avatar" />
            <span>Salad Caprese</span>
          </div>
          <button className="view-button">
            View now <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
