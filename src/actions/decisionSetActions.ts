import history from '../history';
import { getValuesFromByTag } from '../common/utility';
import { LOAD_DECISION_SETS_SUCCESS, LOAD_DECISION_SETS_REQUEST, SAVE_DECISION_SETS_REQUEST, DecisionSetActionTypes } from './types';
import  *  as decisionSetAPI from '../api/decisionSetAPI';

import { DecisionSetModel } from '../common/models';

const loadDecisionSetsRequest = () : DecisionSetActionTypes => {
  return {
    type: LOAD_DECISION_SETS_REQUEST
  }
}

const loadDecisionSetsSuccess = (decisions : Array<DecisionSetModel>) : DecisionSetActionTypes => {
  return {
    type: LOAD_DECISION_SETS_SUCCESS,
    payload: decisions
  }
}

export const loadDecisionSets = () => async (dispatch) => {
  dispatch(loadDecisionSetsRequest());
  const decisionSets = await decisionSetAPI.loadDecisionSets();
  dispatch(loadDecisionSetsSuccess(decisionSets));
}

const saveDecisionSet =  (decisionSet : DecisionSetModel) : DecisionSetActionTypes => {
  return {
    type: SAVE_DECISION_SETS_REQUEST,
    payload: decisionSet
  }
}


export const saveDecisionSetAndRedirect = (decisionSet) => async (dispatch, getState) => {
  dispatch(saveDecisionSet(decisionSet));
  const decisionSets = getValuesFromByTag(getState().decisionSets.byTag);
  await decisionSetAPI.saveDecisionSets(decisionSets);
  history.push('/DecisionSets');
}
