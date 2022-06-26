import history from '../history';
import { ArchetypeActionTypes, SAVE_ARCHETYPES_REQUEST, REMOVE_ARCHETYPE_REQUEST } from './types';
import { ArchetypeModel } from '../common/models';
import { saveProject } from './projectActions';


const saveArchetype =  (archetype : ArchetypeModel) : ArchetypeActionTypes => {
  return {
    type: SAVE_ARCHETYPES_REQUEST,
    payload: archetype
  }
}

export const saveArchetypeAndRedirect = (archetype: ArchetypeModel) => async (dispatch: any) => {
  dispatch(saveArchetype(archetype));
  dispatch(saveProject(true));

  history.push('/Archetypes');
}

const removeArchetypeRequest =  (tag : string) : ArchetypeActionTypes => {
  return {
    type: REMOVE_ARCHETYPE_REQUEST,
    payload: tag
  }
}

export const removeArchetype = (tag: string) => async (dispatch: any) => {
  dispatch(removeArchetypeRequest(tag));
  dispatch(saveProject(true));
}

