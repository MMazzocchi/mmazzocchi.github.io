import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color3 } from '../../../styles.js';
import Breather from './Breather.js';
import Spacer from '../Spacer.js';

const styles = {
  title: {
    'color': color3,
    'font-size': 'xx-large',
  },
};

const Web = ({ classes }) => (
  <Fragment>
    <Breather />

    <Spacer />

    <div>
      <div className={ classes.title }>
        Web Development
      </div>
      <div>
        In recent positions, and on personal projects, I continuously develop
        experience in web service development and deployment. This has included
        both front-end and back-end systems, as well as frameworks like NodeJS,
        Django, and React.
      </div>
    </div>
  </Fragment>
);

export default withStyles(styles)(Web);
