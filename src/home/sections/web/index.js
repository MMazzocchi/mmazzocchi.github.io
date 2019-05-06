import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Section from '../Section.js';
import { color3 } from '../../../styles.js';

const styles = {
  title: {
    'color': color3,
    'font-size': 'xx-large',
  },
};

const Web = ({ classes }) => (
  <Section>
    <div>
      <div className={ classes.title }>
        Web Development
      </div>
      <div>
        In recent positions, and on personal projects, I continuously develop
        experience in web service development and deployment. This has included
        both front-end and back-end systems, as well as frameworks like NodeJS,
        Django, and React.
      </div>
    </div>
  </Section>
);

export default withStyles(styles)(Web);
