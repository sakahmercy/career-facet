import React from "react";
import logo from "../../assets/career_facet_logo.png";
import { Link } from "react-router-dom";
import "../JobSeekersPage/signup.css"


const JobSeekersSignUp = () => {
  return (
    <div className="signUpContainer">
      <div className="signUpForm">
        <img
          className="signUpLogo"
          src={logo}
          alt="logo"
          width="250"
          height="100"
        />
        <h2 className="signinFormTitle">Sign Up</h2>
        <form>
          <div className="form-group">
            <label for="email">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Phone number</label>
            <input
              type="text"
              className="form-control"
              id="number"
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Enter location"
              required
            />
          </div>
          <Link to = '/'>
          <button type="submit" className="btn btn-primary">
            SignIn
          </button>
          </Link>
          <Link to = '/JobSeekersLogin'>
            <button className="signUpButton">I have an account</button>
          </Link>
        </form>
      </div>
    </div>
  );
};



export default JobSeekersSignUp;
