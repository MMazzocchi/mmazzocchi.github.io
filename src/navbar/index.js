import React from 'react';
import styles from './styles.js';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Toolbar from '@material-ui/core/Toolbar';
import lockAspect from '../utils/lockAspect.js';

const BaseHomeIcon = ({ classes }) => (
  <div className={ classes.home_icon_text }>
    MM
  </div>
);

const HomeIcon = ({ ...rest }) => (lockAspect(BaseHomeIcon, { ...rest }));

const NavBar = ({ classes }) => (
  <Toolbar className={ classes.navbar }>
    <div className={ classes.home_icon }>
      <HomeIcon classes={ classes } />
    </div>
  </Toolbar>
);

export default withStyles(styles)(NavBar);
