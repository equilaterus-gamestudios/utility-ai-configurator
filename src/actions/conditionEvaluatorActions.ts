import history from '../history';
import { SAVE_CONDITION_EVALUATOR_REQUEST, REMOVE_CONDITION_EVALUATOR_REQUEST, ConditionEvaluatorActionTypes } from './types';

import { ConditionEvaluatorModel } from '../common/models';
import { saveProject } from './projectActions';


const saveConditionEvaluator =  (conditionEvaluator : ConditionEvaluatorModel) : ConditionEvaluatorActionTypes => {
  return {
    type: SAVE_CONDITION_EVALUATOR_REQUEST,
    payload: conditionEvaluator
  }
}

export const saveConditionEvaluatorAndRedirect = (conditionEvaluator) => async (dispatch, getState) => {
  dispatch(saveConditionEvaluator(conditionEvaluator));
  dispatch(saveProject(true));
  history.push('/ConditionEvaluators');
}

const removeConditionEvaluatorRequest =  (tag : string) : ConditionEvaluatorActionTypes => {
  return {
    type: REMOVE_CONDITION_EVALUATOR_REQUEST,
    payload: tag
  }
}

export const removeConditionEvaluator = (tag) => async (dispatch) => {
  dispatch(removeConditionEvaluatorRequest(tag));
  dispatch(saveProject(true));
}

