import React, { Fragment } from 'react';
import Heart from './Heart.js';
import Spacer from '../Spacer.js';
import Text from '../Text.js';

const Personal = () => (
  <Fragment>
    <Heart />

    <Spacer />

    <Text title="Personal Projects">
      I regularly spend time pursuing personal projects in a wide variery of
      technologies. Some of these get finished, others don't, but all of them
      have contributed to my growth as a developer. For more information,
      please see my GitHub account.
    </Text>
  </Fragment>
);

export default Personal;
