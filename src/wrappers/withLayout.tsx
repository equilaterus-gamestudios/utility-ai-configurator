import React from 'react';

function withLayout(WrappedComponent, title:string) {
  return function(props) {
    return (
      <>
        <div className="container title-container">
          <h3 className="header">{title}</h3>
        </div>
        <div className="container main-container">
          <WrappedComponent {...props} />
        </div>
      </>
    );
  }
}

export default withLayout;
