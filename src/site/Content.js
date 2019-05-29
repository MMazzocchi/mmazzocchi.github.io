import React from 'react';
import { color1, standard_shadow } from './styles.js';
import withStyles from 'react-jss';

const styles = {
  content: {
    'background-color': color1,
    'box-shadow': standard_shadow,
    'max-width': '1000px',
    'padding-left': '50px',
    'padding-right': '50px',
    'padding-top': '30px',
    'padding-bottom': '30px',
    'margin-left': '30px',
    'margin-right': '30px',
    'flex-grow': 1,
    'justify-content': 'center',
  },
};

const Content = ({ classes, children }) => (
  <div className={ classes.content }>
    { children }
  </div>
);

export default withStyles(styles)(Content); 
