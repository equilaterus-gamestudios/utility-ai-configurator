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


// Decision
// Models

export interface DecisionModel {
  tag: string,
  functionName: string,
  weight: number,
  hasTargetDependency: boolean
  conditionEvaluators: Array<ConditionEvaluatorModel>
  description: string,
}


// Decision set
// Models

export interface DecisionSetModel {
  tag: string,
  decisions: Array<DecisionModel>,
  defaultDecision: string,
  description: string
}

//

export interface Dictionary<T> {
  [Key: string]: T
}
