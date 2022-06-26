import React from 'react';
import { GetEmptyParameterModel } from '../common/models';
import Parameter from './editors/Parameter';
import pullAt from 'lodash/pullAt';

const ParametersManager = ({ parameters, setParameters }: any) => {
  const addNewParameter = (e: any) => {
    e.preventDefault();
    setParameters([...parameters, GetEmptyParameterModel()])
  }

  const removeParameter = (e: any, index: any) => {
    e.preventDefault();
    const newParams = [...parameters];
    pullAt(newParams, index);
    setParameters(newParams);
  }

  const updateParameter = (index: any, newParameter: any) => {
    const newParams = [...parameters];
    newParams[index] = newParameter;
    setParameters(newParams);
  }

  return (
    <div className="mb-3">
      <h4>Params</h4>
      {
        parameters.map((parameter: any, index: any) => {
          return <Parameter parameter={parameter} key={index} index={index} remove={removeParameter} update={updateParameter} />
        })
      }
      <button className="nes-btn is-success" onClick={addNewParameter}>+ Add</button>
    </div>
  )
}

export default ParametersManager;
