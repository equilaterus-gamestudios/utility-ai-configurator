import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllConditionEvaluatorsByTag } from '../../selectors/ConditionEvSelector';
import { ConditionEvaluatorModel, Dictionary } from '../../common/models';

export interface ConditionEvProps {
  index: number,
  tag: string,
  onChangeValue: (index, string) => void
}

const ConditionEv = ({index, tag, onChangeValue} :ConditionEvProps) => {
  const conditionEvs = useSelector(selectAllConditionEvaluatorsByTag) as Dictionary<ConditionEvaluatorModel>;

  return (
    <select className="form-control" value={tag} onChange={(e) => onChangeValue(index, e.target.value)}>
    {
      <>
        <option>--SELECT CONDITION--</option>
        {Object.keys(conditionEvs).map(key => (
          <option value={key} key={key}>
            {`${key} - ${conditionEvs[key]?.description}`}
          </option>
        ))
        }
      </>
    }
    </select> 
  );
};

export default ConditionEv;
