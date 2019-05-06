import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color2 } from '../../../styles.js';

const styles = {
  solar_system: {
    'min-width': '200px',
    'min-height': '200px',
    'position': 'relative',
  },
  planet_container: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': '100%',
    'height': '100%',
  },
  planet: {
    'padding': '5px',
    'background-color': color2,
    'border-radius': '5px',
  },
  sun: {
    'padding': '15px',
    'border-radius': '15px',
    'background-color': color2,
  },
  body: {
    'position': 'absolute',
    'width': 0,
    'height': 0,
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'top': '50%',
    'right': '50%',
  },
};

const Sun = ({ classes }) => (
  <div className={ classes.body }>
    <div className={ classes.sun }></div>
  </div>
);

const Planet = ({ classes, x, y }) => (
  <div className={ classes.planet_container }>
    <div className={ classes.body } style={{ top: y, left: x }}>
      <div className={ classes.planet }></div>
    </div>
  </div>
);

const SolarSystem = ({ classes }) => (
  <div className={ classes.solar_system }>
    <Sun classes={ classes } />
    <Planet classes={ classes } x="10%" y="50%" />
    <Planet classes={ classes } x="18%" y="50%" />
    <Planet classes={ classes } x="26%" y="50%" />
    <Planet classes={ classes } x="34%" y="50%" />
  </div>
);

export default withStyles(styles)(SolarSystem);
