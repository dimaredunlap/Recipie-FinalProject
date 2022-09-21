import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/carouselCard.css";

function CarouselCard(props) {
  return (
    
            <div className="col-8 col-md-6 col-lg-4 me-lg-3 col-xl-3 me-xl-5 me-xxl-2 small-card-container">
                <div className="card small-card">
                    <img src="https://via.placeholder.com/150" className="card-img-top small-img" alt=""></img>
                    <div className="card-body  small-card-body">
                        <p className="h1">{props.title}</p>
                        <p className='p-small-card'>{props.description}</p>
                         <Link to={`/singleview/${props.id}`} >
                        <a href="/" className="btn btn-small reg-btn btn-grad">Check recipe out!</a>
                        </Link>
                    </div>
                </div>
            </div>
  )
}

export default CarouselCard