import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { SelectedIngredients } from "../component/selectedIngredients";
import "../../styles/SelectedIngredients.css"


export const Glist = () => {
  {//JS Create a store for the grocerylist, when the checkbox is checked it will push that ingridient to the flux store. We will then call it here, pass through props.
  }


  
  let ingredients=["onions","cheese","meat","bun"]

  
  return (
    <div class="container recebox">
      <h1 class="text-start">
        {//Recipe tittle
        }
        List 
      </h1>
      <SelectedIngredients ingredients={ingredients}/>
    </div>
  );
};
