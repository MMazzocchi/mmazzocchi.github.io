import React, { Fragment } from 'react';
import withStyles from 'react-jss';
import Content from './sections/Content.js';

const styles = {
};

const Home = ({ classes }) => (
  <Fragment>
    <Content />
  </Fragment>
);

export default withStyles(styles)(Home);
