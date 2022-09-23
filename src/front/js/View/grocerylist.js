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
     
     
      {/* <h1>Shopping List</h1>
    <p id="first">Get it done today</p>
    <input id="userinput" type="text" placeholder="enter items"/>
    <button id="enter">Enter</button>
    <ul id = "list"/>
        <li>Notebook<button class="btn">Delete</button></li><br/>
        <li>Jello<button class="btn">Delete</button></li><br/>
        <li>Spinach<button class="btn">Delete</button></li><br/>
        <li>Rice<button class="btn">Delete</button></li><br/>
        <li>Birthday Cake<button class="btn">Delete</button></li><br/>
        <li>Candles<button class="btn">Delete</button></li><br/>
    <ul/> */}

    </div>
  );
};
