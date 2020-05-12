import history from '../history';
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


export const saveDecisionAndRedirect = (decision) => async (dispatch) => {
  dispatch(saveDecisions(decision));
  history.push('/Decisions');
}
