import React from 'react';

// Centers the element in an element with a 1:1 aspect ratio
const lockAspect = (Element) => (
  ({ ...rest }) => (
    <div style={{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
    }} >
      <div style={{
        height: 0,
        paddingTop: '100%',
      }}></div>
      <Element { ...rest }/>
    </div>
  )
);

export default lockAspect;
