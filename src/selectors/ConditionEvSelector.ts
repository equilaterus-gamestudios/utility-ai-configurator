import { ConditionEvaluatorState } from '../reducers/ConditionEvaluatorReducer'

interface RootState {
  conditionEvaluators: ConditionEvaluatorState
}

export const selectConditionEvaluatorTags = (state: RootState) => state.conditionEvaluators.tags;
export const selectConditionEvaluatorByTag = (tag) => (state: RootState) => state.conditionEvaluators.byTag[tag];
