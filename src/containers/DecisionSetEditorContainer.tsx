import React from 'react';

import { saveDecisionSetAndRedirect } from '../actions/decisionSetActions';
import { DecisionSetModel } from '../common/models';
import { useForm } from '../hooks/useForm';

import { useDispatch } from 'react-redux';
import ListEditor from '../components/editors/ListEditor';
import ListElementEditor from '../components/editors/ListElementEditor';
import { selectAllDecisionsByTag } from '../selectors/DecisionSelector';

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
          <input type="text" className="nes-input" value={model.tag} onChange={(e) => setProperty('tag', e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>Default decision:</label>
          <input type="text" className="nes-input" value={model.defaultDecision} onChange={(e) => setProperty('defaultDecision', e.target.value)} />
        </div>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" className="nes-input" value={model.description} onChange={(e) => setProperty('description', e.target.value)} />
      </div>
      <h2>Decisions</h2>
      <ListEditor
        list={model.decisions}
        onChangeList={(newList) => setProperty('decisions', newList)}
        editorComponent={(index, tag, onChangeValue) => <ListElementEditor index={index} tag={tag} onChangeValue={onChangeValue} selector={selectAllDecisionsByTag}/>}
      />
      <input type="button" className="nes-btn is-primary" value="Save" onClick={handleSave}/>
    </form>
  )
}

export default DecisionSetEditorContainer;
