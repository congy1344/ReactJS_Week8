import React from "react";
import "./EditorsPick.css";
// Import ảnh trực tiếp để webpack có thể xử lý
import lotusDelightSalad from "../assets/images/corn_salad.png";
import cornSalad from "../assets/images/corn_salad.png";
import potatoSalad from "../assets/images/Potato Salad.png";
import lotusDelight from "../assets/images/lotus_delight_salad.png";

const EditorsPick = () => {
  const editorsPicks = [
    {
      id: 1,
      title: "Stuffed sticky rice ball",
      time: "34 minutes",
      author: "Jennifer King",
      description:
        "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
      image: lotusDelight,
    },
    {
      id: 2,
      title: "Strawberry smoothie",
      time: "40 minutes",
      author: "Matthew Martinez",
      description:
        "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
      image: cornSalad,
    },
    {
      id: 3,
      title: "Latte Art",
      time: "15 minutes",
      author: "Sarah Hill",
      description:
        "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
      image: lotusDelightSalad,
    },
    {
      id: 4,
      title: "Butter fried noodles",
      time: "16 minutes",
      author: "Julia Lopez",
      description:
        "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
      image: potatoSalad,
    },
  ];

  return (
    <section className="ep-section">
      <div className="ep-container">
        <div className="ep-header">
          <h2>Editor's pick</h2>
          <p>
            Curated Culinary Delights: Handpicked Favorites by Our Expert
            Editors!
          </p>
        </div>
        <div className="ep-grid">
          {editorsPicks.map((pick) => (
            <div key={pick.id} className="ep-card">
              <div className="ep-image-container">
                <img src={pick.image} alt={pick.title} className="ep-image" />
                <button className="ep-bookmark-button">
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
              <div className="ep-content">
                <div className="ep-content-header">
                  <h3>{pick.title}</h3>
                  <span className="ep-time">{pick.time}</span>
                </div>
                <div className="ep-author">
                  <img
                    src={`../../assets/images/avatars/${pick.author
                      .toLowerCase()
                      .replace(" ", "-")}.jpg`}
                    alt={pick.author}
                    className="ep-author-avatar"
                  />
                  <span className="ep-author-name">{pick.author}</span>
                </div>
                <p className="ep-description">{pick.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
