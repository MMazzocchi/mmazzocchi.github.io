import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import lockAspect from '../../utils/lockAspect.js';
import dc from './dc.svg';
import useAutoCounter from './useAutoCounter.js';
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
    'color': color1,
    'padding': '10px',
    'font-size': 'medium',
    'background': color3+semi_transparent,
    'box-shadow': standard_shadow,
    'transition': 'opacity 0.5s',
  },
  row: {
    'display': 'flex',
  },
  boxes_container: {
    'position': 'relative',
  }
};

const TextBoxes = ({ index, classes }) => (
  <Fragment>
    { code_strings.map((str, i) => (
      <div key={ `codebox-${ i }` } className={ classes.overlay }>
        <pre
           className={ classes.textbox }
           style={ i === index ? {} : { opacity: 0 }}
        >
          { str }
        </pre>
      </div>
    )) }
  </Fragment>
);

const FadingBoxes = ({ classes }) => {
  const index = useAutoCounter({ n: code_strings.length, duration: 5000 });

  return (
    <div className={ classes.row }>
      <div className={ classes.boxes_container }>
        <img src={ dc } alt="DC" />
        <TextBoxes classes={ classes } index={ index } />
      </div>
    </div>
  );
};

const InnerCodeBoxes = lockAspect(({ classes }) => (
  <div className={ classes.container }>
    <FadingBoxes classes={ classes }/>
  </div>
));

const CodeBoxes = ({ classes }) => (
  <div>
    <InnerCodeBoxes classes={ classes }/>
  </div>
);

export default withStyles(styles)(CodeBoxes);
