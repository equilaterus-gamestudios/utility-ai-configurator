import React from 'react';
import { ParameterModel, GetEmptyParameterModel } from '../common/models';
import Parameter from './editors/Parameter';
import pullAt from 'lodash/pullAt';

const ParametersManager = ({ parameters, setParameters }) => {
  const addNewParameter = (e) => {
    e.preventDefault();
    setParameters([...parameters, GetEmptyParameterModel()])
  }

  const removeParameter = (e, index) => {
    e.preventDefault();
    const newParams = [...parameters];
    pullAt(newParams, index);
    setParameters(newParams);
  }

  const updateParameter = (index, newParameter) => {
    const newParams = [...parameters];
    newParams[index] = newParameter;
    setParameters(newParams);
  }

  return (
    <div className="mb-3">
      <h4>Params</h4>
      {
        parameters.map((parameter, index) => {
          return <Parameter parameter={parameter} key={index} index={index} remove={removeParameter} update={updateParameter} />
        })
      }
      <button className="btn btn-primary" onClick={addNewParameter}>+</button>
    </div>
  )
}

export default ParametersManager;
