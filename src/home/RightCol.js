import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles.js';
import dc from './dc.svg';
import lockAspect from '../utils/lockAspect.js';

const styles = {
  column: {
    'text-align': 'center'
  },
  container: {
    display: 'flex',
    'justify-content': 'center',
  }
};

const DCImg = () => (
  <div>
    <img src={dc} alt="DC" />
  </div>
);

const DC = () => (lockAspect(DCImg));

const RightCol = ({ classes }) => (
  <Grid item xs={6} className={ classes.column }>
    <div className={ classes.container }>
      <DC />
    </div>
  </Grid>
);

export default withStyles(styles)(RightCol);
