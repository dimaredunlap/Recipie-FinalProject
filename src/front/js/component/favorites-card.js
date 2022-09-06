import React from "react";
import "../../styles/favorite.css"

export const FavCard= () => {
    return (
    <div className="col col-md-6 col-lg-4 col-xl-3 pb-4">
        <div class="card ">
            <img src="http://via.placeholder.com/500x325" class="card-img-top" alt="..."/>
            <div class="card-body p-0">
                <h5 class="card-title pt-3">Card title</h5>
                    <p class="card-text px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur placeat optio pariatur maxime nesciunt magni vero temporibus.</p>
                <div class="card-footer">
                        <a href="#" class="btn btn-primary">Go to Recipie!</a>
                </div>
            </div>
        </div>
    </div>
            
    )
}