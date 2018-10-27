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
    <Row className="align-items-center">
      <Col md="6">
        <img src="images/me.jpg"
             className="rounded-circle img-fluid mx-auto d-block portrait" />
      </Col>
      <Col md="6">
        <Row className="border-bottom">
          <Col>
            <h1>Max Mazzocchi</h1>
            <p>Software Developer, DC Metro Area</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);


export { App };
