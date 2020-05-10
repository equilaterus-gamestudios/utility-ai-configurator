import keyBy from 'lodash/keyBy';

export const getTags = (list) => (
  list.map(element => element.tag)
)

export const createByTagStructure = (list) => (
  keyBy(list, 'tag')
)
