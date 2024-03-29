import history from '../history';
import { getValuesFromByTag } from '../common/utility';
import { ProjectActionTypes, LOAD_PROJECT_REQUEST, LOAD_PROJECT_SUCCESS, EXPORT_PROJECT_REQUEST, EXPORT_PROJECT_SUCCESS, SAVE_PROJECT_REQUEST, SAVE_PROJECT_SUCCESS, RESTORE_PROJECT } from './types';
import * as projectAPI from '../api/projectAPI';

import { ProjectModel } from '../common/models';
import { TEMP_FILE } from '../common/Global';
import { saveRuntime } from './runtimeActions';

const loadProjectRequest = (filePath: string) : ProjectActionTypes => {
  return {
    type: LOAD_PROJECT_REQUEST,
    payload: filePath
  }
}

const loadProjectSuccess = (project : ProjectModel) : ProjectActionTypes => {
  return {
    type: LOAD_PROJECT_SUCCESS,
    payload: project
  }
}

export const loadProject = (filePath: string) => async (dispatch) => {
  dispatch(loadProjectRequest(filePath));
  const project = await projectAPI.loadProject(filePath);
  dispatch(loadProjectSuccess(project));

  // save the runtime
  dispatch(saveRuntime());
  history.push('/ConditionEvaluators');
}

const saveProjectRequest = () => ({
  type: SAVE_PROJECT_REQUEST
})

const saveProjectSuccess = (isTemporalSave : boolean) : ProjectActionTypes => ({
  type: SAVE_PROJECT_SUCCESS,
  payload: isTemporalSave
})

export const saveProject = (isTemporalSave : boolean) => async (dispatch, getState) => {
    dispatch(saveProjectRequest);
    const fileName = isTemporalSave ? TEMP_FILE : getState().runtime.projectPath;
    const conditionEvaluators = getValuesFromByTag(getState().conditionEvaluators.byTag);
    const decisions = getValuesFromByTag(getState().decisions.byTag);
    const archetypes = getValuesFromByTag(getState().archetypes.byTag);
    const project = { conditionEvaluators, decisions, archetypes };
    await projectAPI.saveProject(fileName, project);
    dispatch(saveProjectSuccess(isTemporalSave));
    
    // save the runtime
    dispatch(saveRuntime())
}

const exportProjectRequest = () : ProjectActionTypes => ({
    type: EXPORT_PROJECT_REQUEST
})
  
const exportProjectSuccess = () : ProjectActionTypes => ({
    type: EXPORT_PROJECT_SUCCESS
})

export const exportProject = (filePath : string) => async (dispatch, getState) => {
  dispatch(exportProjectRequest());
  const conditionEvaluators = getValuesFromByTag(getState().conditionEvaluators.byTag);
  const decisions = getValuesFromByTag(getState().decisions.byTag);
  const archetypes = getValuesFromByTag(getState().archetypes.byTag);
  const project = { conditionEvaluators, decisions, archetypes };
  await projectAPI.exportProject(filePath, project);
  dispatch(exportProjectSuccess());
}
  
export const restoreProject = () : ProjectActionTypes => ({
    type: RESTORE_PROJECT
})
