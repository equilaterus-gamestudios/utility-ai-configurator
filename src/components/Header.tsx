import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [collapsed, setCollapsed] = useState('collapse');
  const [style, setStyle] = useState('message-bot');
  const onCollapse = () => {
    setCollapsed(collapsed === '' ? 'collapse' : '')
  }
  const onHide = () => {

    setCollapsed('collapse');
  }
  const hideBot = () => {
    console.log('se esconde')
    setStyle(style === 'message-bot'? 'message-bot inactive' : 'message-bot' );
  }
  return (
    <>
    <div className="col left-col" style={{backgroundColor:'#4aa52e'}}>
      <div className="row left-menu">
        <div className="left-menu-item">
        <Link  onClick={onHide} className="nes-btn is-warning " to="/">Utility AI</Link>
        </div>
        <div className="left-menu-item">
      <Link onClick={onHide} className="nes-btn is-primary" to="/ConditionEvaluators">Condition Evaluators</Link>
      </div>
      <div className="left-menu-item">
      <Link onClick={onHide} className="nes-btn is-primary" to="/Decisions">Decisions</Link>
      </div>
      <div className="left-menu-item">
      <Link onClick={onHide} className="nes-btn is-primary" to="/DecisionSets">Decision Sets</Link>
      </div>
      </div>
      <Link onClick={hideBot} className={style}>
      <section className="message -left">
      <i className="nes-bcrikko"></i>
      <div className="nes-balloon from-left">
        <p>Welcome to Utility AI</p>
      </div>
    </section>
    </Link>
    </div>
    </>
    
  )
}

export default Header;
