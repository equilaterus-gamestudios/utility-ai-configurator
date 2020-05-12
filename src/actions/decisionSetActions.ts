import history from '../history';
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


export const saveDecisionSetAndRedirect = (decisionSet) => async (dispatch) => {
  dispatch(saveDecisionSet(decisionSet));
  history.push('/DecisionSets');
}
