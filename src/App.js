import React from "react";
import { Button, Container, Row, Col, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { Nav } from "./Nav.js";
import { SkillIcon } from "./SkillIcon.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Home.js";

const links = [
  { text: "Home",    dest: "/" },
  { text: "Contact", dest: "/" },
];

const App = () => (
  <Router>
    <Container>
      <Nav links={ links } />

      <Route exact path="/" component={ Home } />
     </Container>
  </Router>
);

export { App };
