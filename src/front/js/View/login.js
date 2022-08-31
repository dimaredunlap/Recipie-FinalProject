import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="login">
      <form action="/action_page.php">
        <div className="mb-3 mt-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"></input>
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember"> Remember me </input>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
