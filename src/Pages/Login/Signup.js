import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import tools from "../../Images/landingpage.jpg";

function Signup() {
  const navigate = useNavigate();
  const navigateToSignin = () => {
    navigate("/");
  };

  return (
    <div className="Auth-form-container">
      <img
        src={tools}
        alt="Tools"
        className="tools"
        style={{ width: "50%", height: "100%" }}
      />
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">Sign Up</h2>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={navigateToSignin}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="String"
              className="form-control mt-1"
              placeholder="Username"
              id="username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              id="password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Re-Enter Password"
              id="passwordcheck"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
//}

export default Signup;
