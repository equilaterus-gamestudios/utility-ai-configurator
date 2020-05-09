import { DecisionSetModel } from '../common/models';
import { DecisionSetActionTypes, LOAD_DECISION_SETS_SUCCESS } from '../actions/types';

interface DecisionSetState {  
  decisionSets: [DecisionSetModel]
}

const defaultState = {} as DecisionSetState

export const decisionSetReducer = (state = defaultState, action : DecisionSetActionTypes) : DecisionSetState  => {
  switch(action.type) {
    case LOAD_DECISION_SETS_SUCCESS:
      return {
        ...state, decisionSets: action.payload
      }
    default: 
      return state;
  }
} 
