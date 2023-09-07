import React from "react";
import "../styles/navBar.css"
import {NavLink, Link} from 'react-router-dom'
import Logo from "./assets/logo.png"
import MessageIcon from "./assets/message.png"
import NotificationIcon from "./assets/notification.png"
import ProfileIcon from "./assets/profile.png"



const Navbar = () => {
  return (  
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
          <img src={Logo} alt="" className="logo" />
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-end">
                <NavLink className="nav-link active" aria-current="page" to="#">
                <img src={MessageIcon} alt=""className="navIcon" />
                </NavLink>
                <NavLink className="nav-link" to="/jobs">
                <img src={NotificationIcon} alt=""className="navIcon"  />
                </NavLink>
                <div className="btn-group">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src={ProfileIcon} alt="" className="navIcon" />
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
 
export default Navbar;
