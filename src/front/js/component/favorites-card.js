import React from "react";
import "../../styles/favorite.css"

export const FavCard= () => {
    return (
    <div className="col col-md-6 col-lg-4 col-xl-3 pb-4">
        <div className="card ">
            <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
            <div className="card-body p-0">
                <h5 className="card-title pt-3">Card title</h5>
                    <p className="card-text px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur placeat optio pariatur maxime nesciunt magni vero temporibus.</p>
                <div className="card-footer">
                        <a href="#" className="btn btn-fav btn-primary">Go to Recipie!</a>
                </div>
            </div>
        </div>
    </div>
            
    )
}