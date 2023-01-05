import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./logo.svg";
import "./Home.css";
import Sidebar from "./Sidebar";
import MenuCard from "./Deals/MenuCard";
import Home from "./Home";

import { BrowserRouter as Router } from "react-router-dom";

function Navigbar(props) {
  const [mhome, setmhome] = useState("Home");
  const Para = (props) => {
    console.log(props.menuData);
    if (mhome == "Home") {
      return <Home />;
    } else {
      return <MenuCard menuData={props.menuData} />;
    }
  };

  console.log(props.menu);

  const shome = (para) => {
    setmhome(para);
  };

  return (
    <>
      <Navbar
        bg="light"
        variant="dark"
        sticky="top"
        className="navbar bg-sm-dark"
        expand="sm"
        collapseOnSelect // coment to add side bar
      >
        <Navbar.Brand sticky="top">
          <img src={logo} width="40px" height="40px" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          {/* coment to add side bar  */}
          <Nav>
            <Nav.Link className="links" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="links" href="#bestdeal">
              Best Deals
            </Nav.Link>
            <Nav.Link className="links" href="#oursponsors">
              Our Sponors
            </Nav.Link>
            <Nav.Link className="links" href="#contactus">
              Contact Us
            </Nav.Link>
            <Nav.Link className="links" id="signup" href="#signup">
              Sign up
            </Nav.Link>
            <Sidebar menu={props.menu} filter={props.filter} shome={shome} />
          </Nav>
        </Navbar.Collapse>
        {/* coment to add side bar */}
      </Navbar>

      <Para menuData={props.menuData} />
    </>
  );
}

export default Navigbar;
