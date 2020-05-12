import { promises as fs } from 'fs';
import { DecisionSetModel } from '../common/models'

const FILE_NAME = 'decisionSets.json';

export const loadDecisionSets = async () : Promise<Array<DecisionSetModel>> => {
  try{
    const file = await fs.readFile(FILE_NAME, 'utf8');
    return JSON.parse(file);
  }catch(e){
    console.error(e);
    return [] as Array<DecisionSetModel>;
  }
}

export const saveDecisionSets = async (decisionSets : Array<DecisionSetModel>) => {
  await fs.writeFile(FILE_NAME, JSON.stringify(decisionSets), 'utf8');  
}
