import React from "react";
import { Col } from "reactstrap";


const SkillIcon = ({ icon, label }) => (
  <Col className="skill-col">
    <div>
      <i className={ `fas fa-${icon} skill-icon` }></i>
    </div>
    <p className="skill-label">
      { label }
    </p>
  </Col>
);

export { SkillIcon };
