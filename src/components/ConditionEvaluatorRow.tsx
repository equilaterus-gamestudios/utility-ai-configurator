import React from 'react';
import { ConditionEvaluatorModel } from '../common/models';

interface PropTypes {
  conditionEvaluator : ConditionEvaluatorModel
}

const ConditionEvaluatorRow = ({ conditionEvaluator } : PropTypes) => (
  <tr>
    <td>{conditionEvaluator.tag}</td>
    <td>{conditionEvaluator.description}</td>
    <td>{conditionEvaluator.functionName}</td>
  </tr>
)

export default ConditionEvaluatorRow
