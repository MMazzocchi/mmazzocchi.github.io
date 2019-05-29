import React from 'react';
import NavBar from './navbar';
import withStyles from 'react-jss';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './header';
import Content from './Content.js';
import Home from './home';
import Contact from './contact';
import Footer from './Footer.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Backgrounds from './Backgrounds.js';

const styles = {
  container: {
    'position': 'relative',
    'min-height': '100vh',
    'display': 'flex',
    'flex-direction': 'column',
  },
};

const Site = ({ classes }) => (
  <Router>

    <div className={ classes.container }>
      <Backgrounds />

      <NavBar />

      <Header />
      <Content>
        <Route exact path="/" component={ Home } />
        <Route path="/contact" component={ Contact } />
      </Content>
      <Footer />

      <div className={ classes.bottom_splash }></div>
    </div>
  </Router>
);

export default withStyles(styles)(Site);
