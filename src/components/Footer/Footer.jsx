import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from "reactstrap";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <Navbar id="Navbar" light expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Salvatore Argentieri © 2019</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/salvatore-argentieri-39a363146/">LinkedIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/sargtier1">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="mailto:salv.m.argent@gmail.com">Email</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
