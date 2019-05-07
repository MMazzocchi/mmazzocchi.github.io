import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import Section from '../Section.js';
import { color2, color3 } from '../../../styles.js';

const styles = {
  title: {
    'color': color3,
    'font-size': 'xx-large',
  },
  icon: {
    'color': color2,
    'font-size': '5em',
    'padding': '20px',
  }
};

const Research = ({ classes }) => (
  <Section>
    <div>
      <div className={ classes.title }>
        Research
      </div>
      <div>
        I've had the opportunity to particpate in and contribut to multiple
        ongoing research projects throughout my career. In these positions, I've
        played a software support role to experts in various fields, providing
        rapid prototyping and data analysis capabilities.
      </div>
    </div>
    <div className={ classes.icon }>
      <i class="fas fa-flask"></i>
    </div>
  </Section>
);

export default withStyles(styles)(Research);
