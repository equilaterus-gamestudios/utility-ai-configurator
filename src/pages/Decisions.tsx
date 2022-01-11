import React from 'react';
import DecisionListContainer from '../containers/DecisionListContainer';
import withLayout from '../wrappers/withLayout';

const Decisions = () => (
  <DecisionListContainer />
)

export default withLayout(Decisions, 'Decisions');
