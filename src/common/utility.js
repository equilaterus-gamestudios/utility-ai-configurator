import keyBy from 'lodash/keyBy';
import values from 'lodash/values';

export const getTags = (list) => (
  list.map(element => element.tag)
)

export const createByTagStructure = (list) => (
  keyBy(list, 'tag')
)

export const getValuesFromByTag = (byTag) => (
  values(byTag)
)
