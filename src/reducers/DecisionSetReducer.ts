import { getTags, createByTagStructure } from '../common/utility';
import { Dictionary, DecisionSetModel } from '../common/models';
import { ProjectActionTypes, LOAD_PROJECT_SUCCESS, RESTORE_PROJECT, DecisionSetActionTypes, SAVE_DECISION_SETS_REQUEST, REMOVE_DECISION_SET_REQUEST, DecisionActionTypes, REMOVE_DECISION_REQUEST } from '../actions/types';
import omit from 'lodash/omit';
import mapValues from 'lodash/mapValues';

export interface DecisionSetState {  
  byTag: Dictionary<DecisionSetModel>,
  tags: Array<string>
}

const defaultState = {
  byTag: {},
  tags: []
} as DecisionSetState

export const decisionSetReducer = (state = defaultState, action : ProjectActionTypes | DecisionSetActionTypes | DecisionActionTypes) : DecisionSetState  => {
  switch(action.type) {
    case LOAD_PROJECT_SUCCESS:
      return {
        ...state,
        byTag: createByTagStructure(action.payload.decisionSets),
        tags: getTags(action.payload.decisionSets)
      }
    case SAVE_DECISION_SETS_REQUEST:
      {
        const isNewDecisionSet = !state.tags.find(tag => tag === action.payload.tag);
        const tags = [...state.tags];
        if (isNewDecisionSet) {
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
    case REMOVE_DECISION_SET_REQUEST:
      {
        const tags = state.tags.filter(tag => tag !== action.payload);
        const byTag = omit(state.byTag, action.payload);
        
        return {
          ...state, 
          byTag,
          tags
        } 
      }
    case REMOVE_DECISION_REQUEST:
      {
        const byTag = mapValues(state.byTag, (decisionSet) => ({
          ...decisionSet, decisions: decisionSet.decisions.filter(ds => ds !== action.payload)
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
