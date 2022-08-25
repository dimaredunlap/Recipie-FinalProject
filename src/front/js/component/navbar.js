import React from "react";
import "../../styles/navbar.css";
import background from "../../img/layered-waves.jpg";
import moon from "../../img/Light-mode-moon.png";

export const Navbar = () => {
  return (
    <>
    <div id="navbar" className="navbar d-flex justify-content-evenly">
        <h2>Foodgasm</h2>
        <input className="search" type="text" placeholder="Search.."></input>
        <a href="#category" className="category">
        Category
        </a>
        <a href="#Contact" className="contact">
        Contact
        </a>
        <div className="navMoon" style={{backgroundImage: `url(${moon})`}}></div>
        <button type="button" className="btn btn-dark register">
        Register
        </button>
        <button type="button" className="btn btn-dark login">
        Login
        </button>
    </div>
    <div className="navWaves" style={{backgroundImage: `url(${background})`}}></div>
    </>
  
  );
};
