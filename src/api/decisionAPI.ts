import { promises as fs } from 'fs';
import { DecisionModel } from '../common/models'

const FILE_NAME = 'decisions.json';

export const loadDecisions = async () : Promise<[DecisionModel]> => {
  const file = await fs.readFile(FILE_NAME, 'utf8');
  return JSON.parse(file);
}

export const saveDecisions = async (decisions : [DecisionModel]) => {
  await fs.writeFile(FILE_NAME, JSON.stringify(decisions), 'utf8');  
}
