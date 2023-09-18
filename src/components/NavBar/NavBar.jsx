import React from "react";
<<<<<<< Updated upstream
import {NavLink, Link} from 'react-router-dom'
import {FaBell} from "react-icons/fa"
import { FaComment } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Logo from "../../assets/career_facet_logo.png"
import "../NavBar/navBar.css"



const Navbar = () => {
  return (  
    <nav className=" navbar navbar-expand-lg bg-white">
      <div className="col-12">
      <div className="container-fluid">
          <Link className="navbar-brand" to="#">
          <img src={Logo} alt="" className="nav_bar_logo" />
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
                <li className="nav-item">
                <div className="nav-separator"></div>
              </li>
                <NavLink className="nav-link" to="salaries">
                 Employer/Job seeker
                </NavLink>
            </ul>
          </div>
        </div>
      </div>  
      </nav>
=======
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { FaBell, FaComment } from "react-icons/fa";
import Logo from "../../assets/career_facet_logo.png";
import "../NavBar/navBar.css";
import DropDownItem from "./ProfileSettingsDropdown";

const MyNavbar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="#">
        <img src={Logo} alt="" className="nav_bar_logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" className="navbar-toggler" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
          <NavLink className="nav-link" to="/reviews">
            Company reviews
          </NavLink>
          <NavLink className="nav-link" to="/salaries">
            Find Salaries
          </NavLink>
        </Nav>
        <Nav>
          <DropDownItem />
          <Nav.Link href="/jobs">
            <FaBell />
          </Nav.Link>
          <div className="btn-group">
            <Nav.Link href="#">
              <FaComment />
            </Nav.Link>
            <Nav.Link href="/Create-account">Sign Up</Nav.Link>
          </div>
          <Nav.Link href="/salaries">Employer/Job seeker</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
>>>>>>> Stashed changes
  );
};



export default MyNavbar;