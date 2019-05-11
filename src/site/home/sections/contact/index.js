import React, { Fragment } from 'react';
import withStyles from 'react-jss';
import Button from '../../../Button.js';
import { Link } from 'react-router-dom';
const styles = {
  button_box: {
    'flex-grow': 1,
    'display': 'flex',
    'justify-content': 'center',
  }
};

const Contact = ({ classes }) => (
  <Fragment>
    <div className={ classes.button_box }>
      <Link to="/contact">
        <Button>
          Contact Me
        </Button>
      </Link>
    </div>
  </Fragment>
);

export default withStyles(styles)(Contact);
