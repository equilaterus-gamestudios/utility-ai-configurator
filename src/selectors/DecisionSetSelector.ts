import { DecisionSetState } from '../reducers/DecisionSetReducer'

interface RootState {
  decisionSets: DecisionSetState
}

export const selectDecisionSetTags = (state: RootState) => state.decisionSets.tags;
export const selectDecisionSetByTag = (tag) => (state: RootState) => state.decisionSets.byTag[tag];
