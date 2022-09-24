import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";

export const Card = (props) => {
  const [favorite, setFavorite] = useState([]);

  return (
    <div className="projcard-container">
      <div className="projcard projcard-blue">
        <div className="projcard-innerbox">
          <Link to={`/singleview/${props.recipe.id}`} className="link">
          <img
            className="projcard-img"
            src={props.recipe.url}
          />
          </Link>
          <div className="projcard-textbox">
            <div className="projcard-title">{props.recipe.title}</div>
            <div className="projcard-bar"></div>
            <div className="projcard-description">{props.recipe.description}</div>
          </div>
          <div>
              <button id="heart" className="bi bi-heart"></button>
          </div>
        </div>
      </div>
    </div>
  );
};
