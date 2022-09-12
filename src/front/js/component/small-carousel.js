import React from 'react'
import CarouselCard from './carousel-card'
import "../../styles/smallCarousel.css";
function SmallCarousel() {
  return (
    <div className="container small-carousel">
        <div className="row small-carousel-container ">
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
        </div>
    </div>
  )
}

export default SmallCarousel