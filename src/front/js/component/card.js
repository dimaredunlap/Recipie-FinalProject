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
          <img
            className="projcard-img"
            src="https://picsum.photos/800/600?image=1041"
          />
          <div className="projcard-textbox">
            <div className="projcard-title">Card Title</div>
            <div className="projcard-subtitle">
              This explains the card in more detail
            </div>
            <div className="projcard-bar"></div>
            <div className="projcard-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="projcard-tagbox">
              <button className="bi bi-heart"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
