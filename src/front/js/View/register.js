import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";

export const Register = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="login">
      <form action="/action_page.php">
        <div className="mb-3 mt-3">
          <label>Email:</label>
          <input type="text" name="name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="text" name="name" />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
          <input className="form-check-input" type="checkbox" name="remember"> Remember me </input>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

<form action="/action_page.php">
  <div className="mb-3 mt-3">
    <label>Email:</label>
    {/* <input text="email" className="form-control" id="email" placeholder="Enter email" name="email"></input> */}
  </div>
  <div className="mb-3">
    <label className="form-label">Password:</label>
    {/* <input text="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"></input> */}
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      {/* <input className="form-check-input" text="checkbox" name="remember"> Remember me </input> */}
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>;
