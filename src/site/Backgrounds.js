import React from 'react';
import withStyles from 'react-jss';
import { color3 } from './styles.js';
import splash from './splash.jpg';

const styles = {
  container: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'height': '100%',
    'width': '100%',
    'z-index': -1,
  },
  top_bg: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': '100%',
    'min-height': '550px',
    'height': '40%',
    'background-image': `url(${ splash })`,
    'background-size': 'cover',
    'background-position': 'bottom',
  },
  bottom_bg: {
    'position': 'absolute',
    'bottom': 0,
    'left': 0,
    'width': '100%',
    'min-height': '20%',
    'background-color': color3,
  }
};

const Backgrounds = ({ classes }) => (
  <div className={ classes.container }>
    <div className={ classes.top_bg }></div>
    <div className={ classes.bottom_bg }></div>
  </div>
);

export default withStyles(styles)(Backgrounds);
