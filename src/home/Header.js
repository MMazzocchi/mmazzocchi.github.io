import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Greeting from './Greeting.js';
import CodeBoxes from './codeboxes';

const styles = {
  header: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
  },
  col: {
    'padding': '100px',
  },
};

const Header = ({ classes }) => (
  <div className={ classes.header }>
    <div className={ classes.col }>
      <Greeting />
    </div>
    <div className={ classes.col }>
      <CodeBoxes />
    </div>
  </div>
);

export default withStyles(styles)(Header);
