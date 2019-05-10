import React, { Fragment } from 'react';
import Spacer from '../Spacer.js';
import Laptop from './Laptop.js';
import Text from '../Text.js';

const Web = () => (
  <Fragment>
    <Laptop />

    <Spacer />

    <Text title="Web Development">
      In recent positions, and on personal projects, I continuously develop
      experience in web service development and deployment. This has included
      both front-end and back-end systems, as well as frameworks like NodeJS,
      Django, and React.
    </Text>
  </Fragment>
);

export default Web;
