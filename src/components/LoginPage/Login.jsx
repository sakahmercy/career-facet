import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/career_facet_logo.png";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError("Please enter your email.");
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please enter your password.");
    } else {
      setPasswordError("");
    }

    if (email && password) {
      console.log("Form submitted successfully");
    } 
  };

  return (
    <div className="Container login-bg">
      <div className=" row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
          <form className="border custom-form-content" onSubmit={handleSubmit}>
            <div className="text-center">
              <img
                className="signuplogo image-fluid"
                src={logo}
                alt="Logo"
                width="250"
                height="100"
              />
            </div>
            <h2 className="text-center mb-4">Login</h2>
            <div className="form-group">
              <label htmlFor="email">
                <span className="font-weight-bold-sign-up">Email</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {emailError && <div className="text-danger">{emailError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <span className="font-weight-bold-sign-up">Password</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {passwordError && <div className="text-danger">{passwordError}</div>}
            </div>
            {error && <div className="text-danger mb-3">{error}</div>}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/Job-seekers-signup">
              <button className="signUpButton">Create an account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};



export default Login;
