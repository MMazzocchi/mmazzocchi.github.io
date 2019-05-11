import React from 'react';
import withStyles from 'react-jss';
import {
  color1,
  color2,
  color2_light,
  standard_shadow,
  elevated_shadow,
} from './styles.js';

const styles = {
  button: {
    'background': color2,
    'font-weight': 600,
    'text-align': 'center',
    'padding': '10px',
    'box-shadow': standard_shadow,
    'display': 'inline-block',
    'border-radius': '5px',
    'transition': 'background 0.2s, box-shadow 0.2s',
    '&:hover': {
      'background': color2_light,
      'box-shadow': elevated_shadow,
    }
  },
  link: {
    'text-decoration': 'none',
    'color': color1,
  },
};

const Button = ({ classes, children }) => (
  <div className={ classes.button }>
    { children }
  </div>
);

export default withStyles(styles)(Button);
