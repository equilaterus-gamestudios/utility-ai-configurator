import { getTags, createByTagStructure } from '../common/utility';
import { Dictionary, DecisionModel } from '../common/models';
import { ProjectActionTypes, LOAD_PROJECT_SUCCESS, RESTORE_PROJECT, DecisionActionTypes, SAVE_DECISIONS_REQUEST, REMOVE_DECISION_REQUEST, ConditionEvaluatorActionTypes, REMOVE_CONDITION_EVALUATOR_REQUEST } from '../actions/types';
import omit from 'lodash/omit';
import mapValues from 'lodash/mapValues';

export interface DecisionState {  
  byTag: Dictionary<DecisionModel>,
  tags: Array<string>
}

const defaultState = {
  byTag: {},
  tags: []
} as DecisionState

export const decisionReducer = (state = defaultState, action : ProjectActionTypes | DecisionActionTypes | ConditionEvaluatorActionTypes) : DecisionState  => {
  switch(action.type) {
    case LOAD_PROJECT_SUCCESS:
      return {
        ...state, 
        byTag: createByTagStructure(action.payload.decisions),
        tags: getTags(action.payload.decisions)
      }
    case SAVE_DECISIONS_REQUEST:
      {
        const isNewDecision = !state.tags.find(tag => tag === action.payload.tag);
        const tags = [...state.tags];
        if (isNewDecision) {
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
    case REMOVE_DECISION_REQUEST:
      {
        const tags = state.tags.filter(tag => tag !== action.payload);
        const byTag = omit(state.byTag, action.payload);
        
        return {
          ...state, 
          byTag,
          tags
        } 
      }
    case REMOVE_CONDITION_EVALUATOR_REQUEST:
      { 
        const byTag = mapValues(state.byTag, (decision) => ({
          ...decision, conditionEvaluators: decision.conditionEvaluators.filter(ce => ce !== action.payload)
        }))
        
        return {
          ...state, 
          byTag
        } 
      }
    case RESTORE_PROJECT:
      return defaultState;
    default: 
      return state;
  }
} 

