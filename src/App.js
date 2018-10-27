import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Nav } from "./Nav.js";


const links = [
  { text: "Home",    dest: "/" },
  { text: "Contact", dest: "/" },
];

const App = () => (
  <Container>
    <Nav links={ links } />
    <Row>
      <Col md="6">
        <img src="images/me.jpg"
             className="rounded-circle img-fluid mx-auto d-block portrait" />
      </Col>
      <Col md="6">
      </Col>
    </Row>
  </Container>
);


export { App };
