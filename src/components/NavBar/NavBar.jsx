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
  );
};



export default MyNavbar;