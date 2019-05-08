import React from 'react';
import withStyles from 'react-jss';
import { color2 } from '../../../styles.js';

const styles = {
  icon: {
    'color': color2,
    'font-size': '5em',
  }
};

const Laptop = ({ classes }) => (
  <div className={ classes.icon }>
    <i className="fas fa-laptop-code"></i>
  </div>
);

export default withStyles(styles)(Laptop);
