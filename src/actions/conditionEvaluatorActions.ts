import history from '../history';
import { getValuesFromByTag } from '../common/utility';
import { LOAD_CONDITION_EVALUATORS_SUCCESS, LOAD_CONDITION_EVALUATORS_REQUEST, SAVE_CONDITION_EVALUATOR_REQUEST, REMOVE_CONDITION_EVALUATOR_REQUEST, ConditionEvaluatorActionTypes } from './types';
import  *  as conditionEvaluatorAPI  from '../api/conditionEvaluatorAPI';
import  *  as decisionAPI  from '../api/decisionAPI';

import { ConditionEvaluatorModel } from '../common/models';

const loadConditionEvaluatorsRequest = () : ConditionEvaluatorActionTypes => {
  return {
    type: LOAD_CONDITION_EVALUATORS_REQUEST
  }
}

const loadConditionEvaluatorsSuccess = (conditionEvaluators : Array<ConditionEvaluatorModel>) : ConditionEvaluatorActionTypes => {
  return {
    type: LOAD_CONDITION_EVALUATORS_SUCCESS,
    payload: conditionEvaluators
  }
}

export const loadConditionEvaluators = () => async (dispatch) => {
  dispatch(loadConditionEvaluatorsRequest());
  const conditionEvaluators = await conditionEvaluatorAPI.loadConditionEvaluators();
  dispatch(loadConditionEvaluatorsSuccess(conditionEvaluators));
}


const saveConditionEvaluator =  (conditionEvaluator : ConditionEvaluatorModel) : ConditionEvaluatorActionTypes => {
  return {
    type: SAVE_CONDITION_EVALUATOR_REQUEST,
    payload: conditionEvaluator
  }
}


export const saveConditionEvaluatorAndRedirect = (conditionEvaluator) => async (dispatch, getState) => {
  dispatch(saveConditionEvaluator(conditionEvaluator));
  const conditionEvaluators = getValuesFromByTag(getState().conditionEvaluators.byTag);
  await conditionEvaluatorAPI.saveConditionEvaluators(conditionEvaluators);
  history.push('/ConditionEvaluators');
}

const removeConditionEvaluatorRequest =  (tag : string) : ConditionEvaluatorActionTypes => {
  return {
    type: REMOVE_CONDITION_EVALUATOR_REQUEST,
    payload: tag
  }
}

export const removeConditionEvaluator = (tag) => async (dispatch, getState) => {
  dispatch(removeConditionEvaluatorRequest(tag));
  const conditionEvaluators = getValuesFromByTag(getState().conditionEvaluators.byTag);
  const decisions = getValuesFromByTag(getState().decisions.byTag);
  await conditionEvaluatorAPI.saveConditionEvaluators(conditionEvaluators);  
  await decisionAPI.saveDecisions(decisions);  
}

