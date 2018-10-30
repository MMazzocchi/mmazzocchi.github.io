import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Collapse,
  Row
} from "reactstrap";
import { LabeledSkillIcon, SkillIcon } from "./SkillIcon.js";
import { skills } from "./skills.js";

class SkillBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    skills.forEach((skill, index) => {
      skill["id"] = "skill"+index;
      this.state[skill.id] = false;
    });

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    const target = e.currentTarget;
    let state = {};

    skills.forEach((skill) => {
      state[skill.id] = false;
    });

    this.setState(state);

    state[target.id] = !this.state[target.id];
    this.setState(state);
  };

  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          { skills.map((skill) => (
            <Col lg="1" xs="3" key={ `skill-icon-${ skill.icon }` }>
              <LabeledSkillIcon 
                 id={ skill.id }
                 onClick={ this.toggle }
                 hoverable={ true }
                 { ...skill } />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center">
          <Col md="10">
            { skills.map((skill) => (
              <Collapse key={ `${ skill.icon }-collapse` }
                        isOpen={ this.state[skill.id] }>
                <Card className="shadow">
                  <CardHeader>
                    <Row className="justify-content-center">
                      <Col>
                        <LabeledSkillIcon invert={ true } style={{ fontSize: "1.5em" }} { ...skill } />
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <CardText>
Lor    em   ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales iaculis ex eget commodo. Quisque non varius ex. Vivamus mollis accumsan tempus. Nam eget odio vestibulum odio consectetur gravida nec sit amet mi. Ut vehicula massa tellus, sed eleifend arcu pretium accumsan. Aliquam laoreet tortor vitae mi porttitor accumsan. Suspendisse malesuada quis risus et convallis. Aliquam sed ipsum et lacus ornare rhoncus in et augue. In quis dictum est, nec blandit ex. Vivamus sollicitudin ipsum at felis sagittis fringilla. 
                    </CardText>
                  </CardBody>
                </Card>
              </Collapse>
            ))}
          </Col>
        </Row>

      </React.Fragment>
    );
  }
};

export { SkillBar };
