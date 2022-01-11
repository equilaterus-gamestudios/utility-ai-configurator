import { DecisionSetActionTypes, SAVE_DECISION_SETS_REQUEST, REMOVE_DECISION_SET_REQUEST } from './types';
import { DecisionSetModel } from '../common/models';
import { saveProject } from './projectActions';


const saveDecisionSet =  (decisionSet : DecisionSetModel) : DecisionSetActionTypes => {
  return {
    type: SAVE_DECISION_SETS_REQUEST,
    payload: decisionSet
  }
}


export const saveDecisionSetAndRedirect = (decisionSet) => async (dispatch) => {
  dispatch(saveDecisionSet(decisionSet));
  dispatch(saveProject(true));
  /*const decisionSets = getValuesFromByTag(getState().decisionSets.byTag);
  await decisionSetAPI.saveDecisionSets(decisionSets);
  history.push('/DecisionSets');*/
}



const removeDecisionSetRequest =  (tag : string) : DecisionSetActionTypes => {
  return {
    type: REMOVE_DECISION_SET_REQUEST,
    payload: tag
  }
}

export const removeDecisionSet = (tag) => async (dispatch) => {
  dispatch(removeDecisionSetRequest(tag));
  dispatch(saveProject(true));
  /*
  const decisionSets = getValuesFromByTag(getState().decisionSets.byTag);
  await decisionSetAPI.saveDecisionSets(decisionSets); */ 
}

