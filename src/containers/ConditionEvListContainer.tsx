import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ConditionEvaluatorModel } from '../common/models'
import { selectConditionEvaluatorTags, selectConditionEvaluatorByTag } from '../selectors/ConditionEvSelector';
import ConditionEvaluatorRow from '../components/ConditionEvaluatorRow';
import Table from '../components/Table';

interface PropTypes {
  conditionEvaluatorTags: [string]
}

const ConditionEvListContainer = ({ conditionEvaluatorTags } : PropTypes) => {    
  if (!conditionEvaluatorTags || !conditionEvaluatorTags.length) {
    return (
      <>
        <div>There are not any condition evaluator</div>
        <Link to="/" className="btn btn-primary">Add new condition evaluator</Link>
      </>
    );
  }

  return (
    <Table tags={conditionEvaluatorTags} properties={['tag', 'description', 'functionName']} actions={null} selector={selectConditionEvaluatorByTag} />
  );
}

const mapStateToProps = (state) => ({
  conditionEvaluatorTags: selectConditionEvaluatorTags(state)
})

export default connect(mapStateToProps, null)(ConditionEvListContainer)
