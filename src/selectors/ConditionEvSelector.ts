import { ConditionEvaluatorState } from '../reducers/ConditionEvaluatorReducer'

interface RootState {
  conditionEvaluators: ConditionEvaluatorState
}

export const selectConditionEvaluators = (state: RootState) => state.conditionEvaluators.data;

