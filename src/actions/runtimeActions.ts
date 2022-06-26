import { RuntimeActionTypes, SET_PROJECT_PATH, LOAD_RUNTIME_SUCCESS, CLEANUP_SUCCESS } from './types';
import { ProjectModel, runtimeModel } from '../common/models';

import * as runtimeAPI from '../api/runtimeAPI';
import * as projectAPI from '../api/projectAPI';
import { TEMP_FILE, DEFAULT_PROJ } from '../common/Global';

const setProjectPath =  (newProjectPath: string) : RuntimeActionTypes => {
  return {
    type: SET_PROJECT_PATH,
    payload: newProjectPath
  }
}

export const changeProjectPath = (newProjectPath: string) => async (dispatch:any) => {
  dispatch(setProjectPath(newProjectPath));
}

const loadRuntimeSuccess = (runtime: runtimeModel) => ({
  type: LOAD_RUNTIME_SUCCESS,
  payload: runtime
})

export const loadRuntime = (callback: any) => async (dispatch: any) => {
  const runtime = await runtimeAPI.loadRuntime();
  dispatch(loadRuntimeSuccess(runtime));
  await callback(runtime);
}

export const saveRuntime = () => async (dispatch: any, getState: any) => {  
  await runtimeAPI.saveRuntime(getState().runtime);
}

const cleanupSuccess = () => ({
  type: CLEANUP_SUCCESS
})

export const cleanTemp = () => async (dispatch: any) => {
  await projectAPI.saveProject(TEMP_FILE, DEFAULT_PROJ as ProjectModel);
  dispatch(cleanupSuccess());

  // save the runtime
  dispatch(saveRuntime())
}