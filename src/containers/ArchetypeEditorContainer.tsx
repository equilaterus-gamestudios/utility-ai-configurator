import { saveArchetypeAndRedirect } from '../actions/archetypesActions';
import { ArchetypeModel } from '../common/models';
import { useForm } from '../hooks/useForm';

import { useDispatch } from 'react-redux';
import ListEditor from '../components/editors/ListEditor';
import ListElementEditor from '../components/editors/ListElementEditor';
import { selectAllDecisionsByTag } from '../selectors/DecisionSelector';

interface ArchetypeEditorContainerProps {
  archetype: ArchetypeModel
}

const defaultArchetype:ArchetypeModel = {
  tag: '',
  description: '',
  decisions: [],
  defaultDecision: ''
};

const ArchetypeEditorContainer = ({ archetype = defaultArchetype } : ArchetypeEditorContainerProps) => {
  const [model, setProperty] = useForm(archetype)  
  const dispatch = useDispatch()

  const handleSave = () => {
    dispatch(saveArchetypeAndRedirect(model));
  }

  return (
    <form>
      <div className="row">
        <div className="col-md-6">
          <label>Tag:</label>
          <input type="text" className="nes-input" value={model.tag} onChange={(e) => setProperty('tag', e.target.value)} />
        </div>
        <div className="col-md-6">
          <label>Default decision:</label>
          <input type="text" className="nes-input" value={model.defaultDecision} onChange={(e) => setProperty('defaultDecision', e.target.value)} />
        </div>
      </div>
      <div>
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

export default ArchetypeEditorContainer;
