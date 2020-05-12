import { getTags, createByTagStructure } from '../common/utility';
import { Dictionary, DecisionModel } from '../common/models';
import { DecisionActionTypes, LOAD_DECISIONS_SUCCESS, SAVE_DECISIONS_REQUEST } from '../actions/types';

export interface DecisionState {  
  byTag: Dictionary<DecisionModel>,
  tags: Array<string>
}

const defaultState = {} as DecisionState

export const decisionReducer = (state = defaultState, action : DecisionActionTypes) : DecisionState  => {
  switch(action.type) {
    case LOAD_DECISIONS_SUCCESS:
      return {
        ...state, 
        byTag: createByTagStructure(action.payload),
        tags: getTags(action.payload)
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
    default: 
      return state;
  }
} 

