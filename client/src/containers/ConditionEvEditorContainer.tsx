import React from 'react';
import CurveEditor from '../components/editors/Curve';

import { ConditionEvaluatorModel, Curve } from '../common/models';
import { useForm } from '../hooks/useForm';

interface ConditionEvEditorContainerProps {
  conditionEvaluator: ConditionEvaluatorModel,
}

const defaultConditionEvaluator:ConditionEvaluatorModel = {
  tag: '',
  functionName: '',
  parameters: [],
  curve: {
    curveType: 'POLINOMIAL',
    exponent: 1,
    slope: 1,
    xShift: 1,
    yShift: 1
  },
  description: ''
};

const ConditionEvEditorContainer = ({ conditionEvaluator = defaultConditionEvaluator } : ConditionEvEditorContainerProps) => {
  const [model, setProperty] = useForm(conditionEvaluator)
  return (
    null
  )
}

export default ConditionEvEditorContainer;
