import React, { Fragment } from 'react';
import withStyles from 'react-jss';
import me from './me.jpg';
import { standard_shadow } from '../../../styles.js';
import Spacer from '../Spacer.js';
import Text from '../Text.js';
import lockAspect from '../../../utils/lockAspect.js';

const styles = {
  picture: {
    'box-shadow': standard_shadow,
    'min-width': '200px',
    'max-width': '100%',
  }
};

const Me = lockAspect(({ className }) => (
  <img className={ className } src={me} alt="Max Mazzocchi" />
)); 

const Hello = ({ classes }) => (
  <Fragment>
    <Me className={ classes.picture } />

    <Spacer />

    <Text title='Hello!'>
      Thanks for visiting my webpage. Here you can find out a bit more about
      my experience, interests, and current projects. I currently hold a 
      research and software development position in Northern Virginia, but I'm
      always open to making new contacts with other developers and
      organizations, so please feel free to get in touch!
    </Text>
  </Fragment>
);

export default withStyles(styles)(Hello);
