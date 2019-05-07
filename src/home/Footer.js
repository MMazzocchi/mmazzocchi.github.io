import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color1 } from '../styles.js';

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
        CC-BY-SA 3.0
      </Link> license.

      <Link
        href='https://commons.wikimedia.org/wiki/File:Flag_map_of_Washington_DC.png'>
        Wikimedia Source
      </Link>
    </div>
    <div>
      All other content made by me, which I think is pretty cool since I used to
      be purely a systems guy.
    </div>
  </div>
);

export default withStyles(styles)(Footer);
