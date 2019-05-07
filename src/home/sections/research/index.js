import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color5, color3 } from '../../../styles.js';

const styles = {
  title: {
    'color': color3,
    'font-size': 'xx-large',
  },
  icon: {
    'color': color5,
    'font-size': '5em',
  }
};

const Research = ({ classes }) => (
  <Fragment>
    <div className={ classes.icon }>
      <i className="fas fa-flask"></i>
    </div>
    <div>
      <div className={ classes.title }>
        Research
      </div>
      <div>
        I've had the opportunity to particpate in and contribut to multiple
        ongoing research projects throughout my career. In these positions, I've
        played a software support role to experts in various fields, providing
        rapid prototyping and data analysis capabilities.
      </div>
    </div>
  </Fragment>
);

export default withStyles(styles)(Research);
