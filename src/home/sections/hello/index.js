import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import me from './me.jpg';
import { color3, standard_shadow } from '../../../styles.js';

const styles = {
  hello: {
    'color': color3,
    'font-size': 'xx-large',
  },
  picture: {
    'box-shadow': standard_shadow,
    'min-width': '200px',
  }
};

const Hello = ({ classes }) => (
  <Fragment>
    <img className={ classes.picture } src={me} alt="Max Mazzocchi" />

    <div>
      <div className={ classes.hello }>
        Hello!
      </div>
      <div>
        Thanks for visiting my webpage. Here you can find out a bit more about
        my experience, interests, and current projects. I currently hold a 
        research and software development position in Northern Virginia, but I'm
        always open to making new contacts with other developers and
        organizations, so please feel free to get in touch!
      </div>
    </div>
  </Fragment>
);

export default withStyles(styles)(Hello);
