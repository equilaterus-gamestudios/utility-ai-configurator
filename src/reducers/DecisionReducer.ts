import { getTags, createByTagStructure } from '../common/utility';
import { Dictionary, DecisionModel } from '../common/models';
import { DecisionActionTypes, LOAD_DECISIONS_SUCCESS } from '../actions/types';

interface DecisionState {  
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
    default: 
      return state;
  }
} 

