import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectDecisionTags, selectDecisionByTag } from '../selectors/DecisionSelector';
import Table from '../components/Table';
import { DecisionModel } from '../common/models';

interface PropTypes {
  decisionTags: Array<string>
}

const DecisionListContainer = ({ decisionTags } : PropTypes) => {    
  if (!decisionTags || !decisionTags.length) {
    return (
      <>
        <div>There are not any decisions</div>
        <Link to="/EditDecision" className="btn btn-primary">Add new decision</Link>
      </>
    );
  }

  const renderActions = (decision :  DecisionModel) => (
    <>
      <Link to={`/EditDecision/${decision.tag}`}  className="btn btn-secondary btn-sm mr-2">E</Link>
      <Link to="" className="btn btn-danger btn-sm">X</Link>
    </>
  )

  return (
    <>
      <Table tags={decisionTags} properties={['tag', 'description', 'functionName']} actions={renderActions} selector={selectDecisionByTag} />
      <Link to="/EditDecision" className="btn btn-primary">Add new decision</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  decisionTags: selectDecisionTags(state)
})

export default connect(mapStateToProps, null)(DecisionListContainer)
