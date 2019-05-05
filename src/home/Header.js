import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Greeting from './Greeting.js';

const styles = {
  header: {
    'display': 'flex',
    'align-items': 'center',
  },
  greeting_col: {
    'padding': '100px',
  },
};

const Header = ({ classes }) => (
  <div className={ classes.header }>
    <div className={ classes.greeting_col }>
      <Greeting />
    </div>
  </div>
);

export default withStyles(styles)(Header);
