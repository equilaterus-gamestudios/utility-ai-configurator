import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectConditionEvaluatorTags, selectConditionEvaluatorByTag } from '../selectors/ConditionEvSelector';
import Table from '../components/Table';
import { ConditionEvaluatorModel } from '../common/models';
import { removeConditionEvaluator } from '../actions/conditionEvaluatorActions';

interface PropTypes {
  conditionEvaluatorTags: Array<string>,
  removeConditionEvaluator: (tag: string) => void
}

const ConditionEvListContainer = ({ conditionEvaluatorTags, removeConditionEvaluator } : PropTypes) => {    
  if (!conditionEvaluatorTags || !conditionEvaluatorTags.length) {
    return (
      <>
        <div>There are not any condition evaluator</div>
        <Link to="/EditConditionEvaluator" className="nes-btn is-primary">Add new condition evaluator</Link>
      </>
    );
  }

  const renderActions = (conditionEvaluator :  ConditionEvaluatorModel) => (
    <>
      <Link to={`/EditConditionEvaluator/${conditionEvaluator.tag}`}  className="nes-btn">E</Link>
      <button className="nes-btn is-error" onClick={() => removeConditionEvaluator(conditionEvaluator.tag)}>X</button>
    </>
  )

  return (
    <>
      <Table tags={conditionEvaluatorTags} properties={['tag', 'description', 'functionName']} actions={renderActions} selector={selectConditionEvaluatorByTag} />
      <Link to="/EditConditionEvaluator" className="nes-btn is-primary">Add new condition evaluator</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  conditionEvaluatorTags: selectConditionEvaluatorTags(state)
})

export default connect(mapStateToProps, { removeConditionEvaluator })(ConditionEvListContainer)
