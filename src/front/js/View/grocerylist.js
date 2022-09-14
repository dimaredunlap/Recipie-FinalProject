import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { SelectedIngredients } from "../component/selectedIngredients";

export const Glist = () => {
  let ingredients=["onions","cheese","meat","bun"]
  return (
    <div>
      <h1>
        List 
      </h1>
      <SelectedIngredients ingredients={ingredients}/>
    </div>
  );
};
