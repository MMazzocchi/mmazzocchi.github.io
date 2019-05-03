import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import HomeIcon from './HomeIcon.js';
import { fg_color, color3 } from '../styles.js';

const styles = {
  navbar: {
    'display': 'flex',
    'border-bottom': `3px solid${ fg_color }`,
    padding: 0,
    'background-color': color3,
    'box-shadow': '0 0 8px 0 '+color3,
  },
}; 

const NavBar = ({ classes }) => (
  <div className={ classes.navbar }>
    <HomeIcon />
  </div>
);

export default withStyles(styles)(NavBar);
