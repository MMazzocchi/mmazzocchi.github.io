import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color3 } from '../../../styles.js';
import Heart from './Heart.js';
import Spacer from '../Spacer.js';

const styles = {
  title: {
    'color': color3,
    'font-size': 'xx-large',
  },
};

const Personal = ({ classes }) => (
  <Fragment>
    <Heart />

    <Spacer />

    <div>
      <div className={ classes.title }>
        Personal Projects 
      </div>
      <div>
        I regularly spend time pursuing personal projects in a wide variery of
        technologies. Some of these get finished, others don't, but all of them
        have contributed to my growth as a developer. For more information,
        please see my GitHub account.
      </div>
    </div>
  </Fragment>
);

export default withStyles(styles)(Personal);
