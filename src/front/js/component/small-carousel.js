import React from 'react'
import CarouselCard from './carousel-card'
import "../../styles/smallCarousel.css";
import { useContext } from 'react';
import { Context } from '../store/appContext';
function SmallCarousel(props) {
  const { store , actions} = useContext(Context)
  return (
    <div className="container small-carousel">
        <div className="row small-carousel-container ">
            {props.routePath.map((result) => {
              return(
                <CarouselCard key={result.id} routePath={props.routePath} title={result.title} id={result.id} description={result.description} />
              )
            })}
        </div>
    </div>
  )
}

export default SmallCarousel