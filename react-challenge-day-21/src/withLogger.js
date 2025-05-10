import React from 'react';

const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Props passed to component:', props);
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;