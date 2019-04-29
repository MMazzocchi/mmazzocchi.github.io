import React from 'react';
import { fg_color, bg_color } from '../styles.js';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const home_styles = {
  navbar: {
    'border-bottom': `3px solid${ fg_color }`,
    padding: 0,
  },
  slant: {
    'position': 'absolute',
    'left': '-60%',
    'top': 0,
    'height': '150%',
    'width': '120%',
    'background-color': fg_color,
    'color': bg_color,
    'z-index': -1,
    'transform': 'skewY(160deg)'
  },
  home_icon: {
    'color': bg_color,
    'font-weight': 500,
    'padding': '10px',
  }
};

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

export default withStyles(home_styles)(NavBar);
