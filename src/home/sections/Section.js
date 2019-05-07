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
    'margin-top': '20px',
    'padding-bottom': '20px',
    'border-bottom': '1px '+color3+' solid',
  },
};

const Section = ({ classes, children, reverse }) => (
  <div
    className={ classes.section }
    style={ reverse ? { flexDirection: 'row-reverse' } : {}}>
    { children }
  </div>
);

export default withStyles(styles)(Section);
