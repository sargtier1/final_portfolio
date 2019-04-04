import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import "./Footer.css";

function Footer() {
  return (
    <Navbar id="Footer" light expand="sm" className="mb-5">
      <Container>
        <NavbarBrand href="/">Salvatore Argentieri © 2019</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="https://www.linkedin.com/in/salvatore-argentieri-39a363146/"
              target="_blank"
            >
              LinkedIn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/sargtier1" target="_blank">
              GitHub
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="mailto:salv.m.argent@gmail.com" target="_blank">
              Email
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
