import React, { Fragment } from 'react';
import './App.css';
import NavBar from './site/navbar';
import withStyles from 'react-jss';
import Home from './site/home/';
import '@fortawesome/fontawesome-free/css/all.css';

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
