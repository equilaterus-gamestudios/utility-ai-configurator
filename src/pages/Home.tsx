import React from 'react';
import { exportConfiguration } from '../actions/exportConfigurationActions';
import { loadConditionEvaluators } from '../actions/conditionEvaluatorActions';
import { loadDecisions } from '../actions/decisionActions';
import { loadDecisionSets } from '../actions/decisionSetActions';
import withLayout from '../wrappers/withLayout';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const handleExport = (e) => {
    e.preventDefault();
    dispatch(exportConfiguration());
  }

  const handleLoad = (e) => {
    e.preventDefault();
    dispatch(loadConditionEvaluators());
    dispatch(loadDecisions());
    dispatch(loadDecisionSets());
  }
  
  return  (
    <>
      <button className="nes-btn is-primary" onClick={handleExport}>Export</button>
      <button className="nes-btn is-primary" onClick={handleLoad}>Load</button>
    </>
  );
  
}
export default withLayout(Home, 'Home');
