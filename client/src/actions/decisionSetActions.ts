import { LOAD_DECISION_SETS_SUCCESS, LOAD_DECISION_SETS_REQUEST, DecisionSetActionTypes } from './types';
import  *  as decisionSetAPI from '../api/decisionSetAPI';

import { DecisionSetModel } from '../common/models';

const loadDecisionSetsRequest = () : DecisionSetActionTypes => {
  return {
    type: LOAD_DECISION_SETS_REQUEST
  }
}

const loadDecisionSetsSuccess = (decisions : [DecisionSetModel]) : DecisionSetActionTypes => {
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
