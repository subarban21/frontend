import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "./recipeFinder.css"; // Import styles

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="add-recipe-btn" to="/create">
        Add Recipe
      </NavLink>
    </nav>
  );
}
