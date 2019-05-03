import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles.js';
import RightCol from './RightCol.js';

const styles = {
  column: {
    textAlign: 'center'
  },
  root: {
    'align-items': 'center'
  }
};

const Home = ({ classes }) => (
  <Grid container className={ classes.root }>
    <Grid item xs={6} className={ classes.column }>
      <h1>Max Mazzocchi</h1>
    </Grid>
    <RightCol />
  </Grid>
);

export default withStyles(styles)(Home);
