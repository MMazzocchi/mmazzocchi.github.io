import React from 'react';
import withStyles from 'react-jss';
import { color3, breakpoints } from '../../styles.js';

const styles = {
  section: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    'margin-left': '50px',
    'margin-right': '50px',
    'margin-top': '30px',
    'padding-bottom': '30px',
  },
  section_reverse: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    'margin-left': '50px',
    'margin-right': '50px',
    'margin-top': '30px',
    'padding-bottom': '30px',
    'flex-direction': 'row-reverse'
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

const Section = ({ classes, children, reverse, last }) => (
  <div
    className={ reverse ? classes.section_reverse : classes.section }
    style={{
      borderBottom: last ? '' : '1px'+color3+' solid',
     }}>
    { children }
  </div>
);

export default withStyles(styles)(Section);
