import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carousel } from "../component/carousel";
import CarouselCard from "../component/carousel-card";
import SmallCarousel from "../component/small-carousel";


export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center mt-5">
      <Carousel  />
      <h2>Featured</h2>
      <SmallCarousel />
      <h2>Featured</h2>
      <SmallCarousel />
      <h2>Featured</h2>
      <SmallCarousel />
      <h2>Featured</h2>
      <SmallCarousel />
      <h2>Featured</h2>
      <SmallCarousel />
      <h2>Featured</h2>
      <SmallCarousel />
      <h2>Featured</h2>
      <SmallCarousel />
    </div>
  );
};
