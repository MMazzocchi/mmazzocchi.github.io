import React from 'react';
import withStyles from 'react-jss';
import lockAspect from '../utils/lockAspect.js';
import withHover from '../utils/withHover.js';
import { standard_shadow, elevated_shadow, color1 } from '../styles.js';

const styles = {
  link: {
    'text-decoration': 'none',
  },
  container: {
    'color': color1,
    'display': 'flex',
    'align-items': 'center',
    'margin-bottom': '20px',
    'min-width': '40vw',
    'box-shadow': standard_shadow,
    'transition': 'box-shadow 0.2s, background-color 0.2s',
    '&:hover': {
      'box-shadow': elevated_shadow,
    },
  },
  title: {
    'font-size': 'x-large',
    'padding-left': '20px',
    'padding-right': '20px',
    'border-left': 'solid 2px white',
  }
};

const Icon = lockAspect(({ className }) => (
  <div style={{
    paddingLeft: '20px',
    paddingRight: '20px',
    fontSize: 'xx-large',
  }}>
    <i className={ className }></i>
  </div>
));

const ContactMethod = withHover(({
  classes, icon, title, href, color, elevated_color, hover,
  }) => (
  <a href={ href } className={ classes.link }>
    <div
      className={ classes.container }
      style={{
        backgroundColor: hover ? elevated_color : color,
       }}
    >
      <Icon className={ icon } />
      <div className={ classes.title }>
        { title }
      </div>
    </div>
  </a>
));

export default withStyles(styles)(ContactMethod);