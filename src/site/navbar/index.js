import React from 'react';
import withStyles from 'react-jss';
import HomeIcon from './HomeIcon.js';
import { color1, color3, standard_shadow } from '../styles.js';

const styles = {
  navbar: {
    'display': 'flex',
    'border-bottom': `3px solid${ color1 }`,
    'padding': 0,
    'background-color': color3,
    'box-shadow': standard_shadow,
    'min-width': '100%',
  },
}; 

const NavBar = ({ classes }) => (
  <div className={ classes.navbar }>
    <HomeIcon />
  </div>
);

export default withStyles(styles)(NavBar);
