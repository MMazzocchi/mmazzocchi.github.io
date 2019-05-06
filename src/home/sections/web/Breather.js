import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color1, color2 } from '../../../styles.js';
import Measurement from './Measurement.js';
import './breath.css';

const styles = {
  container: {
    'display': 'flex',
    'min-width': '230px',
  },
  middle: {
    'animation-name': 'breath',
    'animation-duration': '2s',
    'animation-iteration-count': 'infinite',
    'animation-direction': 'alternate',
    'animation-timing-function': 'ease-in-out',
    'overflow': 'hidden',
    'display': 'flex',
    'align-items': 'center',
  },
  text: {
    'background-color': color2,
    'color': color1,
    'font-size': 'x-small',
    'margin': 0,
    'padding': '5px',
  },
};
 
const Breather = ({ classes }) => (
  <div className={ classes.container }>
    <Measurement />
    <div className={ classes.middle }>
      <pre className={ classes.text }>
{`{
  'name': 'Max',
  'occupation': 'developer',
  'languages': [
    'C/C++',
    'Java',
    'Python',
    ...
  ]
}`}
      </pre>
    </div>
    <Measurement />
  </div>
);

export default withStyles(styles)(Breather);
