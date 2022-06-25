import { Dictionary } from "./models";

export const TEMP_FILE = 'temp.data';
export const RUNTIME_FILE = 'runtime.data';
export const DEFAULT_PROJ = {'conditionEvaluators':[],'decisions':[],'archetypes':[]};
export const DEFAULT_RUNTIME = { 'projectPath': '', 'changesNotSaved': false, 'latestOpenedProjects': [] };

export const curveTypes = {
    LINEAR: 'Linear',
    POLYNOMIAL: 'Polynomial',    
    LOGISTIC: 'Logistic',
    LOGIT: 'Logit',
    NORMAL: 'Normal',
    SINE: 'Sine'
};

export const curveTypesDict = curveTypes as Dictionary<string>