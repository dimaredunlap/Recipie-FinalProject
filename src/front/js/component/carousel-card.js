import React from 'react'
import "../../styles/carouselCard.css";

function CarouselCard() {
  return (
    
            <div className="col-3 small-card-container">
                <div className="card small-card">
                    <img src="https://via.placeholder.com/150" className="card-img-top small-img" alt=""></img>
                    <div className="card-body  small-card-body">
                        <p className="h2">Card Tittle</p>
                        <p className='p-small-card'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, aliquam!</p>
                        <a href="/" className="btn btn-small reg-btn btn-grad">Check recipe out!</a>
                    </div>
                </div>
            </div>
  )
}

export default CarouselCard