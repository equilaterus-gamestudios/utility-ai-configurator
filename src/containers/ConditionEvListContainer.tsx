import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectConditionEvaluatorTags, selectConditionEvaluatorByTag } from '../selectors/ConditionEvSelector';
import Table from '../components/Table';
import { ConditionEvaluatorModel } from '../common/models';
import { removeConditionEvaluator } from '../actions/conditionEvaluatorActions';
import sortBy from "lodash/orderBy";

const sortTags = (tags : Array<string>) => {
  return sortBy(tags, [(tag) => { return  tag.split('').reduce((acc, val, index) => acc + val.charCodeAt(0) * Math.pow(10, index), 0)}])
}

interface PropTypes {
  conditionEvaluatorTags: Array<string>,
  removeConditionEvaluator: (tag: string) => void
}

const ConditionEvListContainer = ({ conditionEvaluatorTags, removeConditionEvaluator } : PropTypes) => {    
  if (!conditionEvaluatorTags || !conditionEvaluatorTags.length) {
    return (
      <>
        <div>There are not any condition evaluator</div>
        <Link to="/EditConditionEvaluator" className="nes-btn is-primary main-btn">Add new condition evaluator</Link>
      </>
    );
  }

  const renderActions = (conditionEvaluator :  ConditionEvaluatorModel) => (
    <>
      <Link to={`/EditConditionEvaluator/${conditionEvaluator.tag}`}  className="nes-btn is-success">E</Link>
      <button className="nes-btn is-error" onClick={() => removeConditionEvaluator(conditionEvaluator.tag)}>X</button>
    </>
  )

  return (
    <>
      <Table tags={sortTags(conditionEvaluatorTags)} properties={['tag', 'description', 'functionName']} actions={renderActions} selector={selectConditionEvaluatorByTag} />
      <Link to="/EditConditionEvaluator" className="nes-btn is-primary main-btn">Add new condition evaluator</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  conditionEvaluatorTags: selectConditionEvaluatorTags(state)
})

export default connect(mapStateToProps, { removeConditionEvaluator })(ConditionEvListContainer)
