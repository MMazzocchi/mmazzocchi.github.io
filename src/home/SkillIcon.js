import React from "react";
import { Col } from "reactstrap";


//const SkillIcon = ({ id, icon, label, color, onClick }) => (
//);

const LabeledSkillIcon = ({ icon, label, color, ...rest }) =>(
  <div className="skill-col" { ...rest }>
    <div>
      <i className={ `fas fa-${icon} skill-icon` }
         style={{ "backgroundColor": color }}></i>
    </div>
    <p style={{ "color": color }}>
      { label }
    </p>
  </div>
);

export { LabeledSkillIcon };
