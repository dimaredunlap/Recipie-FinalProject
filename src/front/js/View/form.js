import React from "react";
import "../../styles/form.css"
export  const FormPage = () => {
    return(
      <>
      <header>
      <h1 class="heading">Submit your recipe to Foodgasm</h1>
      </header>
      <div class=" container mt-5">
      
        <form class="row g-3 mb-8" />

        <div class="rtitle">
          <label for="rtitle">Recipe Title:</label>
          <input class="form-control input-sm" id="rtitle" type="text" />
        </div>

        <div class="nos">
          <label for="servings">Number of Servings:</label>
          <input class="form-control input-sm" id="servings" type="text" />
        </div>

        <div class="ing">
          <label for="ingre">Ingredients</label>
          <textarea class="form-control input-sm" id="ingre" rows="3" type="textarea" />
        </div>

        <div class="direct">
          <label for="directions">Directions</label>
          <textarea class="form-control input-sm" id="directions" rows="3" type="textarea" />
        </div>

        <div class="preptime">
          <label for="preptime">Prep Time</label>
          <input class="form-control input-sm" id="preptime" type="text" />
        </div>

        <div class="cooktime">
          <label for="cooktime">Cook time</label>
          <input class="form-control input-sm" id="cooktime" type="text" />
        </div>

        <div class="totaltime">
          <label for="totaltime">Total Time</label>
          <input class="form-control input-sm" id="totaltime" type="text" />
        </div>

        <div class="credit">
          <label for="credit">Credit</label>
          <input class="form-control input-sm" id="credit" type="text" />
        </div>



        <button>Submit</button>

        <form />
      </div></>


    )
}
