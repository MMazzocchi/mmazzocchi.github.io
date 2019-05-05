import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import splash from './splash.jpg';
import { color1, standard_shadow } from '../styles.js';

const styles = {
  splash: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': '100%',
    'min-height': '75%',
    'background-image': `url(${ splash })`,
    'background-size': 'cover',
    'background-position': 'center',
    'z-index': -1,
  },
  header: {
    'display': 'flex',
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
  content: {
  },
  container: {
    'position': 'relative',
  }
};

const Home = ({ classes }) => (
  <Fragment>
    <div className={ classes.container }>
      <div className={ classes.splash }>
      </div>
      <div className={ classes.header }>
        <div className={ classes.greeting_col }>
          <div className={ classes.greeting_box }>
            <div className={ classes.greeting }>
              Welcome.
            </div>
            <div style={{ fontSize: 'medium' }}>
              Max Mazzocchi, Software Developer
            </div>
            <div style={{ fontSize: 'small' }}>
              Washington DC/Northern Virginia
            </div>
          </div>
        </div>
      </div>
      <div className={ classes.content }>
        
      </div>
    </div>
  </Fragment>
);

export default withStyles(styles)(Home);
