
import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   ingredients: "",
   url: "",
   cookTime: "",
   recipeYield: "",
   datePublished: "", 
   prepTime: "",
   description: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   //const newPerson = { ...form };
   const newRecipe = { ...form };

   await fetch("https://verbose-spoon-wg4gj9q5pqrcwr6-5050.app.github.dev/recipe", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newRecipe),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", ingredients: "", url: "", cookTime: "", recipeYield: "", datePublished: "", prepTime: "", description: "", });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="ingredients">Ingredients</label>
         <input
           type="text"
           className="form-control"
           id="ingredients"
           value={form.ingredients}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="url">URL</label>
         <input
           type="text"
           className="form-control"
           id="url"
           value={form.url}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="cookTime">Cook Time</label>
         <input
           type="text"
           className="form-control"
           id="cookTime"
           value={form.cookTime}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="recipeYield">Recipe Yield</label>
         <input
           type="text"
           className="form-control"
           id="recipeYield"
           value={form.recipeYield}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="datePublished">Date Published</label>
         <input
           type="text"
           className="form-control"
           id="datePublished"
           value={form.datePublished}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="prepTime">Prep Time</label>
         <input
           type="text"
           className="form-control"
           id="prepTime"
           value={form.prepTime}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="description">Description</label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <input
           type="submit"
           value="Create recipe"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}