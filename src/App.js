import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Nav } from "./Nav.js";
import { SkillIcon } from "./SkillIcon.js";

const links = [
  { text: "Home",    dest: "/" },
  { text: "Contact", dest: "/" },
];

const skills = [
  { icon: "globe",    label: "Web Design",   color: "red" },
  { icon: "desktop",  label: "Desktop",      color: "blue" },
  { icon: "wrench",   label: "Tools",        color: "grey" },
  { icon: "redo",     label: "Agile",        color: "green" },
  { icon: "flask",    label: "Research",     color: "purple" },
  { icon: "dice-d20", label: "Board Gaming", color: "orange" },
  { icon: "question", label: "More",         color: "black" }
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
          { skills.map((skill) => (
            <SkillIcon key={ `skill-icon-${ skill.icon }` } { ...skill } />
          ))}
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
