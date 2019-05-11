import React, { Fragment } from 'react';
import NavBar from './navbar';
import withStyles from 'react-jss';
import '@fortawesome/fontawesome-free/css/all.css';
import { color3 } from './styles.js';
import splash from './splash.jpg';
import Header from './header';
import Content from './Content.js';
import Home from './home';
import Contact from './contact';
import Footer from './Footer.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

const styles = {
  splash: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': '100%',
    'min-height': '550px',
    'height': '40%',
    'background-image': `url(${ splash })`,
    'background-size': 'cover',
    'background-position': 'bottom',
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
    <Router>
      <NavBar />

      <div className={ classes.container }>
        <div className={ classes.splash }></div>

        <Header />
        <Content>
          <Route exact path="/" component={ Home } />
          <Route path="/contact" component={ Contact } />
        </Content>
        <Footer />

        <div className={ classes.bottom_splash }></div>
      </div>
    </Router>
  </Fragment>
);

export default withStyles(styles)(Site);
