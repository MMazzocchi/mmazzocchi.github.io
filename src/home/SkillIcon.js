import React from "react";
import { Col } from "reactstrap";


const SkillIcon = ({ id, icon, label, color }) => (
  <Col id={ id } className="skill-col" lg="1" xs="3">
    <div>
      <i className={ `fas fa-${icon} skill-icon` }
         style={{ "backgroundColor": color }}></i>
    </div>
    <p style={{ "color": color }}>
      { label }
    </p>
  </Col>
);

export { SkillIcon };
