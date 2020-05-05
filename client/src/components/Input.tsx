import React, { FC } from 'react';

export interface InputProps {
  label: string, 
  defaultValue?: string,
  required?: boolean
}

const Input = React.forwardRef(({ label, defaultValue, required }:InputProps, ref:React.Ref<HTMLInputElement>) => (
  <>
    <label>{label}</label>
    <input name={label} defaultValue={defaultValue} ref={ref} required={required} />
  </>
));

export default Input;