import React, { Fragment } from 'react';
import './App.css';
import NavBar from './navbar';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Home from './home/';

const styles = {
};

const App = ({ classes }) => (
  <Fragment>
    <NavBar />

    <div>
      <Home />
    </div>
  </Fragment>
);

export default withStyles(styles)(App);
