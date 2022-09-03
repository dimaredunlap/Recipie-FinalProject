import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = (props) => {
  const [favorite, setFavorite] = useState([]);
  return (
    <div xs={1} md= {2} lg={4} className="g-4 container">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          {/* <h5 className="card-title">{props.name}</h5> */}
          <p className="card-text">
            Card Title
          </p>
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
