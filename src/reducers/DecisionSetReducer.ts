import { getTags, createByTagStructure } from '../common/utility';
import { Dictionary, DecisionSetModel } from '../common/models';
import { DecisionSetActionTypes, LOAD_DECISION_SETS_SUCCESS, SAVE_DECISION_SETS_REQUEST, REMOVE_DECISION_SET_REQUEST, REMOVE_DECISION_REQUEST } from '../actions/types';
import omit from 'lodash/omit';
import mapValues from 'lodash/mapValues';

export interface DecisionSetState {  
  byTag: Dictionary<DecisionSetModel>,
  tags: Array<string>
}

const defaultState = {} as DecisionSetState

export const decisionSetReducer = (state = defaultState, action : DecisionSetActionTypes) : DecisionSetState  => {
  switch(action.type) {
    case LOAD_DECISION_SETS_SUCCESS:
      return {
        ...state,
        byTag: createByTagStructure(action.payload),
        tags: getTags(action.payload)
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
    default: 
      return state;
  }
} 
