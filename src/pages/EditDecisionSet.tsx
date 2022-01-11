import React from 'react';
import { useSelector } from 'react-redux';
import DecisionSetEditorContainer from '../containers/DecisionSetEditorContainer';
import { selectDecisionSetByTag } from '../selectors/DecisionSetSelector';
import withLayout from '../wrappers/withLayout';


const EditDecisionSet = ({ match }) => {
  const decisionSet = useSelector(selectDecisionSetByTag(match.params.tag))

  return (
    <DecisionSetEditorContainer decisionSet={decisionSet} />
  )
}

export default withLayout(EditDecisionSet, 'Decision Set');
