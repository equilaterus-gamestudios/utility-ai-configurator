import React from 'react';
import { useSelector } from 'react-redux';
import DecisionEditorContainer from '../containers/DecisionEditorContainer';
import { selectDecisionByTag } from '../selectors/DecisionSelector';
import withLayout from '../wrappers/withLayout';


const EditDecision = ({ match }) => {
  const decision = useSelector(selectDecisionByTag(match.params.tag))

  return (
    <DecisionEditorContainer decision={decision} />
  )
}

export default withLayout(EditDecision, 'Decision');
