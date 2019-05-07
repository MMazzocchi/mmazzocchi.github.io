import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import './beat.css';

const styles = {
  container: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'margin': '10px',
    'min-height': '100px',
    'min-width': '100px',
    'flex-direction': 'column',
  },
  inner: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },
  text: {
    'color': 'red',
    'font-weight': 100,
    'animation-name': 'beat',
    'animation-duration': '5s', 
    'animation-iteration-count': 'infinite',
    'animation-timing-function': 'step-end',
    'margin': 0,
  },
};

const Heart = ({ classes }) => (
  <div className={ classes.container }>
    <div className={ classes.inner }>
      <pre className={ classes.text }>
{` 010   110
10110 10111
00010011010
 110011000
   10011
     1`}
      </pre>
    </div>
  </div>
);

export default withStyles(styles)(Heart);
