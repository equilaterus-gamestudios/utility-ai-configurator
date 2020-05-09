import { ConditionEvaluatorModel } from '../common/models';
import { ConditionEvaluatorActionTypes, LOAD_CONDITION_EVALUATORS_SUCCESS } from '../actions/types';

interface ConditionEvaluatorState {  
  data: [ConditionEvaluatorModel]
}

const defaultState = {} as ConditionEvaluatorState

export const conditionEvaluatorReducer = (state = defaultState, action : ConditionEvaluatorActionTypes) : ConditionEvaluatorState  => {
  switch(action.type) {
    case LOAD_CONDITION_EVALUATORS_SUCCESS:
      return {
        ...state, data: action.payload
      }
    default: 
      return state;
  }
} 
