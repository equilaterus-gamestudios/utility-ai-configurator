import { getValuesFromByTag } from '../common/utility';
import { EXPORT_CONFIGURATION_REQUEST, EXPORT_CONFIGURATION_SUCCESS, ExportConfigurationActionTypes } from './types';
import  *  as configurationAPI  from '../api/configurationAPI';

const exportCondigurationRequest = () : ExportConfigurationActionTypes => {
  return {
    type: EXPORT_CONFIGURATION_REQUEST
  }
}

const exportCondigurationSuccess = () : ExportConfigurationActionTypes => {
  return {
    type: EXPORT_CONFIGURATION_SUCCESS
  }
}

export const exportConfiguration = () => async (dispatch, getState) => {
  dispatch(exportCondigurationRequest());
  const conditionEvaluators = getValuesFromByTag(getState().conditionEvaluators.byTag);
  const decisions = getValuesFromByTag(getState().decisions.byTag);
  const decisionSets = getValuesFromByTag(getState().decisionSets.byTag);
  await configurationAPI.exportConfiguration(conditionEvaluators, decisions, decisionSets);
  dispatch(exportCondigurationSuccess());
}
