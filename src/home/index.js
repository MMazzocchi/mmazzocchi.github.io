import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import splash from './splash.jpg';
import Header from './Header.js';
import Footer from './Footer.js';
import { color1, color3, standard_shadow } from '../styles.js';
import Hello from './sections/hello';
import Space from './sections/space';
import Web from './sections/web';
import Personal from './sections/personal';

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
  content: {
    'background-color': color1,
    'box-shadow': standard_shadow,
    'width': '90%',
    'max-width': '1000px',
  },
  container: {
    'position': 'relative',
  },
  content_container: {
    'display': 'flex',
    'justify-content': 'center',
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

      <div className={ classes.content_container }>
        <div className={ classes.content }>
          <Hello />
          <Space />
          <Web />
          <Personal />
        </div>
      </div>

      <Footer />

      <div className={ classes.bottom_splash }></div>
    </div>
  </Fragment>
);

export default withStyles(styles)(Home);
