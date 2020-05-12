import React from 'react';

import { saveDecisionSetAndRedirect } from '../actions/decisionSetActions';
import { DecisionSetModel } from '../common/models';
import { useForm } from '../hooks/useForm';

import { useDispatch } from 'react-redux';

interface DecisionSetEditorContainerProps {
  decisionSet: DecisionSetModel
}

const defaultDecisionSet:DecisionSetModel = {
  tag: '',
  description: '',
  decisions: [],
  defaultDecision: ''
};

const DecisionSetEditorContainer = ({ decisionSet = defaultDecisionSet } : DecisionSetEditorContainerProps) => {
  const [model, setProperty] = useForm(decisionSet)  
  const dispatch = useDispatch()

  const handleSave = () => {
    dispatch(saveDecisionSetAndRedirect(model));
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
          <input type="text" className="form-control" value={model.defaultDecision} onChange={(e) => setProperty('defaultDecision', e.target.value)} />
        </div>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" className="form-control" value={model.description} onChange={(e) => setProperty('description', e.target.value)} />
      </div>
      <h2>Decisions</h2>
      <input type="button" className="btn btn-primary" value="Save" onClick={handleSave}/>
    </form>
  )
}

export default DecisionSetEditorContainer;
