import React from 'react';
import styles from '../styles.js';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = ({ classes }) => (
  <Toolbar className={ classes.navbar }>
    <Typography variant="h3" className={ classes.home_icon }>
      MM
    </Typography>
  </Toolbar>
);

export default withStyles(styles)(NavBar);
