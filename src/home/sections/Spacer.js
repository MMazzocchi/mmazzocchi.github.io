import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';

const styles = {
  spacer: {
    'min-width': '50px',
    'min-height': '50px',
  }
};

const Spacer = ({ classes }) => (
  <div className={ classes.spacer }></div>
);

export default withStyles(styles)(Spacer);
