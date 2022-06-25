import React from 'react';
import CurveEditor from '../components/editors/Curve';
import ParametersManager from '../components/ParametersManager';

import { saveConditionEvaluatorAndRedirect } from '../actions/conditionEvaluatorActions';
import { ConditionEvaluatorModel } from '../common/models';
import { useForm } from '../hooks/useForm';

import { useDispatch } from 'react-redux';
import { curveTypes } from '../common/Global';

interface ConditionEvEditorContainerProps {
  conditionEvaluator: ConditionEvaluatorModel,
}

const defaultConditionEvaluator:ConditionEvaluatorModel = {
  tag: '',
  functionName: '',
  parameters: [],
  curve: {
    curveType: curveTypes.POLYNOMIAL,
    exponent: 1,
    slope: 1,
    xShift: 1,
    yShift: 1
  },
  description: ''
};

const ConditionEvEditorContainer = ({ conditionEvaluator = defaultConditionEvaluator } : ConditionEvEditorContainerProps) => {
  const [model, setProperty] = useForm(conditionEvaluator)  
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(saveConditionEvaluatorAndRedirect(model));
  }

  return (
    <form>
      <div className="row">
        <div className="nes-field col">
          <label>Tag:</label>
          <input type="text" className="nes-input" value={model.tag} onChange={(e) => setProperty('tag', e.target.value)} />
        </div>
        <div className="nes-field col">
          <label>Function Name:</label>
          <input type="text" className="nes-input" value={model.functionName} onChange={(e) => setProperty('functionName', e.target.value)} />
        </div>
      </div>
      <div className="nes-field">
        <label>Description:</label>
        <input type="text" className="nes-input" value={model.description} onChange={(e) => setProperty('description', e.target.value)} />
      </div>
      <CurveEditor curve={model.curve} setCurve={setProperty} />
      <ParametersManager parameters={model.parameters} setParameters={(newValue: any) => setProperty('parameters', newValue)} />
      <input type="button" className="nes-btn is-primary" value="Save" onClick={handleSave}/>
    </form>
  )
}

export default ConditionEvEditorContainer;
