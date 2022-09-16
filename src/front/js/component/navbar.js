import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/navbar.css";
import background from "../../img/layered-waves.jpg";
import logo from "../../img/Foodgasm-logo.png";
import moon from "../../img/Light-mode-moon.png";
import { useNavigate, Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  function navToReg() {
    navigate("/register");
  }
  function navToLog() {
    navigate("/login");
  }
  function navToHome() {
    navigate("/home");
  }
  return (
    <>
      <nav
        id="navbar"
        className="navbar fixed-top navbar-expand-lg d-flex justify-content-center flex-row "
      >
        <div className="container-md mt-lg-5 flex-row justify-content-start justify-content-sm-evenly">
        <Link to="/">
            <img className="logo navbar-brand" src={logo}></img>
          </Link>

          {/* Search bar */}
          <input
            className="search ms-md-2 flex-grow-0 flex-sm-grow-1 me-3 me-sm-5 me-md-5"
            type="text"
            placeholder="Search.."
          ></input>
          {/* Dark/Light mode button */}
          {/* <div className="navMoon" style={{ backgroundImage: `url(${moon})` }}>
            </div> */}

          {/* Nav bar drop down */}
          <div class="d-flex align-items-center">
          <ul id="navbarTogglerDemo02"className=" navbar-nav justify-content-evenly  ">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle pe-md-5"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    Meal Types
                  </a>
                  <ul className="dropdown-menu">
                    <Link to="/breakfast" className="link">
                      <li className="dropdown-item link-item">Breakfast</li>
                    </Link>
                    <Link to="/lunch" className="link">
                      <li className="dropdown-item">Lunch</li>
                    </Link>
                    <Link to="/dinner" className="link">
                      <li className="dropdown-item">Dinner</li>
                    </Link>
                    <Link to="/dessert" className="link">
                      <li className="dropdown-item">Desserts</li>
                    </Link>
                    <Link to="/drinks" className="link">
                      <li className="dropdown-item">Drinks</li>
                    </Link>
                    <Link to="/snacks" className="link">
                      <li className="dropdown-item">Snacks</li>
                    </Link>
                  </ul>
                </li>
              </ul>

              {store.token === null ? (
            <>
                
                  <button
                    type="button"
                    onClick={navToReg}
                    className="btn btn-dark register"
                    >
                    Register
                  </button>
                  <button
                    type="button"
                    onClick={navToLog}
                    className="btn btn-dark login"
                    >
                    Login
                  </button>
                </>
              ) : (
                <>
                <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-person-circle"></i></button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li className="dropdown-item">Grocery list</li>
                  <li className="dropdown-item">Favorites</li>
                  <button className="dropdown-item">logout</button>
                </ul>
                </div>
                </>
              )}
            </div>
        </div>
      </nav>
      <div
        className="navWaves"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
    </>
  );
};


