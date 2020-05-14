import React from "react";
import { ReactComponent as UpIcon }  from '../../icons/up.svg';
import { ReactComponent as DownIcon }  from '../../icons/down.svg';
import { ReactComponent as TrashIcon }  from '../../icons/trash.svg';

export interface ListEditorProps {
  list: Array<string>,
  onChangeList: (list: Array<string>) => void;
  editorComponent: (index: number, tag: string, onChangeValue: (index: number, tag: string) => void) => any
}

const ListEditor = ({list, onChangeList, editorComponent} :ListEditorProps) => {
  
  const onAdd = () => {
    const newList = [...list];
    newList.push('');
    onChangeList(newList);
  }

  const onRemove = (index) => {
    const newList = list.filter((value, i) => i !== index);
    onChangeList(newList);
  }

  const onChangeConditionEv = (index:number, tag:string) => {
    const newList = [...list];
    newList[index] = tag;

    onChangeList(newList);
  }

  const onChangeOrder = (index:number, delta:number) => {
    const newList = [...list];

    const temp = newList[index + delta];
    newList[index + delta] = newList[index];
    newList[index] = temp;

    onChangeList(newList);
  }

  return (
    <div className="">
      <a className="btn btn-primary-alt" href="#" onClick={onAdd}>+ Add</a>
      <hr />
      {
        list.map((value, index) => (
          <div className="row" key={index}>
            <div className="col-6">
              { editorComponent(index, value, onChangeConditionEv) }
            </div>
            <div className="col-6">
              <a className={`btn btn-secondary-alt ${index === 0 ? 'disabled' : ''}`} href="#" onClick={() => onChangeOrder(index, -1)}><UpIcon /></a> 

              <a className={`btn btn-secondary-alt ${index >= list.length - 1 ? 'disabled' : ''}`}  href="#" onClick={() => onChangeOrder(index, +1)}><DownIcon /></a> 
              
              <a className="btn btn-danger" href="#" onClick={() => onRemove(index)}><TrashIcon /></a>               
            </div>
          </div>
        ))
      }
      <hr />
    </div>
  );
};

export default ListEditor;
