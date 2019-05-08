import React from 'react';
import withStyles from 'react-jss';
import Greeting from './Greeting.js';
import CodeBoxes from './codeboxes';
import { breakpoints } from '../styles.js';

const styles = {
  header: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },
  codeboxes: {
    'padding': '50px',
  },

  [`@media (max-width: ${ breakpoints.md })`]: {
    codeboxes: {
      'display': 'none',
    }
  },
};

const Header = ({ classes }) => (
  <div className={ classes.header }>
    <div style={{ 'padding': '50px' }}>
      <Greeting />
    </div>
    <div className={ classes.codeboxes }>
      <CodeBoxes />
    </div>
  </div>
);

export default withStyles(styles)(Header);
