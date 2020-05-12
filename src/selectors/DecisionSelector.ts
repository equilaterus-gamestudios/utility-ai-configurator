import { DecisionState } from '../reducers/DecisionReducer'

interface RootState {
  decisions: DecisionState
}

export const selectDecisionTags = (state: RootState) => state.decisions.tags;
export const selectDecisionByTag = (tag) => (state: RootState) => state.decisions.byTag[tag];
