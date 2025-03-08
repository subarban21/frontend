import React from "react";
import './App.css';
// We use route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// we import al components we need in our app

import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecipeList from "./components/recipeList"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecipeList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;