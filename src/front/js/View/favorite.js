import React, { useEffect, useContext } from "react";
import { useState } from "react";
import "../../styles/favorite.css";
import { FavCard } from "../component/favorites-card";
import { Context } from "../store/appContext";

export const Favorite = () => {
  const {store, actions} = useContext(Context);
  const [favorites, setFavorite] = useState(null);
  useEffect(() => {
    actions.getAllRecipes()

  }, [])
  useEffect(() => {
    actions.getAllFavorites()
  }, [])
  console.log(`Recipes ${store.recipes}`)
  console.log(`Favorite List: ${store.favorite}`);


  return (
    <>
      <div className="container">
        <h1 id="h1" className="">
          Favorites
        </h1>
        <div className="row d-flex flex-column align-items-center flex-md-row">
          <FavCard />
        </div>
      </div>
    </>
  );
};
