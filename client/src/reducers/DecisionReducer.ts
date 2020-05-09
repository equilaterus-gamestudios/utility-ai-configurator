import { DecisionModel } from '../common/models';
import { DecisionActionTypes, LOAD_DECISIONS_SUCCESS } from '../actions/types';

interface DecisionState {  
  Decisions: [DecisionModel]
}

const defaultState = {} as DecisionState

export const decisionReducer = (state = defaultState, action : DecisionActionTypes) : DecisionState  => {
  switch(action.type) {
    case LOAD_DECISIONS_SUCCESS:
      return {
        ...state, Decisions: action.payload
      }
    default: 
      return state;
  }
} 
