import { promises as fs } from 'fs';
import { ProjectModel } from '../common/models'
import { StringifyToPascalCase } from '../common/utility';

import pick from 'lodash/pick';

const conditionEvaluatorProperties = ['tag', 'functionName', 'curve', 'parameters'];
const decisionProperties = ['tag', 'functionName', 'weight', 'hasTargetDependency', 'conditionEvaluators'];
const decisionSetProperties = ['tag', 'defaultDecision', 'decisions'];

// This functions takes the parameters in the condition evaluator and converts them from a parameter's array to
// a dictionary that only sets the key and the value per each parameter, removing the description
const parametersToDictionary = (parameters) => {
  const paramatersDic = {};
  for (let i = 0; i < parameters.length; ++i) {
    const parameter = parameters[i];
    paramatersDic[parameter.key] = parameter.value;
  }
  return paramatersDic;
}

export const loadProject = async (path : string) : Promise<ProjectModel> => {
  try {
    const file = await fs.readFile(path, 'utf8');
    return JSON.parse(file);
  } catch(e) {
    console.error(e);
    return {} as ProjectModel;
  }
}

export const saveProject = async (path : string, configuration : ProjectModel) => {
  await fs.writeFile(path, JSON.stringify(configuration), 'utf8');  
}

export const exportProject = async (path : string, configuration : ProjectModel) => {   
  const procesedConditionEvaluators = configuration.conditionEvaluators.map(ce => pick({...ce, parameters: parametersToDictionary(ce.parameters)}, conditionEvaluatorProperties));
  const procesedDecisions = configuration.decisions.map(d => pick(d, decisionProperties));
  const procesedDecisionSets = configuration.decisionSets.map(ds => pick(ds, decisionSetProperties));
  const exportedProject = {
    conditionEvaluators: procesedConditionEvaluators,
    decisions: procesedDecisions,
    decisionSets: procesedDecisionSets
  }
  await fs.writeFile(path, StringifyToPascalCase(exportedProject), 'utf8');  
}