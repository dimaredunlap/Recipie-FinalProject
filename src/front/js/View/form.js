import React from "react";
export  const FormPage = () => {
    return(
        <div class=" container mt-5">
            <h1>Submit your recipe to Foodgasm</h1>
            

           

  <form class="row g-3"/>
  <div class="col-md-6">
  <label for="rtitle">Recipe Title:</label>
  <input type="text" id="rtitle" name="rtitle" required placeholder="Hambuger"/>
  </div>
  <div class="col-md-6">
  <label for="nservings">Number of Servings *:</label>
  <input type="text" id="nservings" name="nservings"/>
  </div>
  <div class="col-md-12">
  <label for="ingre">Ingredients *:</label>
  <input type="text" id="ingre" name="ingre"/>
  </div>
  <div class="col-md-12">
  <label for="direct">Directions *:</label>
  <input type="text" id="direct" name="direct"/>
  </div>
  
  
<button>Submit</button>

<form/>
        </div>


    )
}
