import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color4 } from '../../../styles.js';
import './orbit.css';

const styles = {
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

export default withStyles(styles)(Planet);
