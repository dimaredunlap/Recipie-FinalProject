import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const [favorite, setFavorite] = useState([]);

  return (
    <div className="projcard-container">
      <div className="projcard projcard-blue">
        <div className="projcard-innerbox">
          <Link to={`/singleview/${props.recipe.id}`} className="link">
            <img className="projcard-img" src={props.recipe.url} />
          </Link>
          <div className="projcard-textbox">
            <div className="projcard-title">{props.recipe.title}</div>
            <div className="projcard-bar"></div>
            <div className="projcard-description">
              {props.recipe.description}
            </div>
          </div>
          <div>
            <button
              id="heart"
              className="bi bi-heart"
              onClick={() =>
                actions.postFavorite(props.recipe.id, props.recipe.name)
              }
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

// addFav: (drinkID, drinkName, user_id) => { 
//   let store = getStore()        
//   let favorite = getStore().favorites;        
//   const found = favorite.find((item) => item == drinkID);        
//   if (found) {alert("That drink exist");} else { fetch(process.env.BACKEND_URL + "/api/favorite",
//    {method: "POST", 
//    headers: {"Content-Type": "application/json",
//              "Authorization": `Bearer ${store.loggId?.access_token}`,},           
//              body: JSON.stringify({
//               drink_id: drinkID,
//               drink_name: drinkName,
//               user_id: user_id, 
//               is_done: false,}),          
//             })            
//             .then((response) => response.json())            
//             .then((data) => setStore({ favorites: data }))            
//             .catch((err) => console.log(err));
//           }}
