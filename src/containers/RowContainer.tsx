import React from 'react';
import { useSelector } from 'react-redux';
import uniqueId from 'lodash/uniqueId';

const RowContainer = ({ selector, properties, actions }) => {
  const model = useSelector(selector);
  return (
    <>
    {
      properties.map(property => (
        <td key={uniqueId(`${property}_`)}>{model[property]}</td>      
      ))
    }
    {
      actions && <td>{actions(model)}</td>
    }
    </>
  )
}

export default RowContainer;

