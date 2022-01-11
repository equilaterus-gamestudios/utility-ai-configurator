import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const SideMenu = () => { 

  const [collapsed, setCollapsed] = useState('collapse');
  const [style, setStyle] = useState('message-bot');
  const onCollapse = () => {
    setCollapsed(collapsed === '' ? 'collapse' : '')
  }

  const onHide = () => {
    setCollapsed('collapse');
  }

  return (
    <>
    <div className="col left-col" style={{backgroundColor:'#4aa52e'}}>
      <div className="row left-menu">
        <div className="left-menu-item">
          <Link className="nes-btn is-warning" to="/">Utility AI</Link>
        </div>
        <div className="left-menu-item">
          <Link className="nes-btn is-primary" to="/ConditionEvaluators">
            <img src={process.env.PUBLIC_URL + '/Conditions.png'} alt="Conditions" style={{height: '100%', width: 'auto'}} />
          </Link>
        </div>
        <div className="left-menu-item">
          <Link className="nes-btn is-primary" to="/Decisions">
            <img src={process.env.PUBLIC_URL + '/Decisions.png'} alt="Decisions" style={{height: '100%', width: 'auto'}} />
          </Link>
        </div>
        <div className="left-menu-item">
          <Link className="nes-btn is-primary" to="/DecisionSets">
            <img src={process.env.PUBLIC_URL + '/Archetypes.png'} alt="Archetypes" style={{height: '100%', width: 'auto'}} />
          </Link>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default SideMenu;
