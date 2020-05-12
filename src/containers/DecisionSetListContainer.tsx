import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectDecisionSetTags, selectDecisionSetByTag } from '../selectors/DecisionSetSelector';
import Table from '../components/Table';
import { DecisionSetModel } from '../common/models';

interface PropTypes {
  decisionSetTags: Array<string>
}

const DecisionSetListContainer = ({ decisionSetTags } : PropTypes) => {    
  if (!decisionSetTags || !decisionSetTags.length) {
    return (
      <>
        <div>There are not any decision set</div>
        <Link to="/EditDecisionSet" className="btn btn-primary">Add new decision set</Link>
      </>
    );
  }

  const renderActions = (decisionSet :  DecisionSetModel) => (
    <>
      <Link to={`/EditConditionEvaluator/${decisionSet.tag}`}  className="btn btn-secondary btn-sm mr-2">E</Link>
      <Link to="" className="btn btn-danger btn-sm">X</Link>
    </>
  )

  return (
    <>
      <Table tags={decisionSetTags} properties={['tag', 'description', 'functionName']} actions={renderActions} selector={selectDecisionSetByTag} />
      <Link to="/EditDecisionSet" className="btn btn-primary">Add new decision set</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  decisionSetTags: selectDecisionSetTags(state)
})

export default connect(mapStateToProps, null)(DecisionSetListContainer)
