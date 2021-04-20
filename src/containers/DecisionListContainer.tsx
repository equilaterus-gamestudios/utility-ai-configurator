import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectDecisionTags, selectDecisionByTag } from '../selectors/DecisionSelector';
import Table from '../components/Table';
import { DecisionModel } from '../common/models';
import { removeDecision } from '../actions/decisionActions';
import { sortTags } from "../common/utility";

interface PropTypes {
  decisionTags: Array<string>,
  removeDecision: (tag: string) => void
}

const DecisionListContainer = ({ decisionTags, removeDecision } : PropTypes) => {    
  if (!decisionTags || !decisionTags.length) {
    return (
      <>
        <div>There are not any decisions</div>
        <Link to="/EditDecision" className="nes-btn is-primary main-btn">Add new decision</Link>
      </>
    );
  }

  const renderActions = (decision :  DecisionModel) => (
    <>
      <Link to={`/EditDecision/${decision.tag}`}  className="nes-btn is-success">E</Link>
      <button className="nes-btn is-error" onClick={() => removeDecision(decision.tag)}>X</button>
    </>
  )

  return (
    <>
      <Table tags={sortTags(decisionTags)} properties={['tag', 'description', 'functionName']} actions={renderActions} selector={selectDecisionByTag} />
      <Link to="/EditDecision" className="nes-btn is-primary main-btn">Add new decision</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  decisionTags: selectDecisionTags(state)
})

export default connect(mapStateToProps, { removeDecision })(DecisionListContainer)
