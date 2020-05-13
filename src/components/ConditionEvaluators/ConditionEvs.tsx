import React from "react";
import ConditionEv from "./ConditionEv";
import { ReactComponent as UpIcon }  from '../../icons/up.svg';
import { ReactComponent as DownIcon }  from '../../icons/down.svg';
import { ReactComponent as TrashIcon }  from '../../icons/trash.svg';

export interface ConditionEvProps {
  listConditionsEv: Array<string>,
  onChangeList: (conditionEv: Array<string>) => void;
}

const ConditionEvs = ({listConditionsEv, onChangeList} :ConditionEvProps) => {
  
  const onAdd = () => {
    const newListConditionsEv = [...listConditionsEv];
    newListConditionsEv.push('');
    onChangeList(newListConditionsEv);
  }

  const onRemove = (index) => {
    const newListConditionsEv = listConditionsEv.filter((value, i) => i !== index);
    onChangeList(newListConditionsEv);
  }

  const onChangeConditionEv = (index:number, tag:string) => {
    const newListConditionsEv = [...listConditionsEv];
    newListConditionsEv[index] = tag;

    onChangeList(newListConditionsEv);
  }

  const onChangeOrder = (index:number, delta:number) => {
    const newListConditionsEv = [...listConditionsEv];

    const temp = newListConditionsEv[index + delta];
    newListConditionsEv[index + delta] = newListConditionsEv[index];
    newListConditionsEv[index] = temp;

    onChangeList(newListConditionsEv);
  }

  return (
    <div className="">
      <a className="btn btn-primary-alt" href="#" onClick={onAdd}>+ Add</a>
      <hr />
      {
        listConditionsEv.map((value, index) => (
          <div className="row" key={index}>
            <div className="col-6">
              <ConditionEv
                index={index}
                tag={value}
                onChangeValue={onChangeConditionEv}
              />
            </div>
            <div className="col-6">
              <a className={`btn btn-secondary-alt ${index === 0 ? 'disabled' : ''}`} href="#" onClick={() => onChangeOrder(index, -1)}><UpIcon /></a> 

              <a className={`btn btn-secondary-alt ${index >= listConditionsEv.length - 1 ? 'disabled' : ''}`}  href="#" onClick={() => onChangeOrder(index, +1)}><DownIcon /></a> 
              
              <a className="btn btn-danger" href="#" onClick={() => onRemove(index)}><TrashIcon /></a>               
            </div>
          </div>
        ))
      }
      <hr />
    </div>
  );
};

export default ConditionEvs;
