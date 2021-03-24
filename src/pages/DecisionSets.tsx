import React from 'react';
import DecisionSetListContainer from '../containers/DecisionSetListContainer';
import withLayout from '../wrappers/withLayout';

const DecisionSets = () => (
  <DecisionSetListContainer />
)

export default withLayout(DecisionSets, 'Decision Sets');
