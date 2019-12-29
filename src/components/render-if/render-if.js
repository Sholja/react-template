import React from 'react';

const RenderIf = ({ show, children }) => {
  if (show) {
    return <>{children}</>;
  }

  return null;
};

export default RenderIf;
