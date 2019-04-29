import React, { Fragment } from 'react';
import './App.css';
import NavBar from './navbar';
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

const App = ({ classes }) => (
  <Fragment>
    <NavBar />

    <div className={ classes.container }>
      <Grid container justify="center">
        <Grid item xs={12} md={8} className={ classes.content }>
          <Paper style={{ width: '100%', height: '300px' }} />          
        </Grid>
      </Grid>
    </div>
  </Fragment>
);

export default withStyles(styles)(App);
