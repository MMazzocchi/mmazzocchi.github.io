import React from "react";
import { PropTypes } from 'prop-types';

const SkillIcon = ({ icon, color, invert, hoverable, ...rest }) => (
  <div { ...rest }
    className={ `skill-col ${ hoverable ? "skill-col-hover" : ""}` }>
    <i className={ `${icon} skill-icon` }
       style={{
         backgroundColor: invert ? "" : color,
         color: invert ? color : "white" }}></i>
  </div>
);

SkillIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  invert: PropTypes.bool,
  hoverable: PropTypes.bool,
};

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

LabeledSkillIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  invert: PropTypes.bool,
  hoverable: PropTypes.bool,
};

export { LabeledSkillIcon, SkillIcon };
