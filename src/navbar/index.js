import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from './HomeIcon.js';
import { fg_color } from '../styles.js';

const styles = {
  navbar: {
    'border-bottom': `3px solid${ fg_color }`,
    padding: 0,
  },
}; 

const NavBar = ({ classes }) => (
  <Toolbar className={ classes.navbar }>
    <HomeIcon />
  </Toolbar>
);

export default withStyles(styles)(NavBar);
