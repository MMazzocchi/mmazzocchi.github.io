import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import CodeBoxes from './CodeBoxes.js';

const styles = {
  container: {
    'padding': '10px',
    'display': 'flex',
    'justify-content': 'space-between',
    'align-content': 'center',
  },
  heading: {
    'font-size': 'x-large',
  }
};

const Developer = ({ classes }) => (
  <div className={ classes.container }>
    <div className={ classes.heading }>
      Polyglot Developer
    </div>
    <div>
      <CodeBoxes />
    </div>
  </div>
);

export default withStyles(styles)(Developer);
