import { useState } from 'react';

export const useForm = <T>(defaultModel: T) : [T, (string, any) => void] => {
  const [model, setModel] = useState(defaultModel);

  const handleChange = (property, newValue) => {
    setModel({
      ...model,
      [property]: newValue
    });
  }

  return [model, handleChange];
}
