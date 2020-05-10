import { getTags, createByTagStructure } from '../common/utility';
import { Dictionary, DecisionSetModel } from '../common/models';
import { DecisionSetActionTypes, LOAD_DECISION_SETS_SUCCESS } from '../actions/types';

interface DecisionSetState {  
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
    default: 
      return state;
  }
} 
