import React from 'react';

import { saveDecisionAndRedirect } from '../actions/decisionActions';
import { DecisionModel } from '../common/models';
import { useForm } from '../hooks/useForm';

import { useDispatch } from 'react-redux';
import ConditionEvs from '../components/ConditionEvaluators/ConditionEvs';

interface DecisionEditorContainerProps {
  decision: DecisionModel,
}

const defaultDecision:DecisionModel = {
  tag: '',
  functionName: '',
  description: '',
  weight: 1,
  hasTargetDependency: false,
  conditionEvaluators: []
};

const DecisionEditorContainer = ({ decision = defaultDecision } : DecisionEditorContainerProps) => {
  const [model, setProperty] = useForm(decision)  
  const dispatch = useDispatch();

  const handleSave = () => {
    console.log(model);
    dispatch(saveDecisionAndRedirect(model));
  }

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Tag:</label>
          <input type="text" className="form-control" value={model.tag} onChange={(e) => setProperty('tag', e.target.value)} required />
        </div>
        <div className="form-group col-md-6">
          <label>Function Name:</label>
          <input type="text" className="form-control" value={model.functionName} onChange={(e) => setProperty('functionName', e.target.value)} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Weight:</label>
          <input type="number" className="form-control" value={model.weight} onChange={(e) => setProperty('weight', parseFloat(e.target.value))} />
        </div>
        <div className="form-group col-md-6">
          <label>Has Target Dependency:</label>
          <input type="checkbox" className="form-control" checked={model.hasTargetDependency} onChange={(e) => setProperty('hasTargetDependency', e.target.checked)} />
        </div>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" className="form-control" value={model.description} onChange={(e) => setProperty('description', e.target.value)} />
      </div>
      <h2>Condition evaluators!</h2>
      <ConditionEvs
        listConditionsEv={model.conditionEvaluators}
        onChangeList={(newList) => setProperty('conditionEvaluators', newList)}
      />

      <input type="button" className="btn btn-primary-alt btn-lg" value="Save" onClick={handleSave}/>
    </form>
  )
}

export default DecisionEditorContainer;
