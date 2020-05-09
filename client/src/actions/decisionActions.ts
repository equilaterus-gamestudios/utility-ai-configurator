import { LOAD_DECISIONS_SUCCESS, LOAD_DECISIONS_REQUEST, DecisionActionTypes } from './types';
import  *  as decisionAPI from '../api/decisionAPI';

import { DecisionModel } from '../common/models';

const loadDecisionsRequest = () : DecisionActionTypes => {
  return {
    type: LOAD_DECISIONS_REQUEST
  }
}

const loadDecisionsSuccess = (decisions : [DecisionModel]) : DecisionActionTypes => {
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
