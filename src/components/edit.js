import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
  name: "",
  ingredients: "",
  url: "",
  cookTime: "",
  recipeYield: "",
  datePublished: "", 
  prepTime: "",
  description: "",
   recipes: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`https://verbose-spoon-wg4gj9q5pqrcwr6-5050.app.github.dev/recipe/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const recipe = await response.json();
     if (!recipe) {
       window.alert(`recipe with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(recipe);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedRecipe = {
     name: form.name,
     ingredients: form.ingredients,
     url: form.url,
     cookTime: form.cookTime,
     recipeYield: form.recipeYield,
     datePublished: form.datePublished,
     prepTime: form.prepTime,
     description: form.description,

   };
 
   // This will send a post request to update the data in the database.
   await fetch(`Replace your API URL/recipe/${params.id}`, {
     method: "PATCH",
     body: JSON.stringify(editedRecipe),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Recipe</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="ingredients">Ingredients: </label>
         <input
           type="text"
           className="form-control"
           id="ingredients"
           value={form.ingredients}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="url">URL: </label>
         <input
           type="text"
           className="form-control"
           id="url"
           value={form.url}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="cookTime">Cook Time: </label>
         <input
           type="text"
           className="form-control"
           id="cookTime"
           value={form.cookTime}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="recipeYield">Recipe Yield: </label>
         <input
           type="text"
           className="form-control"
           id="recipeYield"
           value={form.recipeYield}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="datePublished">Date Published: </label>
         <input
           type="text"
           className="form-control"
           id="datePublished"
           value={form.datePublished}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="prepTime">Prep Time: </label>
         <input
           type="text"
           className="form-control"
           id="prepTime"
           value={form.prepTime}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="description">Description: </label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Recipe"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}