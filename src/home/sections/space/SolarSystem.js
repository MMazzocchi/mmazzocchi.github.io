import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color4 } from '../../../styles.js';
import './orbit.css';

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
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },
  orbit_container: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': '100%',
    'height': '100%',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },
  orbit: {
    'border': '1px '+color4+' solid',
    'width': 0,
    'height': 0,
    'border-radius': '50%',
  },
  body_container: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': '100%',
    'height': '100%',
    'animation-name': 'orbit',
    'animation-iteration-count': 'infinite',
    'animation-timing-function': 'linear',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },
  planet: {
    'padding': '5px',
    'background-color': color4,
    'border-radius': '5px',
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

const Planet = ({ classes, x, y, orbit_radius, duration }) => (
  <div
    className={ classes.planet_container }
    >

    <div className={ classes.orbit_container }>
      <div
        className={ classes.orbit }
        style={{
          'padding': orbit_radius,
        }}></div>
    </div>

    <div className={ classes.body_container }
      style={{ animationDuration: duration }}>
      <div className={ classes.body } style={{ top: y, left: x }}>
        <div className={ classes.planet }></div>
      </div>
    </div>
  </div>
);

const SolarSystem = ({ classes }) => (
  <div className={ classes.solar_system }>
    <Sun classes={ classes } />
    <Planet classes={ classes } orbit_radius="40%" y="10%" x="50%" duration="27s" />
    <Planet classes={ classes } orbit_radius="32%" y="18%" x="50%" duration="9s" />
    <Planet classes={ classes } orbit_radius="24%" y="26%" x="50%" duration="3s" />
    <Planet classes={ classes } orbit_radius="16%" y="34%" x="50%" duration="1s" />
  </div>
);

export default withStyles(styles)(SolarSystem);
