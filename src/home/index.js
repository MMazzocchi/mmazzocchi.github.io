import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import splash from './splash.jpg';
import Header from './Header.js';
import Footer from './Footer.js';
import { color3 } from '../styles.js';
import Content from './sections/Content.js';

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

const Home = ({ classes }) => (
  <Fragment>
    <div className={ classes.container }>
      <div className={ classes.splash }></div>

      <Header />
      <Content />
      <Footer />

      <div className={ classes.bottom_splash }></div>
    </div>
  </Fragment>
);

export default withStyles(styles)(Home);
