import React from 'react';
import logo from "../../assets/career_facet_logo.png";
import { Link } from "react-router-dom";
import "./signup.css"

const SignUp = () => {
  return ( 
    <div className="Container sign-up-bg">
      <div className=" row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
          <form className="border custom-form-content">
            <div className="text-center">
              <img
                className="signuplogo image-fluid"
                src={logo}
                alt="Logo"
                width="250"
                height="100"
              />
            </div>
            <h2 class="text-center mb-4">Sign Up</h2>
            <div class="form-group">
              <label for="username">
                <span className="font-weight-bold-sign-up">Username</span>
              </label>
              <input
                type="username"
                class="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group">
              <label for="email">
                <span className="font-weight-bold-sign-up">Email</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="form-group">
              <label for="password">
                <span className="font-weight-bold-sign-up">Password</span>
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="form-group">
              <label for="number">
                <span className="font-weight-bold-sign-up">Phone number</span>
              </label>
              <input
                type="number"
                class="form-control"
                id="number"
                placeholder="Enter phone number"
              />
            </div>
          <Link to = '/'>
          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
          </Link>
          <Link to = '/Job-seekers-login'>
            <button className="signUpButton">I have an account</button>
          </Link>
        </form>
        </div>
      </div>
    </div>
   );
}
 


export default SignUp;
