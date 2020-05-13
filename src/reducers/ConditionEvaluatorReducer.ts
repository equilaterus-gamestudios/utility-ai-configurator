import { getTags, createByTagStructure } from '../common/utility';
import { Dictionary, ConditionEvaluatorModel } from '../common/models';
import { ConditionEvaluatorActionTypes, LOAD_CONDITION_EVALUATORS_SUCCESS, SAVE_CONDITION_EVALUATOR_REQUEST, REMOVE_CONDITION_EVALUATOR_REQUEST } from '../actions/types';
import omit from 'lodash/omit';

export interface ConditionEvaluatorState {  
  byTag: Dictionary<ConditionEvaluatorModel>,
  tags: Array<string>
}

const defaultState = {
  byTag: {},
  tags: []
} as ConditionEvaluatorState

export const conditionEvaluatorReducer = (state = defaultState, action : ConditionEvaluatorActionTypes) : ConditionEvaluatorState  => {  
  switch(action.type) {
    case LOAD_CONDITION_EVALUATORS_SUCCESS:
      return {
        ...state, 
        byTag: createByTagStructure(action.payload),
        tags: getTags(action.payload)
      }
    case SAVE_CONDITION_EVALUATOR_REQUEST:
      {
        const isNewConditionEvaluator = !state.tags.find(tag => tag === action.payload.tag);
        const tags = [...state.tags];
        if (isNewConditionEvaluator) {
          tags.push(action.payload.tag);
        }
        
        return {
          ...state, 
          byTag: {
            ...state.byTag,
            [action.payload.tag]: action.payload
          },
          tags: tags
        } 
      }
    case REMOVE_CONDITION_EVALUATOR_REQUEST:
      {
        const tags = state.tags.filter(tag => tag !== action.payload);
        const byTag = omit(state.byTag, action.payload);
        
        return {
          ...state, 
          byTag,
          tags
        } 
      }
    default: 
      return state;
  }
} 
