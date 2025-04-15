import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditorsPick.css";

const EditorsPick = () => {
  const [editorsPicks, setEditorsPicks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEditorsPicks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/editorsPicks");
        setEditorsPicks(response.data);
        setLoading(false);
      } catch {
        setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
        setLoading(false);
      }
    };

    fetchEditorsPicks();
  }, []);

  if (loading) return <div className="ep-loading">Đang tải...</div>;
  if (error) return <div className="ep-error">{error}</div>;

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
                    src={pick.authorAvatar}
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
