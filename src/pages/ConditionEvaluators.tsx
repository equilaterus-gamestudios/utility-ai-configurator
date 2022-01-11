import React from 'react';
import ConditionEvListContainer from '../containers/ConditionEvListContainer';
import withLayout from '../wrappers/withLayout';

const ConditionEvaluator = () => (
  <ConditionEvListContainer />
)

export default withLayout(ConditionEvaluator, 'Condition Evaluator');
