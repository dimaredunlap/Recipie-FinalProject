import React from 'react'

function CarouselCard() {
  return (
    <div className="container ">
        <div className="row">
            <div className="col-4">
                <div className="card">
                    <img src="http://placehold.it/500x300" className="card-img-top" alt=""></img>
                    <div className="card-body">
                        <p className="h2">Card Tittle</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, aliquam!</p>
                        <a href="/" className="btn btn-reg btn-grad">Check recepi out!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarouselCard