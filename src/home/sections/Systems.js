import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Section from './Section.js';
import { color2, color3 } from '../../styles.js';

const styles = {
  title: {
    'color': color3,
    'font-size': 'xx-large',
  },
  solar_system: {
    'min-width': '200px',
    'min-height': '200px',
    'position': 'relative',
    'margin': '20px',
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

const Systems = ({ classes }) => (
  <Section>
    <div>
      <div className={ classes.title }>
        Space Systems
      </div>
      <div>
        A large part of my career has taken place within organizations and teams
        working in the aerospace industry. My experience includes development on
        both ground and flight systems, spanning a wide variety of technologies
        and languages, including C/C++, Java, Python, and FORTRAN. 
      </div>
    </div>
    <div className={ classes.solar_system }>
      <Sun classes={ classes } />
      <Planet classes={ classes } x="10%" y="50%" />
      <Planet classes={ classes } x="18%" y="50%" />
      <Planet classes={ classes } x="26%" y="50%" />
      <Planet classes={ classes } x="34%" y="50%" />
    </div>
  </Section>
);

export default withStyles(styles)(Systems);
