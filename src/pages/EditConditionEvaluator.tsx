import React from 'react';
import { useSelector } from 'react-redux';
import ConditionEvEditorContainer from '../containers/ConditionEvEditorContainer';
import { selectConditionEvaluatorByTag } from '../selectors/ConditionEvSelector';
import withLayout from '../wrappers/withLayout';


const EditConditionEvaluator = ({ match }) => {
  const conditionEvaluator = useSelector(selectConditionEvaluatorByTag(match.params.tag))

  return (
    <>
      <ConditionEvEditorContainer conditionEvaluator={conditionEvaluator} />    
    </>
  )
}

export default withLayout(EditConditionEvaluator, 'Condition Evaluator');
