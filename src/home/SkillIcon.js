import React from "react";

const SkillIcon = ({ icon, color, invert, ...rest }) => (
  <div className="skill-col" { ...rest }>
    <i className={ `${icon} skill-icon` }
       style={{
         backgroundColor: invert ? "" : color,
         color: invert ? color : "white" }}></i>
  </div>
);

const LabeledSkillIcon = ({ icon, label, color, invert, ...rest }) =>(
  <div className="skill-col" { ...rest }>
    <SkillIcon icon={ icon } invert={ invert } color={ color } />
    <p style={{ "color": color }}>
      { label }
    </p>
  </div>
);

export { LabeledSkillIcon, SkillIcon };
