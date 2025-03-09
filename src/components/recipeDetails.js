import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./recipeFinder.css"

export default function RecipeDetails() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`https://verbose-spoon-wg4gj9q5pqrcwr6-5050.app.github.dev/recipe/${id}`);

      if (!response.ok) {
        console.error(`Error fetching recipe: ${response.statusText}`);
        return;
      }

      const data = await response.json();
      setRecipe(data);
    }

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>; // Display while fetching data
  }

  return (
    <div className="container">
      <h2>{recipe.name}</h2>
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
      <p><strong>Recipe Yield:</strong> {recipe.recipeYield}</p>
      <p><strong>Published Date:</strong> {recipe.datePublished}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
      <p><strong>Recipe URL:</strong> <a href={recipe.url} target="_blank" rel="noopener noreferrer">{recipe.url}</a></p>
      
      <div>
        <Link to="/" className="btn btn-secondary">Back to Recipe List</Link>
        <Link to={`/edit/${id}`} className="btn btn-primary" style={{ marginLeft: "10px" }}>Edit Recipe</Link>
      </div>
    </div>
  );
}
