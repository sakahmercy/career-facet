import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/career_facet_logo.png";
import "../LoginPage/login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <h1 className="loginHeader">CAREER-FACET</h1>
      <div className="loginForm">
        <img
          className="loginLogo"
          src={logo}
          alt="logo"
          width="250"
          height="100"
        />
        <h2 className="loginFormTitle">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <Link to="/JobseekersSignUp">
            <button className="loginButton">Create account</button>
          </Link>
        </form>
      </div>
    </div>
  );
};



export default Login;
