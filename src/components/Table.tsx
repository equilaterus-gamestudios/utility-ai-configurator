import React from 'react';
import RowContainer from '../containers/RowContainer';

interface PropTypes {
  tags: Array<string>,
  properties: Array<string>,
  actions: (any) => any,
  selector: (any) => any
}

const renderBody = (tags : Array<string>, properties : Array<string>, actions : (any) => any, selector : (any) => any) => (
  tags.map(tag => (
    <tr key={tag}>
      <RowContainer properties={properties} actions={actions} selector={selector(tag)} />  
    </tr>
  ))
)

const renderHeader = (properties : Array<string>, hasActions : boolean) => (
  <tr>
    {
      properties.map(property => (
        <th key={property}>{property}</th>      
      ))
    }  
    {
      hasActions && <th>Actions</th>  
    }
  </tr>
)

const Table = ({ tags, properties, actions, selector } : PropTypes) => {
  return (
    <table className="table">
      <thead className="thead-dark">
      { renderHeader(properties, !!actions) }
      </thead>
      <tbody>
        { renderBody(tags, properties, actions, selector) }
      </tbody>
    </table>
  );
}

export default Table;
