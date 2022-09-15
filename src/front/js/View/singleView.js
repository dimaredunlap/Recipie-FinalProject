import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import { Context } from "../store/appContext";
import "../../styles/singleView.css";
import {useParams} from "react-router-dom";
 
export const SingleView = () => {
    const { store, actions } = useContext(Context);
    const id = useParams().id
    console.log("this is the store", store)
    const recipe = store.recipes.filter((recipe) => recipe.id === id) 
    console.log(recipe)
 return recipe == undefined ? ("loading") : (
   <div className="singleView container">
       <div id="introBox">
           <div className="title font-weight-bold">{recipe.title}</div>
           <p className="author">{recipe.credit}</p>
           <p className="description">{recipe.description}</p>
           <div className="row mb-5 align-self-start" id="times">
            <div className="col-1 d-flex">
               <div className="prepTime">Prep Time {recipe.prep_time}</div>
               <span className="vertical-line"></span>
            </div> 
            <div className="col-1 d-flex">  
               <div className="cookTime">Cook Time {recipe.cook_time}</div>
               <span className="vertical-line"></span>
            </div>
            <div className="col-1 d-flex">
               <div className="totalTime">Total Time {recipe.total_time}</div>
               <span className="vertical-line"></span>
            </div>   
            <div className="col-1 d-flex">
               <div className="servings">Servings {recipe.servings}</div>
            </div>   
           </div>
       </div>
       <div className="row g-3" id="recipeBox">
           <div className="col-sm-3 align-self-start"></div>
             <img
               className="photo"
               src="https://www.apinchofhealthy.com/wp-content/uploads/2021/09/Close-up-side-shot-of-styled-sandwich-2.jpg"
             ></img>
               <h2 className="ingredients">Ingredients</h2>
           <div className="col-sm-3 align-self-start">
               <h2 className="directions">Directions</h2>
           </div>
       </div>
   </div>
 );
};
