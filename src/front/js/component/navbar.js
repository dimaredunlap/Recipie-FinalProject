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
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
      </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Foodgasm</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-evenly flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Meal Type's</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Conctact Us!
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Email</a></li>
              <li><a class="dropdown-item" href="#">Slack</a></li>
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

