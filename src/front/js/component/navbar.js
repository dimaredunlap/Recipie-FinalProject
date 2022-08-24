import React from "react";
import "../../styles/navbar.css";
import background from "../../img/layered-waves.jpg";

export const Navbar = () => {
  return (
    <div className="container-fluid navImage navbar" style={{backgroundImage: `url(${background})`}}>
      <h2>Logo</h2>
      <input className="search" type="text" placeholder="Search.."></input>
      <a href="#category" className="category">
        Category
      </a>
      <a href="#Contact" className="contact">
        Contact
      </a>
      <button type="button" className="btn btn-dark register">
        Register
      </button>
      <button type="button" className="btn btn-dark login">
        Login
      </button>
    </div>
  );
};
