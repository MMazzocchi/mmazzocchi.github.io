import React, { Fragment } from 'react';
import { color1, standard_shadow } from '../../styles.js';
import withStyles from 'react-jss';

import Section from './Section.js';

import Hello from './hello';
import Space from './space';
import Web from './web';
import Personal from './personal';
import Research from './research';
import Contact from './contact';

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

// Content rows will reverse every other Section it has as a child
const ContentRows = ({ children }) => (
  <Fragment>
    { children.map((child, i) => (
      <Fragment key={ `content-row-${ i }` }>
      { (child.type === Section) ?
        <Section
          reverse={ (i%2) === 1 }
          last={ (i+1) === children.length }
          { ...child.props } />
        :
        child
      }
      </Fragment>
    )) }
  </Fragment> 
);

const Content = ({ classes }) => (
  <div className={ classes.content_container }>
    <div className={ classes.content }>
      <ContentRows>
        <Section>
          <Hello />
        </Section>
        <Section>
          <Space />
        </Section>

        <Section>
          <Web />
        </Section>

        <Section>
          <Research />
        </Section>

        <Section>
          <Personal />
        </Section>

        <Section>
          <Contact />
        </Section>
      </ContentRows>
    </div>
  </div>
);

export default withStyles(styles)(Content); 