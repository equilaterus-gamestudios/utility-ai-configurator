import history from '../history';
import { DecisionActionTypes, SAVE_DECISIONS_REQUEST, REMOVE_DECISION_REQUEST } from './types';


import { DecisionModel } from '../common/models';
import { saveProject } from './projectActions';

const saveDecisions =  (decision : DecisionModel) : DecisionActionTypes => {
  return {
    type: SAVE_DECISIONS_REQUEST,
    payload: decision
  }
}

export const saveDecisionAndRedirect = (decision) => async (dispatch) => {
  dispatch(saveDecisions(decision));
  dispatch(saveProject(true));

  history.push('/Decisions');
}

const removeDecisionRequest =  (tag : string) : DecisionActionTypes => {
  return {
    type: REMOVE_DECISION_REQUEST,
    payload: tag
  }
}

export const removeDecision = (tag) => async (dispatch) => {
  dispatch(removeDecisionRequest(tag));
  dispatch(saveProject(true));
}

