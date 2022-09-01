import React from 'react'
import "../../styles/favorite.css"
import {FavCard} from "../component/favorites-card"

function Favorite() {
  return (
    <>
    <div className="container">
      <h1 id="h1" className="">Favorite Dishes</h1>
      <div className="row d-flex flex-column align-items-center flex-md-row">
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
      </div>
      <h1 id="h1" className="">Favorite Drinks</h1>
      <div className="row d-flex flex-column align-items-center flex-md-row">
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
      </div>
    </div>
    </>
  )
}

export default Favorite