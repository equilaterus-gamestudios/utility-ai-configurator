import concat from 'lodash/concat';
import without from 'lodash/without';
import take from 'lodash/take';
import { runtimeModel } from '../common/models';
import { ProjectActionTypes, LOAD_PROJECT_REQUEST, LOAD_PROJECT_SUCCESS, SAVE_PROJECT_SUCCESS, RuntimeActionTypes, SET_PROJECT_PATH, LOAD_RUNTIME_SUCCESS, CLEANUP_SUCCESS } from '../actions/types';
import { TEMP_FILE } from '../common/Global';



const defaultState = {
  projectPath: "",
  changesNotSaved: false,
  latestOpenedProjects: []
} as runtimeModel

const getLastestOpenedProjects = (latestOpenedProjects: string[], newprojectPath: string): string[] => (
  take(concat(newprojectPath, without(latestOpenedProjects, newprojectPath)), 10)
)

export const runtimeReducer = (state = defaultState, action : ProjectActionTypes | RuntimeActionTypes) : runtimeModel  => {  
  switch(action.type) {
    case LOAD_RUNTIME_SUCCESS:
      return action.payload;
    case SET_PROJECT_PATH:
      return {
        ...state,
        projectPath: action.payload
      }
    case SAVE_PROJECT_SUCCESS:
      return {
        ...state,
        changesNotSaved: action.payload, // was a temporal save?
        latestOpenedProjects: state.projectPath !== TEMP_FILE 
          ? getLastestOpenedProjects(state.latestOpenedProjects, state.projectPath)
          : state.latestOpenedProjects
      }
    case LOAD_PROJECT_REQUEST:
      return {
        ...state,
        projectPath: action.payload
      }
    case LOAD_PROJECT_SUCCESS:      
      return {
        ...state,
        changesNotSaved: false,
        latestOpenedProjects: state.projectPath !== TEMP_FILE 
          ? getLastestOpenedProjects(state.latestOpenedProjects, state.projectPath)
          : state.latestOpenedProjects
      }
    case CLEANUP_SUCCESS:
      return {
        ...state,
        changesNotSaved: false
      }
    default: 
      return state;
  }
} 
