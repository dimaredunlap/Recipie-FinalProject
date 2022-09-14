import React from "react";
import "../../styles/SelectedIngredients.css";

export const SelectedIngredients = (props) => {
  return (
    <div className="container">
      <ul class="list-group">
        {props.ingredients.map((ingredient) => (
          <li class="list-group-item">{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};
