import React from "react";
import { useState, useContext} from "react";
import "../../styles/form.css";
import { Context } from "../store/appContext";

export const FormPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [mealType, setMealType] = useState("");
  const [credit, setCredit] = useState("");
  const [url, setUrl] = useState("");
  const {actions} = useContext(Context);

  function onsubmit() {
    fetch(`${process.env.BACKEND_URL}/api/recipe`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        servings: servings,
        prep_time: prepTime,
        cook_time: cookTime,
        total_time: totalTime,
        ingredients: ingredients,
        directions: directions,
        category: mealType,
        url: url,
      }),
    }) 
    .then((res) => res.json())
    .then((res) => {
      actions.setRecipes(res);
    })
  }
  return (
    <div className="container form mt-5">
      <div className="h1-container">
        <h1 className="heading">Submit your recipe to Foodgasm</h1>
      </div>
      <div className=" container mt 8">
        <form className="row g-8 mb-100" />

        <div className="rtitle">
          <label htmlFor="rtitle">Recipe Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control input-sm"
            id="rtitle"
            type="text"
          />
        </div>

        <div className="descrip">
          <label htmlFor="description">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control input-sm"
            id="description"
            rows="3"
            type="textarea"
          />
        </div>

        <div className="nos">
          <label htmlFor="servings">Number of Servings:</label>
          <input
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            className="form-control input-sm"
            id="servings"
            type="text"
          />
        </div>

        <div className="ing">
          <label htmlFor="ingre">Ingredients:</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="form-control input-sm"
            id="ingre"
            rows="3"
            type="textarea"
            placeholder="Separate each ingredient with a comma ','"
          />
        </div>

        <div className="direct">
          <label htmlFor="directions">Directions:</label>
          <textarea
            value={directions}
            onChange={(e) => setDirections(e.target.value)}
            className="form-control input-sm"
            id="directions"
            rows="3"
            type="textarea"
            placeholder="Separate each step with a comma ','"
          />
        </div>

        <div className="preptime">
          <label htmlFor="preptime">Prep Time:</label>
          <input
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            className="form-control input-sm"
            id="preptime"
            type="text"
          />
        </div>

        <div className="cooktime">
          <label htmlFor="cooktime">Cook time:</label>
          <input
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            className="form-control input-sm"
            id="cooktime"
            type="text"
          />
        </div>

        <div className="totaltime">
          <label htmlFor="totaltime">Total Time:</label>
          <input
            value={totalTime}
            onChange={(e) => setTotalTime(e.target.value)}
            className="form-control input-sm"
            id="totaltime"
            type="text"
          />
        </div>

        <div className="credit">
          <label htmlFor="credit">Credit:</label>
          <input
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
            className="form-control input-sm"
            id="credit"
            type="text"
          />
        </div>

        <div>
          <form className="mt-2">
            <label htmlFor="menu type">Meal Type:</label>
            <select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              name="mealtype"
              id="mealtype"
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Desserts</option>
              <option value="snacks">Snacks</option>
              <option value="drinks">Drinks</option>
            </select>
          </form>
        </div>

        <label className="customFile" htmlFor="customFile">
          Submit Photo Url Here
        </label>
        <input value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="form-control input-sm"
            id="credit"
            type="text"/>
        <div>
          <button onClick={onsubmit} className="btn my-3 form-btn btn-grad">
            Submit
          </button>
        </div>

        <form />
      </div>
    </div>
  );
};
