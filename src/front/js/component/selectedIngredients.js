import React, {useState} from "react";
import "../../styles/SelectedIngredients.css";

export const SelectedIngredients = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className="col-5">
      <ul class="list-group">
        {props.ingredients.map((ingredient) => (
          <li class="list-group-item">
            {ingredient}
            <button
              className={hovered ? "visible": "invisible"}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
            ><i class="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
