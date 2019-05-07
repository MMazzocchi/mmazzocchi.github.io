import React, { Fragment } from 'react';
import { color1, standard_shadow } from '../../styles.js';
import withStyles from '@material-ui/core/styles/withStyles.js';

import Section from './Section.js';

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

const ContentRows = ({ children }) => (
  <Fragment>
    { children }
  </Fragment> 
);

const Content = ({ classes }) => (
  <div className={ classes.content_container }>
    <div className={ classes.content }>
      <ContentRows>
        <Section>
          <Hello />
        </Section>

        <Space />
        <Web />
        <Research />
        <Personal />
      </ContentRows>
    </div>
  </div>
);

export default withStyles(styles)(Content); 
