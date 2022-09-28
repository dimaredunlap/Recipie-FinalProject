import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { SelectedIngredients } from "../component/selectedIngredients";
import "../../styles/SelectedIngredients.css"


export const Glist = () => {
  {//JS Create a store for the grocerylist, when the checkbox is checked it will push that ingridient to the flux store. We will then call it here, pass through props.
  }


  
  let ingredients=["onions","cheese","meat","bun"]

  
  return (
    <div className="container recebox">
      <h1 className="listTitle">
        {//Recipe title
        }
        Grocery List 
      </h1>
      <SelectedIngredients className="items container-flex"ingredients={ingredients}/>
    </div>
  );
};
