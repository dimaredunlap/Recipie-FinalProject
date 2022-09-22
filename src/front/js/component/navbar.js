import React, {useState} from "react";
import "../../styles/navbar.css";
import background from "../../img/layered-waves.jpg";
import logo from "../../img/Foodgasm-logo.png";
import moon from "../../img/Light-mode-moon.png";
import { useNavigate, Link, NavLink, Navigate } from "react-router-dom";

export const Navbar = (props) => {
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
  const [inputValue, setInputValue] = useState ("")
  const onSubmit = (onKeyDownEvent) => {
    if (onKeyDownEvent.keyCode === 13) {
      let newSearch = onKeyDownEvent.target.value;
      props.setQuery(newSearch);
      setInputValue("");
      navigate ("/search")
    }
  };
  return (
    <>
      <nav
        id="navbar"
        className="navbar fixed-top navbar-expand-xl d-flex justify-content-evenly"
      >
        <div className="container-lg">
          {/* Header/logo */}
          <Link to="/">
            <img className="logo" src={logo}></img>
          </Link>

          {/* Search bar */}
          <input
            className="search ms-5"
            type="text"
            placeholder="Search.."
            onKeyDown={onSubmit}
            onChange={e => setInputValue(e.target.value)}
		        value={inputValue}
          ></input>
          {/* Dark/Light mode button */}
          <div
            className="navMoon"
            style={{ backgroundImage: `url(${moon})` }}
          ></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Foodgasm
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-evenly flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
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
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Conctact Us!
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Email
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Slack
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </li>
              </ul>
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
            </div>
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
