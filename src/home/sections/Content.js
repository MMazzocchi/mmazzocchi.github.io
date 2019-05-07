import React from 'react';
import { color1, standard_shadow } from '../../styles.js';
import withStyles from '@material-ui/core/styles/withStyles.js';

import Hello from './hello';
import Space from './space';
import Web from './web';
import Personal from './personal';
import Research from './research';

const styles = {
  content: {
    'background-color': color1,
    'box-shadow': standard_shadow,
    'width': '90%',
    'max-width': '1000px',
  },
  container: {
    'position': 'relative',
  },
  content_container: {
    'display': 'flex',
    'justify-content': 'center',
  },
};

const Content = ({ classes }) => (
  <div className={ classes.content_container }>
    <div className={ classes.content }>
      <Hello />
      <Space />
      <Web />
      <Research />
      <Personal />
    </div>
  </div>
);

export default withStyles(styles)(Content); 
