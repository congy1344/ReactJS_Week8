import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import RecipeSection from "./components/RecipeSection";
import VideoRecipeSection from "./components/VideoRecipeSection";
import EditorsPick from "./components/EditorsPick";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <RecipeSection />
      <VideoRecipeSection />
      <EditorsPick />
      <div className="content">
        {/* Nội dung chính của ứng dụng sẽ được thêm vào đây */}
      </div>
    </>
  );
}

export default App;
