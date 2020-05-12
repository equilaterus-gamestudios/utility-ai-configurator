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

export const StringifyToPascalCase = (obj) => (
  JSON.stringify(obj, function (key, value) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      var replacement = {};
      for (var k in value) {
        if (Object.hasOwnProperty.call(value, k)) {
          replacement[k && k.charAt(0).toUpperCase() + k.substring(1)] = value[k];
        }
      }
      return replacement;
    }
    
    if (typeof value === 'boolean') {
      return  value ? '1' : '0';
    }

    if (typeof value === 'number') {
      return value.toString();
    }

    return value;
  })
)
