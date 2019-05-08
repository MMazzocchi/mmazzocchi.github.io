import React from 'react';
import withStyles from 'react-jss';
import dc from './dc.png';
import useAutoWarningCounter from './useAutoWarningCounter.js';
import code_strings from './code_strings.js';
import CodeBox from './CodeBox.js';

const styles = {
  container: {
    'padding': '10px',
  },
  row: {
    'display': 'flex',
  },
  boxes_container: {
    'position': 'relative',
    'padding-left': '80px',
    'padding-right': '80px',
  }
};

const FadingBoxes = ({ classes }) => {
  const { count, warning } =
    useAutoWarningCounter({ warning_duration: 750, duration: 5000 });

  return (
    <div className={ classes.row }>
      <div className={ classes.boxes_container }>
        <img src={ dc } width="300px" alt="DC" />
        <CodeBox
          closing={ warning }>
          { code_strings[count % code_strings.length] }
        </CodeBox>
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
