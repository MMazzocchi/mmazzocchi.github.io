import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color1, standard_shadow } from '../styles.js';

const styles = {
  box: {
    'color': color1,
    'background': 'rgba(0, 0, 0, 0.7)',
    'padding': '50px',
    'box-shadow': standard_shadow,
  },
  greeting: {
    'font-weight': 600,
    'font-size': 'xx-large',
    'padding-bottom': '2vh',
  },
};

const Greeting = ({ classes }) => (
  <div className={ classes.box }>
    <div className={ classes.greeting }>
      Welcome.
    </div>
    <div style={{ fontSize: 'medium' }}>
      Max Mazzocchi, Software Developer
    </div>
    <div style={{ fontSize: 'small' }}>
      Washington DC/Northern Virginia
    </div>
  </div>
);

export default withStyles(styles)(Greeting);
