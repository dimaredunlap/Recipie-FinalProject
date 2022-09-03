import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { LoginUser } from "../Request/user.js";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/login.css";

let email = "";
let password = "";

export const Login = () => {
  let navigate = useNavigate();

  const userLogin = async () => {
    try {
      const user = {
        email: email,
        password: password,
      };
      const response = await LoginUser(user);
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("token", data);
      }
    } catch (err) {
      console.log("Login error: ", err);
    } finally {
      navigate("/");
    }
  };

  return (
    <div className="text-center container col-3 position-absolute top-50 start-50 translate-middle">
      <h1 className="mb-4">Login</h1>
      <div>
        <input
          type="text"
          className="login-input p-3 form-control mt-8"
          placeholder="Email"
          onChange={(e) => (email = e.target.value.toLowerCase())}
        />
        <input
          type="password"
          className="login-input p-3 mb-2 mt-3 form-control"
          placeholder="Password"
          onChange={(e) => (password = e.target.value)}
        />
        <button
          type="submit"
          className="login-button mb-2 mt-3"
          onClick={() => {
            userLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
