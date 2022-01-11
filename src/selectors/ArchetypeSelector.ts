import { ArchetypeState } from '../reducers/ArchetypeReducer'

interface RootState {
  archetypes: ArchetypeState
}

export const selectArchetypeTags = (state: RootState) => state.archetypes.tags;
export const selectArchetypeByTag = (tag) => (state: RootState) => state.archetypes.byTag[tag];
