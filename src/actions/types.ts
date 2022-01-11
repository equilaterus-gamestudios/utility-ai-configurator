import { ConditionEvaluatorModel, ProjectModel, DecisionModel, DecisionSetModel } from '../common/models'

/** Condition Evaluators */

export const LOAD_CONDITION_EVALUATORS_REQUEST  = 'LOAD_CONDITION_EVALUATORS_REQUEST';
export const LOAD_CONDITION_EVALUATORS_FAIL     = 'LOAD_CONDITION_EVALUATORS_FAIL';
export const LOAD_CONDITION_EVALUATORS_SUCCESS  = 'LOAD_CONDITION_EVALUATORS_SUCCESS';

export const SAVE_CONDITION_EVALUATOR_REQUEST  = 'SAVE_CONDITION_EVALUATOR_REQUEST';
export const SAVE_CONDITION_EVALUATOR_FAIL     = 'SAVE_CONDITION_EVALUATOR_FAIL';
export const SAVE_CONDITION_EVALUATOR_SUCCESS  = 'SAVE_CONDITION_EVALUATOR_SUCCESS';

export const REMOVE_CONDITION_EVALUATOR_REQUEST= 'REMOVE_CONDITION_EVALUATOR_REQUEST';
export const REMOVE_CONDITION_EVALUATOR_FAIL   = 'REMOVE_CONDITION_EVALUATOR_FAIL';
export const REMOVE_CONDITION_EVALUATOR_SUCCESS= 'REMOVE_CONDITION_EVALUATOR_SUCCESS';

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

interface RemoveConditionEvaluatorSuccess {
  type: typeof REMOVE_CONDITION_EVALUATOR_SUCCESS  
}

interface RemoveConditionEvaluatorRequest {
  type: typeof REMOVE_CONDITION_EVALUATOR_REQUEST,
  payload: string
}

export type ConditionEvaluatorActionTypes = SaveConditionEvaluatorRequest | RemoveConditionEvaluatorRequest;


/** Decisions */

export const LOAD_DECISIONS_REQUEST = 'LOAD_DECISIONS_REQUEST';
export const LOAD_DECISIONS_FAIL    = 'LOAD_DECISIONS_FAIL';
export const LOAD_DECISIONS_SUCCESS = 'LOAD_DECISIONS_SUCCESS';

export const SAVE_DECISIONS_REQUEST = 'SAVE_DECISIONS_REQUEST';
export const SAVE_DECISIONS_FAIL    = 'SAVE_DECISIONS_FAIL';
export const SAVE_DECISIONS_SUCCESS = 'SAVE_DECISIONS_SUCCESS';

export const REMOVE_DECISION_REQUEST= 'REMOVE_DECISION_REQUEST';
export const REMOVE_DECISION_FAIL   = 'REMOVE_DECISION_FAIL';
export const REMOVE_DECISION_SUCCESS= 'REMOVE_DECISION_SUCCESS';

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

interface RemoveDecisionSuccess {
  type: typeof REMOVE_DECISION_SUCCESS  
}

interface RemoveDecisionRequest {
  type: typeof REMOVE_DECISION_REQUEST,
  payload: string
}

export type DecisionActionTypes = SaveDecisionsRequest | RemoveDecisionRequest


/** Decision Sets */

export const LOAD_DECISION_SETS_REQUEST = 'LOAD_DECISION_SETS_REQUEST';
export const LOAD_DECISION_SETS_FAIL    = 'LOAD_DECISION_SETS_FAIL';
export const LOAD_DECISION_SETS_SUCCESS = 'LOAD_DECISION_SETS_SUCCESS';

export const SAVE_DECISION_SETS_REQUEST = 'SAVE_DECISION_SETS_REQUEST';
export const SAVE_DECISION_SETS_FAIL    = 'SAVE_DECISION_SETS_FAIL';
export const SAVE_DECISION_SETS_SUCCESS = 'SAVE_DECISION_SETS_SUCCESS';

export const REMOVE_DECISION_SET_REQUEST= 'REMOVE_DECISION_SET_REQUEST';
export const REMOVE_DECISION_SET_FAIL   = 'REMOVE_DECISION_SET_FAIL';
export const REMOVE_DECISION_SET_SUCCESS= 'REMOVE_DECISION_SET_SUCCESS';

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

interface RemoveDecisionSetSuccess {
  type: typeof REMOVE_DECISION_SET_SUCCESS  
}

interface RemoveDecisionSetRequest {
  type: typeof REMOVE_DECISION_SET_REQUEST,
  payload: string
}

export type DecisionSetActionTypes = SaveDecisionSetsRequest | RemoveDecisionSetRequest


/** configuration */

export const LOAD_PROJECT_REQUEST = 'LOAD_PROJECT_REQUEST';
export const LOAD_PROJECT_FAIL    = 'LOAD_PROJECT_FAIL';
export const LOAD_PROJECT_SUCCESS = 'LOAD_PROJECT_SUCCESS';

export const SAVE_PROJECT_REQUEST = 'SAVE_PROJECT_REQUEST';
export const SAVE_PROJECT_FAIL    = 'SAVE_PROJECT_FAIL';
export const SAVE_PROJECT_SUCCESS = 'SAVE_PROJECT_SUCCESS';


export const EXPORT_PROJECT_REQUEST = 'EXPORT_PROJECT_REQUEST';
export const EXPORT_PROJECT_FAIL    = 'EXPORT_PROJECT_FAIL';
export const EXPORT_PROJECT_SUCCESS = 'EXPORT_PROJECT_SUCCESS';

export const RESTORE_PROJECT = 'RESTORE_PROJECT';

interface LoadProjectRequest {
  type: typeof LOAD_PROJECT_REQUEST,
  payload: string
}

interface LoadProjectSuccess {
  type: typeof LOAD_PROJECT_SUCCESS,
  payload: ProjectModel
}

interface SaveProjectRequest {
  type: typeof SAVE_PROJECT_REQUEST,
}

interface SaveProjectSuccess {
  type: typeof SAVE_PROJECT_SUCCESS,
  payload: boolean
}

interface ExportProjectRequest {
  type: typeof EXPORT_PROJECT_REQUEST,
}

interface ExportProjectSuccess {
  type: typeof EXPORT_PROJECT_SUCCESS 
}

interface RestoreProject {
  type: typeof RESTORE_PROJECT
}


export type ProjectActionTypes = LoadProjectRequest | LoadProjectSuccess | SaveProjectRequest | SaveProjectSuccess | ExportProjectRequest | ExportProjectSuccess | RestoreProject

/**
 * Runtime
 */
export const SET_PROJECT_PATH = 'SET_PROJECT_PATH';

interface SetProjectPath {
  type: typeof SET_PROJECT_PATH,
  payload: string
}

export type RuntimeActionTypes = SetProjectPath;
