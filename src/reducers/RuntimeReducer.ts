import { runtimeModel } from '../common/models';
import { ProjectActionTypes, LOAD_PROJECT_REQUEST, LOAD_PROJECT_SUCCESS, SAVE_PROJECT_SUCCESS, RuntimeActionTypes, SET_PROJECT_PATH } from '../actions/types';

const defaultState = {
  projectPath: "",
  projectName: "",
  projectOpen: false,
  changesNotSaved: false
} as runtimeModel

export const runtimeReducer = (state = defaultState, action : ProjectActionTypes | RuntimeActionTypes) : runtimeModel  => {  
  switch(action.type) {
    case SET_PROJECT_PATH:
      return {
        ...state,
        projectPath: action.payload
      }
    case SAVE_PROJECT_SUCCESS:
      return {
        ...state,
        changesNotSaved: action.payload // was a temporal save?
      }
    case LOAD_PROJECT_REQUEST:
      return {
        ...state,
        projectPath: action.payload
      }
    case LOAD_PROJECT_SUCCESS:
      return {
        ...state,
        projectOpen: true,
        changesNotSaved: false
      }
    default: 
      return state;
  }
} 
