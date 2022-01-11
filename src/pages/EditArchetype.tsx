import React from 'react';
import { useSelector } from 'react-redux';
import ArchetypeEditorContainer from '../containers/ArchetypeEditorContainer';
import { selectArchetypeByTag } from '../selectors/ArchetypeSelector';
import withLayout from '../wrappers/withLayout';


const EditArchetype = ({ match }) => {
  const archetype = useSelector(selectArchetypeByTag(match.params.tag))

  return (
    <ArchetypeEditorContainer archetype={archetype} />
  )
}

export default withLayout(EditArchetype, 'Archetype');
