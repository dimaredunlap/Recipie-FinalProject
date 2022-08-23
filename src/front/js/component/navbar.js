import React from "react";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <div className="container-fluid">
      <h2>Logo</h2>
      <input class="search" type="text" placeholder="Search.."></input>
      <a href="#category" class="category">Category</a>
      <a href="#Contact" class="contact">Contact</a>
      <button type="button" class="btn btn-dark register">
        Register
      </button>
      <button type="button" class="btn btn-dark login">
        Login
      </button>
    </div>
  );
};
