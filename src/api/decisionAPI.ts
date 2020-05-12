import { promises as fs } from 'fs';
import { DecisionModel } from '../common/models'

const FILE_NAME = 'decisions.json';

export const loadDecisions = async () : Promise<Array<DecisionModel>> => {
  try{
    const file = await fs.readFile(FILE_NAME, 'utf8');
    return JSON.parse(file);
  }catch(e){
    console.error(e);
    return [] as Array<DecisionModel>;
  }
}

export const saveDecisions = async (decisions : Array<DecisionModel>) => {
  await fs.writeFile(FILE_NAME, JSON.stringify(decisions), 'utf8');  
}
