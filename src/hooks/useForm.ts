import { useState } from 'react';

export const useForm = <T>(defaultModel: T) : [T, (arg0: string, arg1: any) => void] => {
  const [model, setModel] = useState(defaultModel);

  const handleChange = (property: string, newValue: any) => {
    setModel({
      ...model,
      [property]: newValue
    });
  }

  return [model, handleChange];
}
