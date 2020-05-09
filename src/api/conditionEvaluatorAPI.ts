import { promises as fs } from 'fs';
import { ConditionEvaluatorModel } from '../common/models'

const FILE_NAME = 'conditionEvaluators.json';

export const loadConditionEvaluators = async () : Promise<[ConditionEvaluatorModel]> => {
  const file = await fs.readFile(FILE_NAME, 'utf8');
  return JSON.parse(file);
}

export const saveConditionEvaluators = async (conditionEvaluators : [ConditionEvaluatorModel]) => {
  await fs.writeFile(FILE_NAME, JSON.stringify(conditionEvaluators), 'utf8');  
}
