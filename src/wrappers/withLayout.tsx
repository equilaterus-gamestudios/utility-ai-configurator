import React from 'react';

function withLayout(WrappedComponent, title:string) {
  return function(props) {
    return (
      <>
        <h2>{title}</h2>
        <WrappedComponent {...props} />
      </>
    );
  }
}

export default withLayout;
