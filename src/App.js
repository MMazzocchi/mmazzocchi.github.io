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
             className="rounded-circle img-fluid mx-auto d-block portrait shadow" />
      </Col>
      <Col md="6">
        <Row>
          <Col className="border-bottom">
            <h1>Max Mazzocchi</h1>
            <p>Software Developer, Northern Virginia/Washington DC</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="skill-col">
            <div>
              <i className="fas fa-globe skill-icon"></i>
            </div>
            <p>Web Design</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p></p>
            <p>
              Thanks for visiting my homepage! I am a software developer
              currently located in the Northern Virginia/DC metro area. My
              professional experience includes software positions in aerospace,
              defense, research, and development, working on a variety of
              applications and solutions.
            </p>
            <p>
              <a href="/contact">Let's Talk</a>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export { App };
