import React, { Component } from "react";
import { Link, animateScroll as scroll  } from "react-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container
} from "reactstrap";
import "./Navbar.css"

class PortfolioNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar fixed="top" color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand id="navbar-logo" onClick={this.scrollToTop}>SMA</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <ul className="nav-items">
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="home-container"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="about-container"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="portfolio-container"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="contact-container"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PortfolioNavbar;
