import { promises as fs } from 'fs';
import { DecisionModel, DecisionSetModel, ConditionEvaluatorModel } from '../common/models'
import { StringifyToPascalCase } from '../common/utility';

import pick from 'lodash/pick';
import Parameter from '../components/editors/Parameter';

const FILE_NAME = 'AIConfiguration.aidb';

const conditionEvaluatorProperties = ['tag', 'functionName', 'curve', 'parameters'];
const decisionProperties = ['tag', 'functionName', 'weight', 'hasTargetDependency', 'conditionEvaluators'];
const decisionSetProperties = ['tag', 'defaultDecision', 'decisions'];

const parametersToDictionary = (parameters) => {
  const paramatersDic = {};
  for (let i = 0; i < parameters.length; ++i) {
    const parameter = parameters[i];
    paramatersDic[parameter.key] = parameter.value;
  }
  return paramatersDic;
}

export const exportConfiguration = async (conditionEvaluators: Array<ConditionEvaluatorModel>,
  decisions : Array<DecisionModel>, decisionSets : Array<DecisionSetModel>) => {   
  const procesedConditionEvaluators = conditionEvaluators.map(ce => pick({...ce, parameters: parametersToDictionary(ce.parameters)}, conditionEvaluatorProperties));
  const procesedDecisions = decisions.map(d => pick(d, decisionProperties));
  const procesedDecisionSets = decisionSets.map(ds => pick(ds, decisionSetProperties));
  const configuration = {
    conditionEvaluators: procesedConditionEvaluators,
    decisions: procesedDecisions,
    decisionSets: procesedDecisionSets
  }
  await fs.writeFile(FILE_NAME, StringifyToPascalCase(configuration), 'utf8');  
}
