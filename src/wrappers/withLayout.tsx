import React from 'react';
import Menu from '../components/Menu';
import { useActions } from '../hooks/useActions';

function withLayout(WrappedComponent: any, title:string) {
  return function(props: any) {
    const { runtime } = useActions();
    return (
      <div className="app">
      <div className="app-contents">
        <Menu />
        <div className="main-col">
          <div className="pt-5 d-block d-sm-none">&nbsp;</div> 
          <div className="container main-container">
            <div className="nes-container with-title">
              <p className="title">{title}</p>
              <WrappedComponent {...props} />
            </div>
          </div>
          <span className="file-path">{runtime.projectPath ?? ''} {runtime.changesNotSaved ? '[*]' : ''}</span>
        </div>   
      </div>   
    </div>
    );
  }
}

export default withLayout;
