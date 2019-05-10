import React, { Fragment } from 'react';
import withStyles from 'react-jss';
import Button from '../../../Button.js';

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
      <Button href="mailto:maxwell.mazzocchi@gmail.com">
        Contact Me
      </Button>
    </div>
  </Fragment>
);

export default withStyles(styles)(Contact);
