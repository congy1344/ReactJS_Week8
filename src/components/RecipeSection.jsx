import React from "react";
import "./RecipeSection.css";

const recipes = [
  {
    id: 1,
    image: "/src/assets/images/italian-tomato.png",
    title: "Italian-style tomato salad",
    time: "15 minutes",
  },
  {
    id: 2,
    image: "/src/assets/images/spaghetti.png",
    title: "Spaghetti with vegetables and shrimp",
    time: "25 minutes",
  },
  {
    id: 3,
    image: "/src/assets/images/lotus-salad.png",
    title: "Lotus delight salad",
    time: "20 minutes",
  },
  {
    id: 4,
    image: "/src/assets/images/snack-cake.png",
    title: "Snack cakes",
    time: "21 minutes",
  },
];

const RecipeSection = () => {
  return (
    <section className="recipe-section">
      <div className="recipe-section-container">
        <div className="section-header">
          <h2>This Summer Recipes</h2>
          <p>We have all your Independence Day sweets covered.</p>
        </div>
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image-container">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="recipe-image"
                />
                <button className="bookmark-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                </button>
              </div>
              <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <span className="recipe-time">{recipe.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
