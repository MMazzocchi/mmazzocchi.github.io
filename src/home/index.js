import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles.js';

const styles = {
  container: {
    flexGrox: 1,
  },
  content: {
    padding: '24px',
  }
};

const Home = ({ classes }) => (
  <Grid container>
    <Paper style={{ width: '100%', height: '300px' }} />          
  </Grid>
);

export default withStyles(styles)(Home);
