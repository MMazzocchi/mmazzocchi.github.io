import React, { useState } from 'react';

const withHover = (Element) => (({ ...rest }) => {
  const [ hover, setHover ] = useState(false);

  return (
    <div
      onMouseEnter={ () => { setHover(true); } }
      onMouseLeave={ () => { setHover(false); } }>
      <Element { ...rest } hover={ hover } />
    </div>
  );
});

export default withHover;
