import React from 'react';

import { saveDecisionAndRedirect } from '../actions/decisionActions';
import { DecisionModel } from '../common/models';
import { useForm } from '../hooks/useForm';

import { useDispatch } from 'react-redux';
import ListEditor from '../components/editors/ListEditor';
import ListElementEditor from '../components/editors/ListElementEditor';

import { selectAllConditionEvaluatorsByTag } from '../selectors/ConditionEvSelector';
import { ReactComponent as ConfirmIcon }  from '../icons/confirm.svg';
import Button from '../components/Button';
import Form from '../components/Form';

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
    dispatch(saveDecisionAndRedirect(model));
  }

  return (
    <Form onSubmit={handleSave}>
      <div className="row">
        <div className="col-md-5">
          <label>Tag:</label>
          <input type="text" className="nes-input" value={model.tag} onChange={(e) => setProperty('tag', e.target.value)} required />
        </div>
        <div className="col-md-5">
          <label>Function Name:</label>
          <input type="text" className="nes-input" value={model.functionName} onChange={(e) => setProperty('functionName', e.target.value)} />
        </div>
        <div className="col-md-2">
          <label>Weight:</label>
          <input type="number" className="nes-input" value={model.weight} onChange={(e) => setProperty('weight', parseFloat(e.target.value))} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <label>
            <input type="checkbox" className="nes-checkbox" checked={model.hasTargetDependency} onChange={(e) => {console.log(e);setProperty('hasTargetDependency', e.target.checked)}} />
            <span>Has Target Dependency</span>
          </label>
        </div>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" className="nes-input" value={model.description} onChange={(e) => setProperty('description', e.target.value)} />
      </div>
      <h2>Condition evaluators!</h2>
      <ListEditor
        list={model.conditionEvaluators}
        onChangeList={(newList) => setProperty('conditionEvaluators', newList)}
        editorComponent={(index, tag, onChangeValue) => <ListElementEditor index={index} tag={tag} onChangeValue={onChangeValue} selector={selectAllConditionEvaluatorsByTag}/>}
      />

      <Button type="submit" className="nes-btn is-primary">
        <ConfirmIcon/> Save
      </Button>
    </Form>
  )
}

export default DecisionEditorContainer;
