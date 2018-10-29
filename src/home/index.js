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
import { SkillBar } from "./SkillBar.js";
import { Link } from "react-router-dom";
import { CatBox } from "../CatBox.js";

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
    <SkillBar />
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
