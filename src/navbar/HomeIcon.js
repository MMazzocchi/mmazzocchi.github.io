import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import lockAspect from '../utils/lockAspect.js';
import { fg_color } from '../styles.js';

const styles = {
  home_icon_text: {
    'color': fg_color,
    'font-weight': 500,
    'padding': '10px',
    'font-size': 'xx-large',
  },
  home_icon: {
    'margin': '10px',
    'border': '2px solid '+fg_color
  }
};

const BaseHomeIcon = ({ classes }) => (
  <div className={ classes.home_icon_text }>
    MM
  </div>
);

const InnerHomeIcon = ({ ...rest }) => (lockAspect(BaseHomeIcon, { ...rest }));

const HomeIcon = ({ classes }) => (
  <div className={ classes.home_icon }>
    <InnerHomeIcon classes={ classes } />
  </div>
);

export default withStyles(styles)(HomeIcon);
