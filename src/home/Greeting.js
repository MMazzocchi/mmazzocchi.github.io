import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import {
  color1,
  color2,
  color2_light,
  color3,
  standard_shadow,
  elevated_shadow,
  semi_transparent
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
  }
};

const Greeting = ({ classes }) => (
  <div className={ classes.box }>
    <div className={ classes.greeting }>
      Welcome.
    </div>
    <div style={{ fontSize: 'medium' }}>
      Max Mazzocchi, Software Developer
    </div>
    <div style={{ fontSize: 'small', paddingBottom: '10px', }}>
      Washington DC/Northern Virginia
    </div>
    <div className={ classes.button }>
      <a className={ classes.link } href="mailto://maxwell.mazzocchi@gmail.com">
        Contact Me
      </a>
    </div>
  </div>
);

export default withStyles(styles)(Greeting);
