import React from 'react';
import RowContainer from '../containers/RowContainer';

interface PropTypes {
  tags: Array<string>,
  properties: Array<string>,
  actions: (arg0: any) => any,
  selector: (arg0: any) => any
}

const renderBody = (tags : Array<string>, properties : Array<string>, actions : (arg0: any) => any, selector : (arg0: any) => any) => (
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
    <div className="nes-table-responsive">
      <table className="nes-table is-bordered is-centered">
        <thead className="is-dark">
        { renderHeader(properties, !!actions) }
        </thead>
        <tbody>
          { renderBody(tags, properties, actions, selector) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
