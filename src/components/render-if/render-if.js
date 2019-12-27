import React from 'react';

const RenderIf = ({ show, children }) => {
  if (show) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return null;
};

export default RenderIf;
