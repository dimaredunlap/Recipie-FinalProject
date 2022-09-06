import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./View/home";
import { Register } from "./View/register.js";
import { Login } from "./View/login.js";
import { Navbar } from "./component/navbar";
import injectContext from "./store/appContext";

import {Favorite} from "./View/favorite.js";
import { Breakfast } from "./View/breakfast";
import { Lunch } from "./View/lunch";
import { Dinner } from "./View/dinner";
import { Dessert } from "./View/dessert";
import { Snacks } from "./View/snacks";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<Favorite />} path="/favorite" />
            <Route element={<Breakfast />} exact path="/breakfast" />
            <Route element={<Lunch />} exact path="/lunch" />
            <Route element={<Dinner />} exact path="/dinner" />
            <Route element={<Dessert />} exact path="/dessert" />
            <Route element={<Snacks />} exact path="/snacks" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
