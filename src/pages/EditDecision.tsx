import React from 'react';
import { useSelector } from 'react-redux';
import DecisionEditorContainer from '../containers/DecisionEditorContainer';
import { selectDecisionByTag } from '../selectors/DecisionSelector';


const EditDecision = ({ match }) => {
  const decision = useSelector(selectDecisionByTag(match.params.tag))

  return (
    <>
      <h1>Edit Decision</h1>
      <DecisionEditorContainer decision={decision} />    
    </>
  )
}

export default EditDecision;
