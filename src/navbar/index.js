import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from './HomeIcon.js';
import { fg_color, color3 } from '../styles.js';

const styles = {
  navbar: {
    'border-bottom': `3px solid${ fg_color }`,
    padding: 0,
    'background-color': color3,
    'box-shadow': '0 0 8px 0 '+color3,
  },
}; 

const NavBar = ({ classes }) => (
  <Toolbar className={ classes.navbar }>
    <HomeIcon />
  </Toolbar>
);

export default withStyles(styles)(NavBar);
