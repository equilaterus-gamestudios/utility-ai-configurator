import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const SideMenu = () => {   
  return (
    <>
    <div className="col left-col">
      <div className="left-menu">
        <div className="left-menu-item">
          <Link to="/ConditionEvaluators">
            <button className='btn'>
              <img src={process.env.PUBLIC_URL + '/Conditions.png'} alt="Conditions" />
            </button>
          </Link>
        </div>
        <div className="left-menu-item">
          <Link to="/Decisions">
          <button className='btn'>
            <img src={process.env.PUBLIC_URL + '/Decisions.png'} alt="Decisions" />
            </button>
          </Link>
        </div>
        <div className="left-menu-item">
          <Link to="/DecisionSets">
            <button className='btn'>
            <img src={process.env.PUBLIC_URL + '/Archetypes.png'} alt="Archetypes" />
            </button>            
          </Link>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default SideMenu;
