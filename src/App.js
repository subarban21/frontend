import React from "react";
import "./components/recipeFinder.css"; // Import the updated CSS
import { Route, Routes } from "react-router-dom";

// Import components
//import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecipeList from "./components/recipeList";
import RecipeDetails from "./components/recipeDetails";

const App = () => {
  return (
    <div className="app-container">
      <div className="container">
        <Routes>
          <Route exact path="/" element={<RecipeList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
