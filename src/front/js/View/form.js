import React from "react";
export  const FormPage = () => {
    return(
        <div>
            <h1>Submit your recipe to Foodgasm</h1>

<form action="/action_page.php" method="post" target="_blank"/>
  <label for="rtitle">Recipe Title:</label>
  <input type="text" id="rtitle" name="rtitle"/>
  <label for="nservings">Number of Servings *:</label>
  <input type="text" id="nservings" name="nservings"/>
  <label for="ingre">Ingredients *:</label>
  <input type="text" id="ingre" name="ingre"/>
  <label for="direct">Directions *:</label>
  <input type="text" id="direct" name="direct"/>
<button>Submit</button>

<form/>
        </div>


    )
}
