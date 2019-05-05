import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import lockAspect from '../utils/lockAspect.js';
import { color1, color3 } from '../styles.js';

const styles = {
  home_icon_text: {
    'color': color1,
    'font-weight': 500,
    'padding': '5px',
    'font-size': 'x-large',
    'transition': 'color 0.2s',
    'z-index': 1,
  },
  home_icon: {
    'margin': '10px',
    'border': '2px solid '+color1,
    'position': 'relative',
  },
  cover_left: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': 0,
    'height': 0,
    'transition': 'width 0.5s, height 0.5s',
    'background-color': color1,
  },
  cover_right: {
    'position': 'absolute',
    'bottom': 0,
    'right': 0,
    'width': 0,
    'height': 0,
    'transition': 'width 0.5s, height 0.5s',
    'background-color': color1,
  }
};

const BaseHomeIcon = lockAspect(({ classes, hover }) => (
  <div
    className={ classes.home_icon_text }
    style={ hover ? {
      'color': color3
    } : {} }>
    MM
  </div>
));

const Cover = ({ className, hover }) => (
  <div
    className={ className }
    style={ hover ? {
      'width': '100%',
      'height': '100%',
    } : {} }></div>
);

const HomeIcon = ({ classes }) => {
  const [ hover, setHover ] = useState(false);
  return (
    <div
      className={ classes.home_icon }
      onMouseEnter={ () => { setHover(true); } }
      onMouseLeave={ () => { setHover(false); } }>

      <BaseHomeIcon classes={ classes } hover={ hover }/>

      <Cover className={ classes.cover_left } hover={ hover } />
      <Cover className={ classes.cover_right } hover={ hover } />
    </div>
  )
};

export default withStyles(styles)(HomeIcon);
