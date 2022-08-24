import React from "react";
import "../../styles/carousel.css";

export const Carousel = () => {
  return (
    <div
      id="carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-instant-pot-pot-roast-horizontal-1545249595.jpg?crop=0.617xw:0.925xh;0.0785xw,0&resize=640:*"
            className="d-block"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/steak-n-shake-7x7-steakburger.jpg?quality=82&strip=1"
            className="d-block"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://colonydiner.com/wp-content/uploads/2021/03/French.jpg"
            className="d-block"
            alt="..."
          ></img>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
