import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import splash from './splash.jpg';
import Greeting from './Greeting.js';

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
          <Greeting />
        </div>
      </div>
      <div className={ classes.content }>
        
      </div>
    </div>
  </Fragment>
);

export default withStyles(styles)(Home);
