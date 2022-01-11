import { getTags, createByTagStructure } from '../common/utility';
import { Dictionary, ArchetypeModel } from '../common/models';
import { ProjectActionTypes, LOAD_PROJECT_SUCCESS, RESTORE_PROJECT, ArchetypeActionTypes, SAVE_ARCHETYPES_REQUEST, REMOVE_ARCHETYPE_REQUEST, DecisionActionTypes, REMOVE_DECISION_REQUEST } from '../actions/types';
import omit from 'lodash/omit';
import mapValues from 'lodash/mapValues';

export interface ArchetypeState {  
  byTag: Dictionary<ArchetypeModel>,
  tags: Array<string>
}

const defaultState = {
  byTag: {},
  tags: []
} as ArchetypeState

export const archetypeReducer = (state = defaultState, action : ProjectActionTypes | ArchetypeActionTypes | DecisionActionTypes) : ArchetypeState  => {
  switch(action.type) {
    case LOAD_PROJECT_SUCCESS:
      return {
        ...state,
        byTag: createByTagStructure(action.payload.archetypes),
        tags: getTags(action.payload.archetypes)
      }
    case SAVE_ARCHETYPES_REQUEST:
      {
        const isNewArchetype = !state.tags.find(tag => tag === action.payload.tag);
        const tags = [...state.tags];
        if (isNewArchetype) {
          tags.push(action.payload.tag);
        }
        
        return {
          ...state, 
          byTag: {
            ...state.byTag,
            [action.payload.tag]: action.payload
          },
          tags: tags
        } 
      }
    case REMOVE_ARCHETYPE_REQUEST:
      {
        const tags = state.tags.filter(tag => tag !== action.payload);
        const byTag = omit(state.byTag, action.payload);
        
        return {
          ...state, 
          byTag,
          tags
        } 
      }
    case REMOVE_DECISION_REQUEST:
      {
        const byTag = mapValues(state.byTag, (archetype) => ({
          ...archetype, decisions: archetype.decisions.filter(ds => ds !== action.payload)
        }))
        
        return {
          ...state, 
          byTag
        } 
      }
    case RESTORE_PROJECT:
      return defaultState;
    default: 
      return state;
  }
} 
