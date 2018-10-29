import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Row,
  UncontrolledCollapse
} from "reactstrap";
import { SkillIcon } from "./SkillIcon.js";
import { Link } from "react-router-dom";
import { CatBox } from "../CatBox.js";

const skills = [
  { icon: "globe",      label: "Web Design",   color: "red" },
  { icon: "desktop",    label: "Desktop",      color: "blue" },
  { icon: "wrench",     label: "Tools",        color: "grey" },
  { icon: "flask",      label: "Research",     color: "purple" },
  { icon: "redo",       label: "Agile",        color: "black" },
  { icon: "dice-d20",   label: "Board Gaming", color: "green" },
  { icon: "ellipsis-h", label: "More",         color: "orange" }
];

const Home = () => (
  <React.Fragment>
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
      </Col>
    </Row>
    <Row>
      <p></p>
    </Row>
    <Row className="justify-content-center">
      { skills.map((skill) => (
        <SkillIcon key={ `skill-icon-${ skill.icon }` }
                   id={ `${ skill.icon }-toggler` } { ...skill } />
      ))}
    </Row>
    <Row>
      { skills.map((skill) => (
        <UncontrolledCollapse key={ `${ skill.icon }-collapse` }
                              toggler={ `#${ skill.icon }-toggler` }>
          <Card className="shadow">
            <CardHeader>
              <Row className="justify-content-center">
                <SkillIcon id={ `${ skill.icon }-header` } { ...skill } />
              </Row>
            </CardHeader>
            <CardBody>
              <CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales iaculis ex eget commodo. Quisque non varius ex. Vivamus mollis accumsan tempus. Nam eget odio vestibulum odio consectetur gravida nec sit amet mi. Ut vehicula massa tellus, sed eleifend arcu pretium accumsan. Aliquam laoreet tortor vitae mi porttitor accumsan. Suspendisse malesuada quis risus et convallis. Aliquam sed ipsum et lacus ornare rhoncus in et augue. In quis dictum est, nec blandit ex. Vivamus sollicitudin ipsum at felis sagittis fringilla. 
              </CardText>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      ))}
    </Row>
    <CatBox title="$ cat hello.txt">
      <CardBody>
        <CardText> 
          Thanks for visiting my homepage! I am a software developer
          currently located in the Northern Virginia/DC metro area. My
          professional experience includes software positions in aerospace,
          defense, research, and development, working on a variety of
          applications and solutions.
        </CardText>
        <Button color="primary" block tag={ Link } to="/contact">
          Let's talk!
        </Button>
      </CardBody>
    </CatBox>
  </React.Fragment>
);

export { Home };
