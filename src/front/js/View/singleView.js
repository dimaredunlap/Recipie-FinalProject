import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import { Context } from "../store/appContext";
import "../../styles/singleView.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";

export const SingleView = () => {
  const id = useParams().id;
  const [recipe, setRecipe] = useState(null);
  const { store, actions } =useContext(Context);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/api/recipe/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => result.json())
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => console.log(error));
  }, []);


  const handleChange = (event) => {
    
  };
  console.log(`Event ${checked}`);
  console.log(`List ${store.ingredientList}`);
  return recipe == null ? (
    "loading"
  ) : (
    <div className="singleView container">
      <div id="introBox">
        <div className="title font-weight-bold">{recipe.title}</div>
        <p className="author">{recipe.credit}</p>
        <p className="description">{recipe.description}</p>
        <div className="row mb-5 align-self-start" id="times">
          <div className="col-1 d-flex">
            <div className="prepTime">Prep Time</div>
            <p className="row"> {recipe.prep_time}</p>
            <span className="vertical-line"></span>
          </div>
          <div className="col-1 d-flex">
            <div className="cookTime">Cook Time</div>
            <p>{recipe.cook_time}</p>
            <span className="vertical-line"></span>
          </div>
          <div className="col-1 d-flex">
            <div className="totalTime">Total Time</div>
            <p> {recipe.total_time}</p>
            <span className="vertical-line"></span>
          </div>
          <div className="col-1 d-flex">
            <div className="servings">Servings </div>
            <p>{recipe.servings}</p>
          </div>
        </div>
      </div>
      <div className="row mb-5 align-self-start" id="recipeBox">
        <div></div>
        <img
          className="photo"
          src="https://www.apinchofhealthy.com/wp-content/uploads/2021/09/Close-up-side-shot-of-styled-sandwich-2.jpg"
        ></img>
        <div>
          <h2 className="ingredients">Ingredients</h2>
          <ul>
            {recipe.ingredients.split(",").map((ingredient) => {
              return (
                <li key={ingredient}>
                  <label for={ingredient}> {ingredient} </label>
                  <input 
                  type="checkbox" 
                  id="ingredient"
                  value={ingredient}
                  onChange={handleChange}></input>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-sm-3 align-self-start">
          <h2 className="directions">Directions</h2>
          <p>{recipe.directions}</p>
        </div>
      </div>
    </div>
  );
};
