import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-3">
            <h3>General</h3>
            <NavLink className="nav-link" to="">
              <p>Sign Up</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>Help Center</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>About Us</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>Careers</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>Developers</p>
            </NavLink>
          </div>
          <div className="col-sm-3">
            <h3>Brouse Career-Facet</h3>
            <NavLink className="nav-link" to="">
              <p>Jobs</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>Salaries</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>Company Reviews</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>Services</p>
            </NavLink>
          </div>
          <div className="col-sm-3">
            <h3>Business solutions</h3>
            <NavLink className="nav-link" to="">
              <p>Talent</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>Marketing</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <FaGoogle />
            </NavLink>
            <NavLink className="nav-link" to="">
              <FaGooglePlay />
            </NavLink>
          </div>
          <div className="col sm-3">
            <h3>Directories</h3>
            <NavLink className="nav-link" to="">
              <p>Posts</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>News</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>People search</p>
            </NavLink>
          </div>
          <div className="col sm-3">
            <h3>Apps</h3>
            <NavLink className="nav-link" to="">
              <p>©2023 Career-Facet</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>Accessibility at Career-facet</p>
            </NavLink>
            <NavLink className="nav-link" to="">
              <p>Your privacy</p>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;



