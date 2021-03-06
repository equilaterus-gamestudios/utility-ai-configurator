import React from 'react';
import { ParameterModel } from '../../common/models';

interface PropTypes {
  parameter: ParameterModel,
  index: Number,
  remove: (any, Number) => void,
  update: (Number, ParameterModel) => void
}

const Parameter = ({ parameter, index, remove, update } : PropTypes) => {  
  const handleChange = (property, value) => {    
    update(index, {
      ...parameter,
      [property]: value
    })
  }

  return (
    <div className="row">
      <div className="col-md-3">
        <label>Key:</label>
        <input type="text" className="nes-input" value={parameter.key} onChange={(e) => handleChange('key', e.target.value)} />
      </div>
      <div className="col-md-3">
        <label>Value:</label>
        <input type="text" className="nes-input" value={parameter.value} onChange={(e) => handleChange('value', e.target.value)} />
      </div>
      <div className="col-md-5">
        <label>Description:</label>
        <input type="text" className="nes-input" value={parameter.description} onChange={(e) => handleChange('description', e.target.value)} />
      </div>
      <div className="col-md-1 btn-center">                
        <button className="nes-btn is-error" onClick={(e) => remove(e, index)}>X</button>
      </div>
    </div>    
  );
};

export default Parameter;
