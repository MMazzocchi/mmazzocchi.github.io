import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color3 } from '../../styles.js';

const styles = {
  title: {
    'color': color3,
    'font-size': 'xx-large',
  },
  text: {
    'color': color3,
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
