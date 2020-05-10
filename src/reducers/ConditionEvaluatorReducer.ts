import { getTags, createByTagStructure } from '../common/utility';
import { Dictionary, ConditionEvaluatorModel } from '../common/models';
import { ConditionEvaluatorActionTypes, LOAD_CONDITION_EVALUATORS_SUCCESS } from '../actions/types';

export interface ConditionEvaluatorState {  
  byTag: Dictionary<ConditionEvaluatorModel>,
  tags: Array<string>
}

const defaultState = {} as ConditionEvaluatorState

export const conditionEvaluatorReducer = (state = defaultState, action : ConditionEvaluatorActionTypes) : ConditionEvaluatorState  => {  
  switch(action.type) {
    case LOAD_CONDITION_EVALUATORS_SUCCESS:
      return {
        ...state, 
        byTag: createByTagStructure(action.payload),
        tags: getTags(action.payload)
      }
    default: 
      return state;
  }
} 
