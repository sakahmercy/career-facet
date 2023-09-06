import React, { Component } from "react";
import {NavLink, Link} from 'react-router-dom'
import logo from "./assets/logo.png"
import message from "./assets/message.png"
import notification from "./assets/notification.png"
import profile from "./assets/profile.png"

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
          <img src={logo} alt="" style={{ width: "200px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <NavLink className="nav-link active" aria-current="page" to="#">
                <img src={message} alt="" style={{ width: "20px" }} />
                </NavLink>
                <NavLink className="nav-link" to="/jobs">
                <img src={notification} alt="" style={{ width: "20px" }} />
                </NavLink>
                <div className="btn-group">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src={profile} alt="" style={{ width: "20px" }} />
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" href="#">Action</Link></li>
                <li><Link class="dropdown-item" href="#">Another action</Link></li>
                <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                <li><Link class="dropdown-item" href="#">Separated link</Link></li>
              </ul>
                </NavLink>
                </div>
                <NavLink className="nav-link" to="salaries">
                 Employer/Job seeker
                </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
