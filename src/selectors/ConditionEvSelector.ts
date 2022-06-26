import { ConditionEvaluatorState } from '../reducers/ConditionEvaluatorReducer'

interface RootState {
  conditionEvaluators: ConditionEvaluatorState
}

export const selectConditionEvaluatorTags = (state: RootState) => state.conditionEvaluators.tags;
export const selectAllConditionEvaluatorsByTag = (state: RootState) => state.conditionEvaluators.byTag;
export const selectConditionEvaluatorByTag = (tag: string) => (state: RootState) => state.conditionEvaluators.byTag[tag];
