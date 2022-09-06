import React from "react";
import "../../styles/form.css"
export  const FormPage = () => {
    return(
      <div class="container form mt-5">
          <div className="h1-container">
          <h1 class="heading">Submit your recipe to Foodgasm</h1>
          </div>
          <div class=" container mt 8">
          
            <form class="row g-8 mb-100" />

            <div class="rtitle mt-4">
              <label for="rtitle">Recipe Title:</label>
              <input class="form-control input-sm" id="rtitle" type="text" />
            </div>

            <div class="nos mt-2">
              <label for="servings">Number of Servings:</label>
              <input class="form-control input-sm" id="servings" type="text" />
            </div>

            <div class="ing mt-2">
              <label for="ingre">Ingredients:</label>
              <textarea class="form-control input-sm" id="ingre" rows="3" type="textarea" />
            </div>

            <div class="direct mt-2">
              <label for="directions">Directions:</label>
              <textarea class="form-control input-sm" id="directions" rows="3" type="textarea" />
            </div>

            <div class="preptime mt-2">
              <label for="preptime">Prep Time:</label>
              <input class="form-control input-sm" id="preptime" type="text" />
            </div>

            <div class="cooktime mt-2">
              <label for="cooktime">Cook time:</label>
              <input class="form-control input-sm" id="cooktime" type="text" />
            </div>

            <div class="totaltime mt-2">
              <label for="totaltime">Total Time:</label>
              <input class="form-control input-sm" id="totaltime" type="text" />
            </div>

            <div class="credit mt-2">
              <label for="credit">Credit:</label>
              <input class="form-control input-sm" id="credit" type="text" />
            </div>

            <div>
            <form className="mt-2">

              <label className="pe-2" for="menu type">Type of meal:</label>
              <select name="mealtype" id="mealtype">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Desserts</option>
                <option value="snacks">Snacks</option>
                <option value="drinks">Drinks</option>

               </select>
              </form>


          </div>


            <label class="customFile mt-3" for="customFile">Submit Photo Here</label>
            <input type="file" class="form-control my-3" id="customFile" />
            <div>
            <button className="btn my-3">Submit</button>
            </div>


            <form />
          </div>
      


     </div>
    );
};

