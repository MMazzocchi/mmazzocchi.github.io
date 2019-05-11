import React from 'react';
import withStyles from 'react-jss';
import { color3, breakpoints } from '../../styles.js';

const styles = {
  title: {
    'color': color3,
    'font-size': 'xx-large',
  },
  text: {
    'color': color3,
  },
  [`@media (max-width: ${ breakpoints.md })`]: {
    title: {
      'text-align': 'center',
    },
    text: {
      'text-align': 'justify',
    }
  }
};

const Text = ({ classes, title, children }) => (
  <div>
    <div className={ classes.title }>
      { title }
    </div>
    <div className={ classes.text }>
      { children }
    </div>
  </div>
);

export default withStyles(styles)(Text);
