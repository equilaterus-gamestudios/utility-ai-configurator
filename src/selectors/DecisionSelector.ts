import { DecisionState } from '../reducers/DecisionReducer'

interface RootState {
  decisions: DecisionState
}

export const selectDecisionTags = (state: RootState) => state.decisions.tags;
export const selectAllDecisionsByTag = (state: RootState) => state.decisions.byTag;
export const selectDecisionByTag = (tag) => (state: RootState) => state.decisions.byTag[tag];
