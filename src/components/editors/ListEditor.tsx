import React from "react";
import { ReactComponent as UpIcon }  from '../../icons/up.svg';
import { ReactComponent as DownIcon }  from '../../icons/down.svg';
import { ReactComponent as TrashIcon }  from '../../icons/trash.svg';
import Button from "../Button";

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
      <Button className="nes-btn is-success" onClick={onAdd}>
        + Add
      </Button>
      <hr />
      {
        list.map((value, index) => (
          <div className="row" key={index}>
            <div className="col-9">
              { editorComponent(index, value, onChangeConditionEv) }
            </div>
            <div className="col-3">
              <Button className={`nes-btn ${index === 0 ? 'is-disabled' : ''}`} href="#" onClick={() => onChangeOrder(index, -1)}><UpIcon /></Button> 

              <Button className={`nes-btn ${index >= list.length - 1 ? 'is-disabled' : ''}`}  href="#" onClick={() => onChangeOrder(index, +1)}><DownIcon /></Button> 
              
              <Button className="nes-btn is-error" href="#" onClick={() => onRemove(index)}><i className="nes-icon close is-small" /></Button>               
            </div>
          </div>
        ))
      }
      <hr />
    </div>
  );
};

export default ListEditor;
