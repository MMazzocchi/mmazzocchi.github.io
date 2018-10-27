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

const App = () => (
  <Container>
    <Navbar expand="md">
      <NavbarBrand href="/">
        Max Mazzocchi
      </NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </Container>
);


export { App };
