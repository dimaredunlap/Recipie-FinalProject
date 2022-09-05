import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { RegisterUser } from "../Request/user.js";
import { useNavigate } from "react-router-dom";
import "../../styles/register.css"

let emails = "";
let passwords = "";
let usernames = "";

export const Register = () => {

    let navigate = useNavigate();

    const handleChange = async (e) => {
        try {
            const user = {
                email: emails,
                password: passwords,
                username: usernames
            }
            e.preventDefault()
            await RegisterUser(user)
            navigate("/login")

        } catch { (err) => console.log(err) }

    };

  return (
    <div className="text-center mt-5">
      <h1>Register</h1>
      <div>
      <form onSubmit={handleChange}>
        
        <input onChange={(e) => username = e.target.value} className="form-control" id="username" type="text" placeholder="Username" name="username" />
        <input onChange={(e) => emails = e.target.value} className="form-control" id="email" type="text" placeholder="Email" name="email" />
        <input onChange={(e) => passwords = e.target.value} className="form-control" id="password" type="password" placeholder="Password" name="password" />
        {/* <input
          type="password"
          placeholder="confirm password"
          onChange={(e) => passwords = e.target.value}
        /> */}
        <button className="btn btn-primary" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
