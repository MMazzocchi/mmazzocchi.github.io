import React from 'react';
import withStyles from 'react-jss';
import {
  color1,
  color3,
  standard_shadow,
  semi_transparent
} from '../../styles.js';

const styles = {
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
    'transition': 'max-height 0.8s linear',
    'overflow-y': 'hidden',
    'max-height': 0,
  },
  code: {
    'padding': '10px',
    'color': color1,
    'font-size': 'large',
    'margin': 0,
  },
};

const CodeBox = ({ children, closing, classes }) => (
  <div className={ classes.overlay }>
    <div
      className={ classes.textbox }
      style={ closing ? {} : { maxHeight: '100%' }}>
      <pre className={ classes.code }>
        { children }
      </pre>
    </div>
  </div>
);

export default withStyles(styles)(CodeBox);
