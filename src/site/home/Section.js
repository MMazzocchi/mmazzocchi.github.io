import React from 'react';
import withStyles from 'react-jss';
import { color3, breakpoints } from '../styles.js';

const styles = {
  section: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
  },
  section_reverse: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    'flex-direction': 'row-reverse',
  },
  [`@media (max-width: ${ breakpoints.md })`]: {
    section: {
      'flex-direction': 'column',
    },
    section_reverse: {
      'flex-direction': 'column',
    }
  }
};

const Section = ({ classes, children, reverse, last, first }) => (
  <div
    className={ reverse ? classes.section_reverse : classes.section }
    style={{
      borderBottom: last ? '' : '1px'+color3+' solid',
      paddingBottom: last ? '' : '30px',
      paddingTop: first ? '' : '30px',
     }}>
    { children }
  </div>
);

export default withStyles(styles)(Section);
