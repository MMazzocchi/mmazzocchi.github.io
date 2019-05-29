import React from 'react';
import NavBar from './navbar';
import withStyles from 'react-jss';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './header';
import Home from './home';
import Contact from './contact';
import Footer from './Footer.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Backgrounds from './Backgrounds.js';
import { color1, standard_shadow } from './styles.js';

const styles = {
  container: {
    'position': 'relative',
    'min-height': '100vh',
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  },
  content: {
    'background-color': color1,
    'box-shadow': standard_shadow,
    'max-width': '1000px',
    'padding-left': '50px',
    'padding-right': '50px',
    'padding-top': '30px',
    'padding-bottom': '30px',
    'margin-left': '30px',
    'margin-right': '30px',
    'flex-grow': 1,
    'justify-content': 'center',
  },
};

const Site = ({ classes }) => (
  <Router>

    <div className={ classes.container }>
      <Backgrounds />
      <NavBar />
      <Header />

      <div className={ classes.content }>
        <Route exact path="/" component={ Home } />
        <Route path="/contact" component={ Contact } />
      </div>

      <Footer />
    </div>
  </Router>
);

export default withStyles(styles)(Site);
