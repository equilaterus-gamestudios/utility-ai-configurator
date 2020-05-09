import { promises as fs } from 'fs';
import { DecisionSetModel } from '../common/models'

const FILE_NAME = 'decisionSets.json';

export const loadDecisionSets = async () : Promise<[DecisionSetModel]> => {
  const file = await fs.readFile(FILE_NAME, 'utf8');
  return JSON.parse(file);
}

export const saveDecisionSets = async (decisionSets : [DecisionSetModel]) => {
  await fs.writeFile(FILE_NAME, JSON.stringify(decisionSets), 'utf8');  
}
