import React from "react";
import "../../styles/navbar.css";
import background from "../../img/layered-waves.jpg";
import moon from "../../img/Light-mode-moon.png";


export const Navbar = () => {
  return (
    <>
    <nav id="navbar" className="navbar fixed-top navbar-expand-xl d-flex justify-content-evenly">
    <div className="container-lg">
      {/* Header/logo */}
      <a className="navbar-brand mb-0 h1">Foodgasm</a>
      {/* Search bar */}
      <input className="search ms-5" type="text" placeholder="Search.."></input>
      {/* Dark/Light mode button */}
    <div className="navMoon" style={{backgroundImage: `url(${moon})`}}>
    </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
      </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Foodgasm</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-evenly flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Meal Types</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Conctact Us!
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Email</a></li>
              <li><a className="dropdown-item" href="#">Slack</a></li>
              <li>
                
              </li>
            </ul>
          </li>
        </ul>
        <button type="button" className="btn btn-dark register">
        Register
        </button>
        <button type="button" className="btn btn-dark login">
        Login
        </button>
      </div>
    </div>
  </div>
</nav>
<div className="navWaves" style={{backgroundImage: `url(${background})`}}></div>
    </>
  
  );
};

