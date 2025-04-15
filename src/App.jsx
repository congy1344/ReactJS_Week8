import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import RecipeSection from "./components/RecipeSection";
import VideoRecipeSection from "./components/VideoRecipeSection";
import EditorsPick from "./components/EditorsPick";
import Footer from "./components/Footer";
import "./App.css";

// Pages
const Home = () => (
  <>
    <Banner />
    <RecipeSection />
    <VideoRecipeSection />
    <EditorsPick />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-cooks" element={<div>Our Cooks Page</div>} />
          <Route path="/features" element={<div>Features Page</div>} />
          <Route path="/faq" element={<div>FAQ Page</div>} />
          <Route
            path="/subscription"
            element={<div>Gift Subscription Page</div>}
          />
          <Route path="/feedback" element={<div>Feedback Page</div>} />
          <Route path="/recipes">
            <Route index element={<div>All Recipes</div>} />
            <Route path="this-week" element={<div>This Week's Recipes</div>} />
            <Route path="pasta" element={<div>Pasta Recipes</div>} />
            <Route path="dinner" element={<div>Dinner Recipes</div>} />
            <Route path="healthy" element={<div>Healthy Recipes</div>} />
            <Route path="vegetarian" element={<div>Vegetarian Recipes</div>} />
            <Route path="vegan" element={<div>Vegan Recipes</div>} />
            <Route path="christmas" element={<div>Christmas Recipes</div>} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
