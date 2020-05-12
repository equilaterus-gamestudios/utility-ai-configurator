import history from '../history';
import { getValuesFromByTag } from '../common/utility';
import { LOAD_DECISIONS_SUCCESS, LOAD_DECISIONS_REQUEST, SAVE_DECISIONS_REQUEST, DecisionActionTypes } from './types';
import  *  as decisionAPI from '../api/decisionAPI';

import { DecisionModel } from '../common/models';

const loadDecisionsRequest = () : DecisionActionTypes => {
  return {
    type: LOAD_DECISIONS_REQUEST
  }
}

const loadDecisionsSuccess = (decisions : Array<DecisionModel>) : DecisionActionTypes => {
  return {
    type: LOAD_DECISIONS_SUCCESS,
    payload: decisions
  }
}

export const loadDecisions = () => async (dispatch) => {
  dispatch(loadDecisionsRequest());
  const decisions = await decisionAPI.loadDecisions();
  dispatch(loadDecisionsSuccess(decisions));
}


const saveDecisions =  (decision : DecisionModel) : DecisionActionTypes => {
  return {
    type: SAVE_DECISIONS_REQUEST,
    payload: decision
  }
}


export const saveDecisionAndRedirect = (decision) => async (dispatch, getState) => {
  dispatch(saveDecisions(decision));
  const decisions = getValuesFromByTag(getState().decisions.byTag);
  await decisionAPI.saveDecisions(decisions);
  history.push('/Decisions');
}
