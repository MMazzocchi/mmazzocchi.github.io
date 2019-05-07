import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color3 } from '../../styles.js';

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
};

const Section = ({ classes, children, reverse, last }) => (
  <div
    className={ classes.section }
    style={{
      flexDirection: reverse ? 'row-reverse' : '',
      borderBottom: last ? '' : '1px'+color3+' solid',
     }}>
    { children }
  </div>
);

export default withStyles(styles)(Section);
