import React from 'react';
import { useSelector } from 'react-redux';

const RowContainer = ({ selector, properties, actions }) => {
  const model = useSelector(selector);
  return (
    <>
    {
      properties.map(property => (
        <td>{model[property]}</td>      
      ))
    }
    {
      actions && <td>{actions(model)}</td>
    }
    </>
  )
}

export default RowContainer;

