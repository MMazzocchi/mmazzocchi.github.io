import React from 'react';
import withStyles from 'react-jss';
import {
  color1,
  color3,
  standard_shadow,
  semi_transparent,
  breakpoints,
} from './styles.js';
import Button from './Button.js';

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
      <Button href="mailto:maxwell.mazzocchi@gmail.com">
        Contact Me
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(Greeting);
