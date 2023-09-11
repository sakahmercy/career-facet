import React from "react";
import {NavLink, Link} from 'react-router-dom'
import {FaBell} from "react-icons/fa"
import { FaComment } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Logo from "../../assets/logo2.png"
import "../NavBar/navBar.css"



const Navbar = () => {
  return (  
    <nav className=" navbar navbar-expand-lg bg-light">
      <div className="col-12">
      <div className="container-fluid">
          <Link className="navbar-brand" to="#">
          <img src={Logo} alt="" className="logo2" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <NavLink className="nav-link active" aria-current="page" to="#">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/jobs">
                  Jobs
                </NavLink>
                <NavLink className="nav-link" to="/reviews">
                  Company reviews 
                </NavLink>
                <NavLink className="nav-link" to="salaries">
                  Find Salaries
                </NavLink>
            </ul>
          </div>
          <div className="navbar">
            <ul className="navbar-nav justify-content-end">
                <NavLink className="nav-link active" aria-current="page" to="#">
                <FaUser/>
                </NavLink>
                <NavLink className="nav-link" to="/jobs">
                  <FaBell/>
                </NavLink>
                <div className="btn-group">
                <NavLink className="nav-link" to="#">
                <FaComment/>
                </NavLink>
                </div>
                <NavLink className="nav-link" to="salaries">
                 Employer/Job seeker
                </NavLink>
            </ul>
          </div>
        </div>
      </div>
        
      </nav>
  );
}

 
export default Navbar;
