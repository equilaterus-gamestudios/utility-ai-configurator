import React from "react";
import ConditionEv from "./ConditionEv";


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
    <div className="border bg-light">
      <a className="btn btn-primary" onClick={onAdd}>+ Add</a>
      <hr/>
      {
        listConditionsEv.map((value, index) => (
          <div className="row" key={index}>
            <div className="col-8">
              <ConditionEv
                index={index}
                tag={value}
                onChangeValue={onChangeConditionEv}
              />
            </div>
            <div className="col-3">
              {index > 0 && 
                <a className="btn btn-default" onClick={() => onChangeOrder(index, -1)}>UP</a> 
              }
              {index < listConditionsEv.length - 1 && 
                <a className="btn btn-default" onClick={() => onChangeOrder(index, +1)}>DOWN</a> 
              }
            </div>
            <div className="col-1">
              <a className="btn btn-danger" onClick={() => onRemove(index)}>-</a>               
            </div>
          </div>
        ))
      }
      
    </div>
  );
};

export default ConditionEvs;
