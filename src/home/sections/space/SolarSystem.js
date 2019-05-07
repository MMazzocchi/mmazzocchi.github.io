import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color4 } from '../../../styles.js';
import Planet from './Planet.js';
import './orbit.css';

const styles = {
  solar_system: {
    'min-width': '200px',
    'min-height': '200px',
    'position': 'relative',
  },
  sun: {
    'padding': '15px',
    'border-radius': '15px',
    'background-color': color4,
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

const SolarSystem = ({ classes }) => (
  <div className={ classes.solar_system }>
    <Sun classes={ classes } />
    <Planet orbit_radius="40%" y="10%" x="50%" duration="27s" />
    <Planet orbit_radius="32%" y="18%" x="50%" duration="9s" />
    <Planet orbit_radius="24%" y="26%" x="50%" duration="3s" />
    <Planet orbit_radius="16%" y="34%" x="50%" duration="1s" />
  </div>
);

export default withStyles(styles)(SolarSystem);
