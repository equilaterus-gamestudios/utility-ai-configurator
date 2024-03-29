// ConditionEvaluator
// Models

export interface ConditionEvaluatorModel {
  tag: string,
  functionName: string,
  parameters: Array<ParameterModel>
  curve: Curve,
  description: string,
}

export interface Curve {
  curveType: string,
  exponent: number,
  slope: number,
  xShift: number,
  yShift: number,
}

export interface ParameterModel {
  key: string,
  value: string,
  description: string,
}
export function GetEmptyParameterModel() : ParameterModel {
  return { key: '', value: '', description: ''}
}


// Decision
// Models

export interface DecisionModel {
  tag: string,
  functionName: string,
  weight: number,
  hasTargetDependency: boolean
  conditionEvaluators: Array<string>
  description: string,
}


// Decision set
// Models

export interface ArchetypeModel {
  tag: string,
  decisions: Array<string>,
  defaultDecision: string,
  description: string
}


// Configuration
// Models

export interface ProjectModel {
  conditionEvaluators: Array<ConditionEvaluatorModel>,
  decisions: Array<DecisionModel>,
  archetypes: Array<ArchetypeModel>
}


// Runtime 
// Models
export interface runtimeModel {
  projectPath: string,
  changesNotSaved: boolean,
  latestOpenedProjects: Array<string>
}

//

export interface Dictionary<T> {
  [Key: string]: T
}
