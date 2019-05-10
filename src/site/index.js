import React, { Fragment } from 'react';
import NavBar from './navbar';
import withStyles from 'react-jss';
import Home from './home/';
import '@fortawesome/fontawesome-free/css/all.css';
import { color3 } from './styles.js';
import splash from './splash.jpg';
import Header from './header';
import Footer from './Footer.js';

const styles = {
  splash: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': '100%',
    'min-height': '40%',
    'background-image': `url(${ splash })`,
    'background-size': 'cover',
    'background-position': 'center',
    'z-index': -1,
  },
  container: {
    'position': 'relative',
  },
  bottom_splash: {
    'position': 'absolute',
    'bottom': 0,
    'left': 0,
    'width': '100%',
    'min-height': '20%',
    'background-color': color3,
    'z-index': -1,
  }
};

const Site = ({ classes }) => (
  <Fragment>
    <NavBar />

    <div className={ classes.container }>
      <div className={ classes.splash }></div>

      <Header />
      <Home />
      <Footer />

      <div className={ classes.bottom_splash }></div>
    </div>
  </Fragment>
);

export default withStyles(styles)(Site);
