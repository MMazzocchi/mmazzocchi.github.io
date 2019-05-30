import React from 'react';
import withStyles from 'react-jss';
import { color2, color3 } from './styles.js';
import splash from './splash.jpg';

const styles = {
  container: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'height': '100%',
    'width': '100%',
    'z-index': -1,
    'background-color': color2,
    'background-image': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='98' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='white' fill-opacity='0.2' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");",
    'background-repeat': 'repeat',
  },
  top_bg: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': '100%',
    'min-height': '650px',
    'height': '40%',
    'background-image': `url(${ splash })`,
    'background-size': 'cover',
    'background-position': 'bottom',
  },
  bottom_bg: {
    'position': 'absolute',
    'bottom': 0,
    'left': 0,
    'width': '100%',
    'min-height': '20%',
    'background-color': color3,
  }
};

const Backgrounds = ({ classes }) => (
  <div className={ classes.container }>
    <div className={ classes.top_bg }></div>
    <div className={ classes.bottom_bg }></div>
  </div>
);

export default withStyles(styles)(Backgrounds);
