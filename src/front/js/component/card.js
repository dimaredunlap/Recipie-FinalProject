import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";

export const Card = (props) => {
  const [favorite, setFavorite] = useState([]);
  return (
    <div xs={1} md={2} lg={4} className="g-4 container">
      <div className="card-image d-flex flex-row">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-instant-pot-pot-roast-horizontal-1545249595.jpg?crop=0.617xw:0.925xh;0.0785xw,0&resize=640:*" className="card-img" alt="..." />
        <div className="card-body">
          {/* <h5 className="card-title">{props.name}</h5> */}
          <p className="card-text">Card Title</p>
          <div className="card-end">
            <button>
              <i className="bi bi-heart-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
