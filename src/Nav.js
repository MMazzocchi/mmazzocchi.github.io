import React from "react";
import {
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from "reactstrap";

const MyNavItem = ({ dest, text }) => (
  <NavItem>
    <NavLink href={ dest }>
      { text }
    </NavLink>
  </NavItem>
);

const MyNav = ({ links }) => (
  <Navbar expand="md">
    <NavbarBrand href="/">
      MM
    </NavbarBrand>
    <NavbarToggler />
    <Collapse navbar>
      <Nav className="ml-auto" navbar>
        { links.map((link) => (
          <MyNavItem { ...link } key={ `navitem-${link.text}` } />
        ))}
      </Nav>
    </Collapse>
  </Navbar>
);


export { MyNav as Nav };
