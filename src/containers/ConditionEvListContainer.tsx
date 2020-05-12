import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectConditionEvaluatorTags, selectConditionEvaluatorByTag } from '../selectors/ConditionEvSelector';
import Table from '../components/Table';
import { ConditionEvaluatorModel } from '../common/models';

interface PropTypes {
  conditionEvaluatorTags: Array<string>
}

const ConditionEvListContainer = ({ conditionEvaluatorTags } : PropTypes) => {    
  if (!conditionEvaluatorTags || !conditionEvaluatorTags.length) {
    return (
      <>
        <div>There are not any condition evaluator</div>
        <Link to="/EditConditionEvaluator" className="btn btn-primary">Add new condition evaluator</Link>
      </>
    );
  }

  const renderActions = (conditionEvaluator :  ConditionEvaluatorModel) => (
    <>
      <Link to={`/EditConditionEvaluator/${conditionEvaluator.tag}`}  className="btn btn-secondary btn-sm mr-2">E</Link>
      <Link to="" className="btn btn-danger btn-sm">X</Link>
    </>
  )

  return (
    <>
      <Table tags={conditionEvaluatorTags} properties={['tag', 'description', 'functionName']} actions={renderActions} selector={selectConditionEvaluatorByTag} />
      <Link to="/EditConditionEvaluator" className="btn btn-primary">Add new condition evaluator</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  conditionEvaluatorTags: selectConditionEvaluatorTags(state)
})

export default connect(mapStateToProps, null)(ConditionEvListContainer)
