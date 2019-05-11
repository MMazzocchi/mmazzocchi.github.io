import React, { Fragment } from 'react';

import Section from './Section.js';

import Hello from './sections/hello';
import Space from './sections/space';
import Web from './sections/web';
import Personal from './sections/personal';
import Research from './sections/research';
import Contact from './sections/contact';

// Content rows will reverse every other Section it has as a child
const ContentRows = ({ children }) => (
  <Fragment>
    { children.map((child, i) => (
      <Fragment key={ `content-row-${ i }` }>
      { (child.type === Section) ?
        <Section
          first={ i === 0 }
          last={ (i+1) === children.length }
          reverse={ (i%2) === 1 }
          { ...child.props } />
        :
        child
      }
      </Fragment>
    )) }
  </Fragment> 
);

const Home = () => (
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
);

export default Home; 
