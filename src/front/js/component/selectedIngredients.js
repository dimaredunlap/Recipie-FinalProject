import React, { useState } from "react";
import "../../styles/SelectedIngredients.css";

export const SelectedIngredients = (props) => {
  const [hovered, setHovered] = useState(false);
  const [ingredients, setIngredients] = useState(props.ingredients);

  function deleteItem(index) {
    setIngredients(ingredients.filter((ingredient, idx) => idx != index));
  }

  function visibilityChanger(index){
    let element= document.getElementById("icon"+index)
      // if(element.classList.("invisible")){
      //   element.classList= "visible fas fa-ban ms-auto"
      // }
      // else{
      //   element.classList= "invisible"
      // }
      element.classList.toggle("visible")
  }


  return (
    <div className="col-5">
      <ul className="list-group">
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            onMouseEnter={() => visibilityChanger(index)}
            onMouseLeave={() => visibilityChanger(index)}
            className="d-flex list-group-item"
          >
            <span>{ingredient}</span>
            <div className="ms-auto">
              <i
              id={"icon"+index}
                onClick={() => deleteItem(index)}
              ></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
