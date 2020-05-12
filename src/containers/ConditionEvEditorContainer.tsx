import React from 'react';
import CurveEditor from '../components/editors/Curve';

import { saveConditionEvaluatorAndRedirect } from '../actions/conditionEvaluatorActions';
import { ConditionEvaluatorModel } from '../common/models';
import { useForm } from '../hooks/useForm';

import { useDispatch } from 'react-redux';

interface ConditionEvEditorContainerProps {
  conditionEvaluator: ConditionEvaluatorModel,
}

const defaultConditionEvaluator:ConditionEvaluatorModel = {
  tag: '',
  functionName: '',
  parameters: [],
  curve: {
    curveType: 'POLINOMIAL',
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
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Tag:</label>
          <input type="text" className="form-control" value={model.tag} onChange={(e) => setProperty('tag', e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>Function Name:</label>
          <input type="text" className="form-control" value={model.functionName} onChange={(e) => setProperty('functionName', e.target.value)} />
        </div>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" className="form-control" value={model.description} onChange={(e) => setProperty('description', e.target.value)} />
      </div>
      <CurveEditor curve={model.curve} setCurve={setProperty} />
      <input type="button" className="btn btn-primary" value="Save" onClick={handleSave}/>
    </form>
  )
}

export default ConditionEvEditorContainer;
