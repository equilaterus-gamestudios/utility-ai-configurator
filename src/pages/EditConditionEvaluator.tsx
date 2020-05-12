import React from 'react';
import { useSelector } from 'react-redux';
import ConditionEvEditorContainer from '../containers/ConditionEvEditorContainer';
import { selectConditionEvaluatorByTag } from '../selectors/ConditionEvSelector';


const EditConditionEvaluator = ({ match }) => {
  const conditionEvaluator = useSelector(selectConditionEvaluatorByTag(match.params.tag))

  return (
    <>
      <h1>Edit Condition Evaluator</h1>
      <ConditionEvEditorContainer conditionEvaluator={conditionEvaluator} />    
    </>
  )
}

export default EditConditionEvaluator;
