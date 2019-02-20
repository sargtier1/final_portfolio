import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
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

  render() {
    return (
      <Navbar fixed="top" color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Salvatore Argentieri</NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
            <Nav className="ml-auto" navbar>
            {/* will un comment once I figure out how to implement smooth scrolling */}
              {/* <NavItem>
                <NavLink className="smoothscroll" href="">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="smoothscroll" href="">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="smoothscroll" href="">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="smoothscroll" href="">Contact</NavLink>
              </NavItem> */}
            </Nav>
          {/* </Collapse> */}
        </Container>
      </Navbar>
    );
  }
}

export default PortfolioNavbar;
