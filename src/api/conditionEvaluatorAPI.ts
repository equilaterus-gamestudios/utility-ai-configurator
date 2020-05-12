import { promises as fs } from 'fs';
import { ConditionEvaluatorModel } from '../common/models'

const FILE_NAME = 'conditionEvaluators.json';

export const loadConditionEvaluators = async () : Promise<Array<ConditionEvaluatorModel>> => {
  try{
    const file = await fs.readFile(FILE_NAME, 'utf8');
    return JSON.parse(file);
  }catch(e){
    console.error(e);
    return [] as Array<ConditionEvaluatorModel>;
  }
}

export const saveConditionEvaluators = async (conditionEvaluators : Array<ConditionEvaluatorModel>) => {
  await fs.writeFile(FILE_NAME, JSON.stringify(conditionEvaluators), 'utf8');  
}
