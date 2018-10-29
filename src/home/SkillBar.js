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

const SkillBar = () => (
  <React.Fragment>
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
  </React.Fragment>
);

export { SkillBar };
