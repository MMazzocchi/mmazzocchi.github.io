import React from 'react';
import styles from './styles.js';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const HomeIcon = ({ classes }) => ( 
  <div id="home_icon">
    <Typography variant="h3" className={ classes.home_icon }>
      MM
      <div className={ classes.slant }></div>
    </Typography>
  </div>
);

const NavBar = ({ classes }) => (
  <Toolbar className={ classes.navbar }>
    <HomeIcon classes={ classes } />
  </Toolbar>
);

export default withStyles(styles)(NavBar);
