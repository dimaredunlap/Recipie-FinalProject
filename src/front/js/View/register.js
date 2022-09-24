import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { RegisterUser } from "../Request/user.js";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/register.css"


export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault()
        try {
            const user = {
                email: email,
                password: password,
                username: username
            }
            await RegisterUser(user)
            navigate("/login")

        } catch { (err) => console.log(err) }

    };

  return (
  <div className="container d-flex justify-content-center align-self-center outter-form col-5 ">
    <div className="text-center container col w-auto">
      <h1 className="text-center my-2">Register</h1>
      <div className="container">
      <form onSubmit={handleSubmit}>
        
        <input onChange={(e) => setUsername(e.target.value)} 
        value={username}
        className="form-control p-3 my-3" id="username" type="text" placeholder="Username" name="username" />
        <input onChange={(e) => setEmail(e.target.value)} 
        value={email}
        className="form-control p-3 my-3" id="email" type="text" placeholder="Email" name="email" />
        <input onChange={(e) => setPassword(e.target.value)} 
        value={password}
        className="form-control p-3 my-3" id="password" type="password" placeholder="Password" name="password" />
        <button className="reg-btn btn-grad mb-2 mt-3" type="submit">Register</button>
        <Link to="/login">
        <button className="reg-btn btn-grad mb-2 mt-3" type="submit">Log in</button>
        </Link>
        </form>
      </div>
    </div>
  </div>
  );
};
