import React, { useState } from "react";
import "../../styles/SelectedIngredients.css";

export const SelectedIngredients = (props) => {
  const [hovered, setHovered] = useState(false);
  const [ingredients, setIngredients] = useState(props.ingredients);

  function deleteItem(index) {
    setIngredients(ingredients.filter((ingredient, idx) => idx != index));
  }

  return (
    <div className="col-5">
      <ul className="list-group">
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="d-flex list-group-item"
          >
            <span>{ingredient}</span>
            <div className="ms-auto">
              <i
                onClick={() => deleteItem(index)}
                className={
                  hovered ? "visible fas fa-ban ms-auto" : "invisible "
                }
              ></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
