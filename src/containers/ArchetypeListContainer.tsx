import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectArchetypeTags, selectArchetypeByTag } from '../selectors/ArchetypeSelector';
import Table from '../components/Table';
import { ArchetypeModel } from '../common/models';
import { removeArchetype } from '../actions/archetypesActions';
import { sortTags } from '../common/utility';

interface PropTypes {
  archetypeTags: Array<string>,
  removeArchetype: (tag: string) => void
}

const ArchetypeListContainer = ({ archetypeTags, removeArchetype } : PropTypes) => {    
  if (!archetypeTags || !archetypeTags.length) {
    return (
      <>
        <div>There is not any decision set</div>
        <Link to="/EditArchetype" className="nes-btn is-primary main-btn">Add new archetype</Link>
      </>
    );
  }

  const renderActions = (archetype :  ArchetypeModel) => (
    <>
      <Link to={`/EditArchetype/${archetype.tag}`}  className="nes-btn is-success">E</Link>
      <button className="nes-btn is-error" onClick={() => removeArchetype(archetype.tag)}>X</button>
    </>
  )

  return (
    <>
      <Table tags={sortTags(archetypeTags)} properties={['tag', 'description', 'functionName']} actions={renderActions} selector={selectArchetypeByTag} />
      <Link to="/EditArchetype" className="nes-btn is-primary main-btn">Add new archetype</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  archetypeTags: selectArchetypeTags(state)
})

export default connect(mapStateToProps, { removeArchetype })(ArchetypeListContainer)
