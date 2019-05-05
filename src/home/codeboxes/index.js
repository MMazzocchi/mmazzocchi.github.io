import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import dc from './dc.png';
import useAutoWarningCounter from './useAutoWarningCounter.js';
import code_strings from './code_strings.js';
import {
  color1,
  color3,
  standard_shadow,
  semi_transparent
} from '../../styles.js';

const styles = {
  container: {
    'padding': '10px',
  },
  overlay: {
    'display': 'flex',
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': '100%',
    'height': '100%',
    'align-items': 'center',
    'justify-content': 'center',
  },
  textbox: {
    'background': color3+semi_transparent,
    'box-shadow': standard_shadow,
    'transition': 'max-height 0.5s',
    'overflow-y': 'hidden',
    'max-height': 0,
  },
  code: {
    'padding': '10px',
    'color': color1,
    'font-size': 'large',
    'margin': 0,
  },
  row: {
    'display': 'flex',
  },
  boxes_container: {
    'position': 'relative',
    'padding-left': '100px',
    'padding-right': '100px',
  }
};

const TextBoxes = ({ index, closing, classes }) => (
  <div className={ classes.overlay }>
    <div
      className={ classes.textbox }
      style={ closing ? {} : { maxHeight: '100%' }}>
      <pre className={ classes.code }>
        { code_strings[index] }
      </pre>
    </div>
  </div>
);

const FadingBoxes = ({ classes }) => {
  const { count, warning } =
    useAutoWarningCounter({ warning_duration: 500, duration: 5000 });

  return (
    <div className={ classes.row }>
      <div className={ classes.boxes_container }>
        <img src={ dc } width="300px" alt="DC" />
        <TextBoxes
          classes={ classes }
          index={ count % code_strings.length }
          closing={ warning } />
      </div>
    </div>
  );
};

const CodeBoxes = ({ classes }) => (
  <div className={ classes.container }>
    <FadingBoxes classes={ classes }/>
  </div> 
);

export default withStyles(styles)(CodeBoxes);
