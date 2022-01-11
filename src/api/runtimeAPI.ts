import { promises as fs } from 'fs';
import { runtimeModel } from '../common/models'

import pick from 'lodash/pick';
import { DEFAULT_RUNTIME, RUNTIME_FILE } from '../common/Global';


export const loadRuntime = async () : Promise<runtimeModel> => {
  try {
    const file = await fs.readFile(RUNTIME_FILE, 'utf8');
    return JSON.parse(file);
  } catch(e) {
    console.error(e);
    return DEFAULT_RUNTIME as runtimeModel;
  }
}

export const saveRuntime = async (runtime : runtimeModel) => {
  const runtimeToSave = pick(runtime, ['changesNotSaved', 'latestOpenedProjects'])
  await fs.writeFile(RUNTIME_FILE, JSON.stringify(runtimeToSave), 'utf8');  
}

