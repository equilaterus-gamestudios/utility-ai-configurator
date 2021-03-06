import { combineReducers } from 'redux';
import { conditionEvaluatorReducer } from './ConditionEvaluatorReducer';
import { decisionReducer } from './DecisionReducer';
import { decisionSetReducer } from './DecisionSetReducer';
import { loadingReducer } from './LoadingReducer';

export default combineReducers({
  conditionEvaluators: conditionEvaluatorReducer,
  decisions: decisionReducer,
  decisionSets: decisionSetReducer,
  loadings: loadingReducer
});
