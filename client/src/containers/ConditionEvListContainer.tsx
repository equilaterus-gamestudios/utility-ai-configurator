import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ConditionEvaluatorModel } from '../common/models'
import { selectConditionEvaluators } from '../selectors/ConditionEvSelector';
import ConditionEvaluatorRow from '../components/ConditionEvaluatorRow';

interface PropTypes {
  conditionEvaluators: [ConditionEvaluatorModel]
}

const ConditionEvListContainer = ({ conditionEvaluators } : PropTypes) => {    
  if (!conditionEvaluators || !conditionEvaluators.length) {
    return (
      <>
        <div>There are not any condition evaluator</div>
        <Link to="/" className="btn btn-primary">Add new condition evaluator</Link>
      </>
    );
  }

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {
          conditionEvaluators.map(ce => (
            <ConditionEvaluatorRow conditionEvaluator={ce} />
          ))
        }
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  conditionEvaluators: selectConditionEvaluators(state)
})

export default connect(mapStateToProps, null)(ConditionEvListContainer)
