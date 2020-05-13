import React from 'react';
import { useSelector } from 'react-redux';

export interface ListElementEditorProps {
  index: number,
  tag: string,
  onChangeValue: (index, string) => void,
  selector: (any) => any
}

const ListElementEditor = ({index, tag, onChangeValue, selector} : ListElementEditorProps) => {
  const options = useSelector(selector);

  return (
    <select className="form-control" value={tag} onChange={(e) => onChangeValue(index, e.target.value)}>
    {
      <>
        <option>--SELECT AN OPTION--</option>
        {Object.keys(options).map(key => (
          <option value={key} key={key}>
            {`${key} - ${options[key]?.description}`}
          </option>
        ))
        }
      </>
    }
    </select> 
  );
};

export default ListElementEditor;
