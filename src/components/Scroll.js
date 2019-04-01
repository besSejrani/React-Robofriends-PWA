import React from 'react';

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid transparent',
        height: '700px'
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
