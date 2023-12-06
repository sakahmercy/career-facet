import { Nav, Navbar, NavLink } from "react-bootstrap";
import { FaBell, FaComment } from "react-icons/fa";
import Logo from "../../assets/career_facet_logo.png";
import DropDownItem from "./ProfileSettingsDropdown";
import "./navBar.css"


const MyNavbar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="#">
        <img src={Logo} alt="" className="nav_bar_logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" className="navbar-toggler" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link  href="/" exact>
            Home
          </Nav.Link>
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
          <Nav.Link href="/reviews" >
            Company reviews
          </Nav.Link>
          <NavLink href="/salaries">
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