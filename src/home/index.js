import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import splash from './splash.jpg';
import { color1, standard_shadow } from '../styles.js';

const styles = {
  splash: {
    'display': 'flex',
    'background-image': `url(${ splash })`,
    'background-size': 'cover',
    'background-position': 'bottom',
    'align-items': 'center',
  },
  greeting_col: {
    'padding': '100px',
  },
  greeting_box: {
    'color': color1,
    'background': 'rgba(0, 0, 0, 0.7)',
    'padding': '50px',
    'box-shadow': standard_shadow,
  },
  greeting: {
    'font-weight': 600,
    'font-size': 'xx-large',
    'padding-bottom': '2vh',
  },
  greeting_sub: {
    'font-size': 'medium'
  },
  greeting_sub_sub: {
    'font-size': 'small'
  }
};

const Home = ({ classes }) => (
  <Fragment>
    <div className={ classes.splash }>
      <div className={ classes.greeting_col }>
        <div className={ classes.greeting_box }>
          <div className={ classes.greeting }>
            Welcome.
          </div>
          <div className={ classes.greeting_sub }>
            Max Mazzocchi, Software Developer
          </div>
          <div className={ classes.greeting_sub_sub }>
            Washington DC/Northern Virginia
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default withStyles(styles)(Home);
