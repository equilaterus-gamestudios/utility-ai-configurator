import { getTags, createByTagStructure } from '../common/utility';
import { Dictionary, DecisionSetModel } from '../common/models';
import { DecisionSetActionTypes, LOAD_DECISION_SETS_SUCCESS, SAVE_DECISION_SETS_REQUEST } from '../actions/types';

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
    default: 
      return state;
  }
} 
