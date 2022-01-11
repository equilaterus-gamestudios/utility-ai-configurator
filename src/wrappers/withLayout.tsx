import React from 'react';

function withLayout(WrappedComponent, title:string) {
  return function(props) {
    return (
      <div className="container main-container">
        <div className="nes-container with-title">
          <p className="title">{title}</p>
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  }
}

export default withLayout;
