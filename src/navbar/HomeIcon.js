import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import lockAspect from '../utils/lockAspect.js';
import { fg_color, bg_color } from '../styles.js';

const styles = {
  home_icon_text: {
    'color': fg_color,
    'font-weight': 500,
    'padding': '10px',
    'font-size': 'xx-large',
    'transition': 'color 0.2s',
  },
  home_icon: {
    'margin': '10px',
    'border': '2px solid '+fg_color,
    'position': 'relative',
  },
  cover_left: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': 0,
    'height': 0,
    'transition': 'width 0.5s, height 0.5s',
    'background-color': fg_color,
    'z-index': -1,
  },
  cover_right: {
    'position': 'absolute',
    'bottom': 0,
    'right': 0,
    'width': 0,
    'height': 0,
    'transition': 'width 0.5s, height 0.5s',
    'background-color': fg_color,
    'z-index': -1,
  }
};

const BaseHomeIcon = ({ classes, hover }) => (
  <div
    className={ classes.home_icon_text }
    style={ hover ? {
      'color': bg_color
    } : {} }>
    MM
  </div>
);

const InnerHomeIcon = ({ ...rest }) => (lockAspect(BaseHomeIcon, { ...rest }));

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

      <InnerHomeIcon classes={ classes } hover={ hover }/>

      <Cover className={ classes.cover_left } hover={ hover } />
      <Cover className={ classes.cover_right } hover={ hover } />
    </div>
  )
};

export default withStyles(styles)(HomeIcon);
