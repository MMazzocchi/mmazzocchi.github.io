import React from 'react';

import Hello from './sections/hello';
import Space from './sections/space';
import Web from './sections/web';
import Personal from './sections/personal';
import Research from './sections/research';
import Contact from './sections/contact';

import withStyles from 'react-jss';
import { color3, breakpoints } from '../styles.js';

const styles = {
  section: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    'border-bottom': '1px'+color3+' solid',
    'padding-bottom': '30px',
    'padding-top':  '30px',

    '&:nth-child(even)': {
      'flex-direction': 'row-reverse',
    },

    '&:first-child': {
      'padding-top': '0px',
    },

    '&:last-child': {
      'padding-bottom': '0px',
      'border-bottom': 'none',
    },

    [`@media (max-width: ${ breakpoints.md })`]: {
      'flex-direction': 'column !important',
    },
  },
};

const Home = ({ classes }) => (
  <div>
    <div className={ classes.section }>
      <Hello />
    </div>

    <div className={ classes.section }>
      <Space />
    </div>

    <div className={ classes.section }>
      <Web />
    </div>

    <div className={ classes.section }>
      <Research />
    </div>

    <div className={ classes.section }>
      <Personal />
    </div>

    <div className={ classes.section }>
      <Contact />
    </div>
  </div>
);

export default withStyles(styles)(Home); 
