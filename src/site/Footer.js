import React, { Fragment } from 'react';
import withStyles from 'react-jss';
import { color1 } from './styles.js';

const styles = {
  container: {
    'color': color1,
    'font-size': 'x-small',
    'padding': '20px',
    'text-align': 'center',
  },
};

const Link = ({ href, children }) => (
  <Fragment>
    {' '}
    <a href={ href } style={{ 'color': color1 }}>
      { children }
    </a>
  </Fragment>
);

const Footer = ({ classes }) => (
  <div className={ classes.container }>
    <div>
      Washington DC Flag Map created by

      <Link
        href='https://commons.wikimedia.org/wiki/User:DrRandomFactor'>
        DrRandomFactor
      </Link>, used under 

      <Link
        href='https://creativecommons.org/licenses/by-sa/3.0/deed.en'>
        CC BY-SA 3.0
      </Link> license.

      <Link
        href='https://commons.wikimedia.org/wiki/File:Flag_map_of_Washington_DC.png'>
        Wikimedia Source
      </Link>
    </div>
    <div>
      Hexagon pattern used from

      <Link
        href='https://www.heropatterns.com/'>
        Hero Patterns
      </Link>, under

      <Link
        href='https://creativecommons.org/licenses/by/4.0/'>
        CC BY 4.0
      </Link>.
    </div>
  </div>
);

export default withStyles(styles)(Footer);
