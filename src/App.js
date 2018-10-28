import React from "react";
import { Button, Container, Row, Col, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { Nav } from "./Nav.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./home";
import { Contact } from "./contact";

const links = [
  { text: "Home",    dest: "/" },
  { text: "Contact", dest: "/contact" },
];

const App = () => (
  <Router>
    <Container>
      <Nav links={ links } />

      <Route exact path="/" component={ Home } />
      <Route exact path="/contact" component={ Contact } />
     </Container>
  </Router>
);

export { App };
