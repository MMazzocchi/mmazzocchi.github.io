import React from "react";
import {
  Card,
  CardHeader,
  Col,
  Collapse,
  Row
} from "reactstrap";
import { LabeledSkillIcon } from "../SkillIcon.js";
import { skills } from "./skills.js";

class SkillBar extends React.Component {
  constructor(props) {
    super(props);

    const state = {};
    skills.forEach((skill, index) => {
      skill["id"] = "skill"+index;
      state[skill.id] = false;
    });
    this.state = state;

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
  }

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
                  { skill.content }
                </Card>
              </Collapse>
            ))}
          </Col>
        </Row>

      </React.Fragment>
    );
  }
}

export { SkillBar };