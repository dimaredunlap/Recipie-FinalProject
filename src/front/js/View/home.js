import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carousel } from "../component/carousel";
import CarouselCard from "../component/carousel-card";
import SmallCarousel from "../component/small-carousel";
import { useEffect } from "react";


export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=> {
    actions.getAllRecipes()
    
  }, [])
  let snacks = store.recipes.filter((recipe) => recipe.category === "snacks")
    let dinner = store.recipes.filter((recipe) => recipe.category === "dinner")
    let breakfast = store.recipes.filter((recipe) => recipe.category === "breakfast")
    let lunch = store.recipes.filter((recipe) => recipe.category === "lunch")
    let dessert = store.recipes.filter((recipe) => recipe.category === "dessert")
    let drinks = store.recipes.filter((recipe) => recipe.category === "drinks")

    console.log(store.recipes)
    

  return (
    <div className="container text-center mt-5">
      <Carousel  />
      <h2>Breakfast</h2>
      <SmallCarousel routePath={breakfast} />
      <h2>Lunch</h2>
      <SmallCarousel routePath={lunch} />
      <h2>Dinner</h2>
      <SmallCarousel routePath={dinner} />
      <h2>Dessert</h2>
      <SmallCarousel routePath={dessert} />
      <h2>Drinks</h2>
      <SmallCarousel routePath={drinks} />
      <h2>Snacks</h2>
      <SmallCarousel routePath={snacks} />
    </div>
  );
};
