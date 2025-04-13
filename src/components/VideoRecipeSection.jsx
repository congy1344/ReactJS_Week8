import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VideoRecipeSection.css";

const VideoRecipeSection = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/videoRecipes");
        setRecipes(response.data);
        setLoading(false);
      } catch {
        setError("Không thể tải video công thức. Vui lòng thử lại sau.");
        setLoading(false);
      }
    };

    fetchVideoRecipes();
  }, []);

  if (loading)
    return <div className="loading">Đang tải video công thức...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="video-recipe-section">
      <div className="video-recipe-container">
        <div className="section-header">
          <h2>Recipes With Videos</h2>
          <p>Cooking Up Culinary Creations with Step-by-Step Videos</p>
        </div>
        <div className="video-recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="video-recipe-card">
              <div className="video-recipe-image-container">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="video-recipe-image"
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
                <button className="play-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="video-recipe-info">
                <h3>{recipe.title}</h3>
                <span className="video-recipe-time">{recipe.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoRecipeSection;
