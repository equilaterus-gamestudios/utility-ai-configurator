import { combineReducers } from 'redux';
import { conditionEvaluatorReducer } from './ConditionEvaluatorReducer';
import { decisionReducer } from './DecisionReducer';
import { archetypeReducer } from './ArchetypeReducer';
import { runtimeReducer } from './RuntimeReducer';
import { loadingReducer } from './LoadingReducer';

export default combineReducers({
  conditionEvaluators: conditionEvaluatorReducer,
  decisions: decisionReducer,
  archetypes: archetypeReducer,
  runtime: runtimeReducer,
  loadings: loadingReducer
});
