import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Section from '../Section.js';
import { color3 } from '../../../styles.js';
import SolarSystem from './SolarSystem.js';

const styles = {
  title: {
    'color': color3,
    'font-size': 'xx-large',
  },
  solar_system: {
    'padding-left': '20px',
  }
};

const Space = ({ classes }) => (
  <Section>
    <div>
      <div className={ classes.title }>
        Space Space
      </div>
      <div>
        A large part of my career has taken place within organizations and teams
        working in the aerospace industry. My experience includes development on
        both ground and flight systems, spanning a wide variety of technologies
        and languages, including C/C++, Java, Python, and FORTRAN. 
      </div>
    </div>
    <div className={ classes.solar_system }>
      <SolarSystem />
    </div>
  </Section>
);

export default withStyles(styles)(Space);
