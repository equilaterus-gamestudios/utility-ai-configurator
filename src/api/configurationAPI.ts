import { promises as fs } from 'fs';
import { DecisionModel, DecisionSetModel, ConditionEvaluatorModel } from '../common/models'
import { StringifyToPascalCase } from '../common/utility';

import pick from 'lodash/pick';

const FILE_NAME = 'AIConfiguration.json';

const conditionEvaluatorProperties = ['tag', 'functionName', 'curve', 'parameters'];
const decisionProperties = ['tag', 'functionName', 'weight', 'hasTargetDependency', 'conditionEvaluators'];
const decisionSetProperties = ['tag', 'defaultDecision', 'decisions'];

export const exportConfiguration = async (conditionEvaluators: Array<ConditionEvaluatorModel>,
  decisions : Array<DecisionModel>, decisionSets : Array<DecisionSetModel>) => {   
  const procesedConditionEvaluators = conditionEvaluators.map(ce => pick(ce, conditionEvaluatorProperties));
  const procesedDecisions = decisions.map(d => pick(d, decisionProperties));
  const procesedDecisionSets = decisionSets.map(ds => pick(ds, decisionSetProperties));
  const configuration = {
    conditionEvaluators: procesedConditionEvaluators,
    decisions: procesedDecisions,
    decisionSets: procesedDecisionSets
  }
  await fs.writeFile(FILE_NAME, StringifyToPascalCase(configuration), 'utf8');  
}
