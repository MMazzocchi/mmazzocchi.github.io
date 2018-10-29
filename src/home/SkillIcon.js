import React from "react";

const SkillIcon = ({ icon, color, ...rest }) => (
  <div className="skill-col" { ...rest }>
    <i className={ `${icon} skill-icon` }
       style={{ backgroundColor: color }}></i>
  </div>
);

const LabeledSkillIcon = ({ icon, label, color, ...rest }) =>(
  <div className="skill-col" { ...rest }>
    <SkillIcon icon={ icon } color={ color } />
    <p style={{ "color": color }}>
      { label }
    </p>
  </div>
);

export { LabeledSkillIcon, SkillIcon };
