import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

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
          <NavbarBrand href="/">JVNC</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>















              {/* <NavItem>
                <NavLink className="smoothscroll" href="">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="smoothscroll" href="">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="smoothscroll" href="">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="smoothscroll" href="">
                  Contact
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PortfolioNavbar;
