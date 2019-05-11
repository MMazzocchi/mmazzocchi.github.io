import React from 'react';
import withStyles from 'react-jss';

const styles = {
  spacer: {
    'min-width': '50px',
    'min-height': '20px',
  }
};

const Spacer = ({ classes }) => (
  <div className={ classes.spacer }></div>
);

export default withStyles(styles)(Spacer);
