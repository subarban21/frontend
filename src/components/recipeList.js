import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Recipe = (props) => (
 <tr>
   <td>{props.recipe.name}</td>
   <td>{props.recipe.position}</td>
   <td>{props.recipe.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.recipe._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecipe(props.recipe._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [recipe, setRecipe] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecipe() {
     const response = await fetch(`https://verbose-spoon-wg4gj9q5pqrcwr6-5050.app.github.dev/recipe`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const recipe = await response.json();
     setRecipe(recipe);
   }
 
   getRecipe();
 
   return;
 }, [recipe.length]);
 
 // This method will delete a record
 async function deleteRecipe(id) {
   await fetch(`Replace your API URL/recipe/${id}`, {
     method: "DELETE"
   });
 
   const newRecipe = recipe.filter((el) => el._id !== id);
   setRecipe(newRecipe);
 }
 
 // This method will map out the records on the table
 function recipeList() {
   return recipe.map((recipe) => {
     return (
       <Recipe
         recipe={recipe}
         deleteRecipe={() => deleteRecipe(recipe._id)}
         key={recipe._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recipeList()}</tbody>
     </table>
   </div>
 );
}