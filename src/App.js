import React from "react";
import { Container } from "reactstrap";
import { Nav } from "./Nav.js";


const links = [
  { text: "Home",    dest: "/" },
  { text: "Contact", dest: "/" },
];

const App = () => (
  <Container>
    <Nav links={ links } />
  </Container>
);


export { App };
