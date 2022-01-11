import React from 'react';
import ArchetypeListContainer from '../containers/ArchetypeListContainer';
import withLayout from '../wrappers/withLayout';

const Archetypes = () => (
  <ArchetypeListContainer />
)

export default withLayout(Archetypes, 'Archetypes');
