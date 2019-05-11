import React from 'react';
import withStyles from 'react-jss';
import ContactMethod from './ContactMethod.js';
import {
  color2, color2_light,
  color3, color3_light,
  color4, color4_light,
} from '../styles.js';

const styles = {
  header: {
    'text-align': 'center',
    'font-size': 'x-large',
    'font-weight': 500,
    'padding-bottom': '30px',
  },
  link_container: {
    'max-width': '500px',
    'width': '100%',
    'flex-grow': 1,
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'stretch',
  },
  container: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  }
};

const contact_methods = [
  {
    title: "Email",
    icon: "far fa-envelope",
    href: "mailto:maxwell.mazzocchi@gmail.com",
    color: color4,
    elevated_color: color4_light,
  },
  {
    title: "GitHub",
    icon: "fab fa-github",
    href: "https://github.com/MMazzocchi/",
    color: color3,
    elevated_color: color3_light,
  },
  {
    title: "LinkedIn",
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/in/maxwellmazzocchi/",
    color: color2,
    elevated_color: color2_light,
  },
];

const Contact = ({ classes }) => (
  <div className={ classes.container }>
    <div className={ classes.header }>
      Contact Me
    </div>
    <div className={ classes.link_container }>
      { contact_methods.map((props, i) => (
        <ContactMethod key={ `method-${ i }` } { ...props } />
      )) }
    </div>
  </div>
);

export default withStyles(styles)(Contact);
