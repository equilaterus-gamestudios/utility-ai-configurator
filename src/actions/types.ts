import { ConditionEvaluatorModel, DecisionModel, DecisionSetModel } from '../common/models'

/** Condition Evaluators */

export const LOAD_CONDITION_EVALUATORS_REQUEST  = 'LOAD_CONDITION_EVALUATORS_REQUEST';
export const LOAD_CONDITION_EVALUATORS_FAIL     = 'LOAD_CONDITION_EVALUATORS_FAIL';
export const LOAD_CONDITION_EVALUATORS_SUCCESS  = 'LOAD_CONDITION_EVALUATORS_SUCCESS';

export const SAVE_CONDITION_EVALUATOR_REQUEST  = 'SAVE_CONDITION_EVALUATOR_REQUEST';
export const SAVE_CONDITION_EVALUATOR_FAIL     = 'SAVE_CONDITION_EVALUATOR_FAIL';
export const SAVE_CONDITION_EVALUATOR_SUCCESS  = 'SAVE_CONDITION_EVALUATOR_SUCCESS';

interface LoadConditionEvaluatorSuccess {
  type: typeof LOAD_CONDITION_EVALUATORS_SUCCESS,
  payload: Array<ConditionEvaluatorModel>
}

interface LoadConditionEvaluatorRequest {
  type: typeof LOAD_CONDITION_EVALUATORS_REQUEST
}

interface SaveConditionEvaluatorRequest {
  type: typeof SAVE_CONDITION_EVALUATOR_REQUEST,
  payload: ConditionEvaluatorModel
}

interface SaveConditionEvaluatorSuccess {
  type: typeof SAVE_CONDITION_EVALUATOR_SUCCESS  
}

export type ConditionEvaluatorActionTypes = LoadConditionEvaluatorSuccess | LoadConditionEvaluatorRequest | SaveConditionEvaluatorSuccess | SaveConditionEvaluatorRequest;


/** Decisions */

export const LOAD_DECISIONS_REQUEST = 'LOAD_DECISIONS_REQUEST';
export const LOAD_DECISIONS_FAIL    = 'LOAD_DECISIONS_FAIL';
export const LOAD_DECISIONS_SUCCESS = 'LOAD_DECISIONS_SUCCESS';

export const SAVE_DECISIONS_REQUEST = 'SAVE_DECISIONS_REQUEST';
export const SAVE_DECISIONS_FAIL    = 'SAVE_DECISIONS_FAIL';
export const SAVE_DECISIONS_SUCCESS = 'SAVE_DECISIONS_SUCCESS';

interface LoadDecisionsSuccess {
  type: typeof LOAD_DECISIONS_SUCCESS,
  payload: Array<DecisionModel>
}

interface LoadDecisionsRequest {
  type: typeof LOAD_DECISIONS_REQUEST
}

interface SaveDecisionsSuccess {
  type: typeof SAVE_DECISIONS_SUCCESS  
}

interface SaveDecisionsRequest {
  type: typeof SAVE_DECISIONS_REQUEST,
  payload: DecisionModel
}

export type DecisionActionTypes = LoadDecisionsSuccess | LoadDecisionsRequest | SaveDecisionsSuccess | SaveDecisionsRequest;


/** Decision Sets */

export const LOAD_DECISION_SETS_REQUEST = 'LOAD_DECISION_SETS_REQUEST';
export const LOAD_DECISION_SETS_FAIL    = 'LOAD_DECISION_SETS_FAIL';
export const LOAD_DECISION_SETS_SUCCESS = 'LOAD_DECISION_SETS_SUCCESS';

export const SAVE_DECISION_SETS_REQUEST = 'SAVE_DECISION_SETS_REQUEST';
export const SAVE_DECISION_SETS_FAIL    = 'SAVE_DECISION_SETS_FAIL';
export const SAVE_DECISION_SETS_SUCCESS = 'SAVE_DECISION_SETS_SUCCESS';

interface LoadDecisionSetsSuccess {
  type: typeof LOAD_DECISION_SETS_SUCCESS,
  payload: Array<DecisionSetModel>
}

interface LoadDecisionSetsRequest {
  type: typeof LOAD_DECISION_SETS_REQUEST 
}

interface SaveDecisionSetsSuccess {
  type: typeof SAVE_DECISION_SETS_SUCCESS 
}

interface SaveDecisionSetsRequest {
  type: typeof SAVE_DECISION_SETS_REQUEST,
  payload: DecisionSetModel
}

export type DecisionSetActionTypes = LoadDecisionSetsSuccess | LoadDecisionSetsRequest | SaveDecisionSetsSuccess | SaveDecisionSetsRequest;


/** export configuration */

export const EXPORT_CONFIGURATION_REQUEST = 'EXPORT_CONFIGURATION_REQUEST';
export const EXPORT_CONFIGURATION_FAIL    = 'EXPORT_CONFIGURATION_FAIL';
export const EXPORT_CONFIGURATION_SUCCESS = 'EXPORT_CONFIGURATION_SUCCESS';

interface ExportConfigurationRequest {
  type: typeof EXPORT_CONFIGURATION_REQUEST,
}

interface ExportConfigurationSuccess {
  type: typeof EXPORT_CONFIGURATION_SUCCESS 
}


export type ExportConfigurationActionTypes = ExportConfigurationRequest | ExportConfigurationSuccess ;
