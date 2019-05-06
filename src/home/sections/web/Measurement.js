import React, { useState, useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles.js';
import { color2 } from '../../../styles.js';

const border = '2px '+color2+' solid';

const styles = {
  container: {
    'flex-grow': 1,
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-content': 'center',
    'border-right': border,
    'border-left': border,
  },
  text: {
    'color': color2,
    'border-top': border,
    'border-bottom': border,
    'text-align': 'center',
    'font-size': 'small'
  }
};

const Measurement = ({ classes }) => {
  const ref = React.createRef();
  const [ measure, setMeasure ] = useState(0);

  let frame_id = undefined;
  const takeMeasure = () => {
    if(ref.current) {
      setMeasure(ref.current.offsetWidth);
    }
    frame_id = window.requestAnimationFrame(takeMeasure);
  };

  useEffect(() => {
    takeMeasure();

    return () => {
      window.cancelAnimationFrame(frame_id);
    };
  });

  return (
    <div className={ classes.container } ref={ ref }>
      <div className={ classes.text }>
        { `${ measure }px` }
      </div>
    </div>
  );
};

export default withStyles(styles)(Measurement);
