import { RuntimeActionTypes, SET_PROJECT_PATH } from './types';

const setProjectPath =  (newProjectPath: string) : RuntimeActionTypes => {
  return {
    type: SET_PROJECT_PATH,
    payload: newProjectPath
  }
}

export const changeProjectPath = (newProjectPath: string) => async (dispatch) => {
  dispatch(setProjectPath(newProjectPath));
}
