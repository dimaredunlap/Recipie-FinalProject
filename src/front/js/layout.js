import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";
import { Home } from "./View/home";

import { FormPage } from "./View/form";
import { Register } from "./View/register.js";
import { Login } from "./View/login.js";
import { Navbar } from "./component/navbar";
import injectContext from "./store/appContext";

import { Favorite } from "./View/favorite.js";
import { MealType } from "./View/mealType.js";
import { SingleView } from "./View/singleView.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  const {store, actions} = useContext(Context)
    let snacks = store.recipes.filter((recipe) => recipe.category === "snacks")
    let dinner = store.recipes.filter((recipe) => recipe.category === "dinner")
    let breakfast = store.recipes.filter((recipe) => recipe.category === "breakfast")
    let lunch = store.recipes.filter((recipe) => recipe.category === "lunch")
    let dessert = store.recipes.filter((recipe) => recipe.category === "dessert")
    let drinks = store.recipes.filter((recipe) => recipe.category === "drinks")

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<FormPage />} path="/Formpage" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<Favorite />} path="/favorite" />
            <Route element={<SingleView />} path="/singleview/:id" />
            <Route element={<MealType title="Snacks" mtype={snacks} />} exact path="/snacks" />
            <Route element={<MealType title="Breakfast" mtype={breakfast}/>} exact path="/breakfast" />
            <Route element={<MealType title="Lunch" mtype={lunch}/>} exact path="/lunch" />
            <Route element={<MealType title="Dinner" mtype={dinner}/>} exact path="/dinner" />
            <Route element={<MealType title="Dessert" mtype={dessert}/>} exact path="/dessert" />
            <Route element={<MealType title="Drinks" mtype={drinks}/>} exact path="/drinks" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
