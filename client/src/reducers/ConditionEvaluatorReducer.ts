import { ConditionEvaluatorModel } from '../common/models';
import { ConditionEvaluatorActionTypes, LOAD_CONDITION_EVALUATORS_SUCCESS } from '../actions/types';

interface ConditionEvaluatorState {  
  conditionEvaluators: [ConditionEvaluatorModel]
}

const defaultState = {} as ConditionEvaluatorState

export const conditionEvaluatorReducer = (state = defaultState, action : ConditionEvaluatorActionTypes) : ConditionEvaluatorState  => {
  switch(action.type) {
    case LOAD_CONDITION_EVALUATORS_SUCCESS:
      return {
        ...state, conditionEvaluators: action.payload
      }
    default: 
      return state;
  }
} 
