import React from 'react';
import { useSelector } from 'react-redux';
import DecisionSetEditorContainer from '../containers/DecisionSetEditorContainer';
import { selectDecisionSetByTag } from '../selectors/DecisionSetSelector';


const EditDecisionSet = ({ match }) => {
  const decisionSet = useSelector(selectDecisionSetByTag(match.params.tag))

  return (
    <>
      <h1>Edit Decision Set</h1>
      <DecisionSetEditorContainer decisionSet={decisionSet} />    
    </>
  )
}

export default EditDecisionSet;
