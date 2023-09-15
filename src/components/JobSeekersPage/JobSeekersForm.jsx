import React from "react";
import logo from "../../assets/career_facet_logo.png";
import { Link } from "react-router-dom";
import "../JobSeekersPage/form.css"


const JobSeekersForm = () => {
  return (
    <div className="jobseekersform-container container">
      <div className=" row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
          <form className="jobseekersform-content">
            <div className="text-center">
              <img
                className="signuplogo image-fluid"
                src={logo}
                alt="Logo"
                width="250"
                height="100"
              />
            </div>
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
            <div class="form-group">
              <label for="location">
                <span className="font-weight-bold-sign-up">Location</span>
              </label>
              <input
                type="location"
                class="form-control"
                id="location"
                placeholder="Enter location"
              />
            </div>
          <Link to = '/'>
          <button type="submit" className="btn btn-primary">
            Create account
          </button>
          </Link>
        </form>
        </div>
      </div>
    </div>
  );
};



export default JobSeekersForm;
