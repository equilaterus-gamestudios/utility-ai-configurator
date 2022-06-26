import { ArchetypeState } from '../reducers/ArchetypeReducer'

interface RootState {
  archetypes: ArchetypeState
}

export const selectArchetypeTags = (state: RootState) => state.archetypes.tags;
export const selectArchetypeByTag = (tag: string) => (state: RootState) => state.archetypes.byTag[tag];
