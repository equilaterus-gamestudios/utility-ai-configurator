import history from '../history';
import { LOAD_CONDITION_EVALUATORS_SUCCESS, LOAD_CONDITION_EVALUATORS_REQUEST, SAVE_CONDITION_EVALUATOR_REQUEST, ConditionEvaluatorActionTypes } from './types';
import  *  as conditionEvaluatorAPI  from '../api/conditionEvaluatorAPI';

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


export const saveConditionEvaluatorAndRedirect = (conditionEvaluator) => async (dispatch) => {
  dispatch(saveConditionEvaluator(conditionEvaluator));
  history.push('/ConditionEvaluators');
}
