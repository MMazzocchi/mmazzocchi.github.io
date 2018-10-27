import React from "react";
import { Col } from "reactstrap";


const SkillIcon = ({ icon, label, color }) => (
  <Col className="skill-col">
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
