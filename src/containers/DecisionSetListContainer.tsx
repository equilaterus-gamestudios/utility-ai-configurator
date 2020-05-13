import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectDecisionSetTags, selectDecisionSetByTag } from '../selectors/DecisionSetSelector';
import Table from '../components/Table';
import { DecisionSetModel } from '../common/models';
import { removeDecisionSet } from '../actions/decisionSetActions';

interface PropTypes {
  decisionSetTags: Array<string>,
  removeDecisionSet: (tag: string) => void
}

const DecisionSetListContainer = ({ decisionSetTags, removeDecisionSet } : PropTypes) => {    
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
      <Link to={`/EditDecisionSet/${decisionSet.tag}`}  className="btn btn-secondary btn-sm mr-2">E</Link>
      <button className="btn btn-danger btn-sm" onClick={() => removeDecisionSet(decisionSet.tag)}>X</button>
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

export default connect(mapStateToProps, { removeDecisionSet })(DecisionSetListContainer)
