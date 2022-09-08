import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";

export const Card = (props) => {
  const [favorite, setFavorite] = useState([]);
  return (
    <div class="projcard-container">
      <div class="projcard projcard-blue">
        <div class="projcard-innerbox">
          <img class="projcard-img" src="https://picsum.photos/800/600?image=1041" />
          <div class="projcard-textbox">
            <div class="projcard-title">Card Title</div>
            <div class="projcard-subtitle">This explains the card in more detail</div>
            <div class="projcard-bar"></div>
            <div class="projcard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div class="projcard-tagbox">
              <span class="projcard-tag">dinner</span>
              <span class="projcard-tag">dinner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  // <div xs={1} md={2} lg={4} className="g-4 container">
    //   <div className="card-image d-flex flex-row">
    //     <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-instant-pot-pot-roast-horizontal-1545249595.jpg?crop=0.617xw:0.925xh;0.0785xw,0&resize=640:*" className="card-img" alt="..." />
    //     <div className="card-body">
    //       <p className="card-text">Card Title</p>
    //       <button>SUBMIT</button>
    //     </div>
    //   </div>
    // </div>
