import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import tools from "../../Images/landingpage.jpg";
import axios from "axios";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";

function Signup() {
  const navigate = useNavigate();
  const navigateToSignin = () => {
    navigate("/");
  };

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(5).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/signup", data).then(() => {
      console.log(data);
      window.alert("User Registered Successfully");
      navigate("/");
    });
  };

  return (
    <div className="Auth-form-container">
      <img
        src={tools}
        alt="Tools"
        className="tools"
        style={{ width: "50%", height: "100%" }}
      />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="Auth-form">
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
              <Field
                type="String"
                className="form-control mt-1"
                placeholder="Username..."
                id="username"
                name="username"
                autoComplete="off"
              />
              <ErrorMessage name="username" />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <Field
                type="password"
                className="form-control mt-1"
                placeholder="Password..."
                id="password"
                name="password"
                autoComplete="off"
              />
              <ErrorMessage name="password" />
            </div>
            {/* <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Re-Enter Password"
                id="passwordcheck"
              />
            </div> */}
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
//}

export default Signup;
