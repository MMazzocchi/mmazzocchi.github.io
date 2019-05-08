import React, { Fragment } from 'react';
import SolarSystem from './SolarSystem.js';
import Spacer from '../Spacer.js';
import Text from '../Text.js';

const Space = () => (
  <Fragment>
    <SolarSystem />

    <Spacer />

    <Text title="Space Systems">
      A large part of my career has taken place within organizations and teams
      working in the aerospace industry. My experience includes development on
      both ground and flight systems, spanning a wide variety of technologies
      and languages, including C/C++, Java, Python, and FORTRAN. 
    </Text>
  </Fragment>
);

export default Space;
