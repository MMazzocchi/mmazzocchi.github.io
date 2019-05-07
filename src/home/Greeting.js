import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import {
  color1,
  color2,
  color2_light,
  color3,
  standard_shadow,
  elevated_shadow,
  semi_transparent,
  breakpoints,
} from '../styles.js';

const styles = {
  box: {
    'color': color1,
    'background': color3+semi_transparent,
    'padding': '50px',
    'box-shadow': standard_shadow,
  },
  greeting: {
    'font-weight': 600,
    'font-size': 'xx-large',
    'padding-bottom': '2vh',
  },
  title: {
    'font-size': 'medium',
    'padding-bottom': '2vh',
  },
  location: {
    'font-size': 'small',
    'padding-bottom': '2vh',
  },
  button_box: {
    'display': 'flex',
  },
  button: {
    'background': color2,
    'font-weight': 600,
    'text-align': 'center',
    'padding': '10px',
    'box-shadow': standard_shadow,
    'display': 'inline-block',
    'border-radius': '5px',
    'transition': 'background 0.2s, box_shadow 0.2s',
    '&:hover': {
      'background': color2_light,
      'box_shadow': elevated_shadow,
    }
  },
  link: {
    'text-decoration': 'none',
    'color': color1,
  },

  [`@media (max-width: ${ breakpoints.md })`]: {
    greeting: {
      'text-align': 'center',
    },
    title: {
      'text-align': 'center',
    },
    location: {
      'text-align': 'center',
    },
    button_box: {
      'justify-content': 'center',
    }
  }
};

const Greeting = ({ classes }) => (
  <div className={ classes.box }>
    <div className={ classes.greeting }>
      Welcome.
    </div>
    <div className={ classes.title }>
      Max Mazzocchi, Software Developer
    </div>
    <div className={ classes.location }>
      Washington DC/Northern Virginia
    </div>
    <div className={ classes.button_box }>
      <div className={ classes.button }>
        <a className={ classes.link } href="mailto://maxwell.mazzocchi@gmail.com">
          Contact Me
        </a>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(Greeting);
