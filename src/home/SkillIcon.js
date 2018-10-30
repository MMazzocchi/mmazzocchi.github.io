import React from "react";

const SkillIcon = ({ icon, color, invert, hoverable, ...rest }) => (
  <div { ...rest }>
    className={ `skill-col ${ hoverable ? "skill-col-hover" : ""}` }>
    <i className={ `${icon} skill-icon` }
       style={{
         backgroundColor: invert ? "" : color,
         color: invert ? color : "white" }}></i>
  </div>
);

const LabeledSkillIcon = ({ icon, label, color, invert, hoverable,
                            ...rest }) =>(
  <div { ...rest }
    className={ `skill-col ${ hoverable ? "skill-col-hover" : ""}` }>
    <SkillIcon icon={ icon } invert={ invert } color={ color } />
    <p style={{ "color": color }}>
      { label }
    </p>
  </div>
);

export { LabeledSkillIcon, SkillIcon };
