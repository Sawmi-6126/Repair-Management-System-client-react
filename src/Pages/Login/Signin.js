import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import tools from "../../Images/landingpage.jpg";
import axios from "axios";

const Signin = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate("/signup");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:5000/", data).then((response) => {
      console.log(response.data);
      window.alert("You Logged into the system");
    });
    navigate("/dashboard");
  };

  return (
    <div className="Auth-form-container">
      <img
        src={tools}
        alt="Tools"
        className="tools"
        style={{ width: "50%", height: "100%" }}
      />
      <form className="Auth-form" onSubmit={login}>
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Login</h1>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={navigateToSignup}>
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3"></div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
