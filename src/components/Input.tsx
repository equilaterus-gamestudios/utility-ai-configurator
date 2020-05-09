import React, { FC } from 'react';

export interface InputProps {
  label: string, 
  defaultValue?: string,
  type?: string,  
  required?: boolean
}

const Input = React.forwardRef(({ label, defaultValue, type = "text", required }:InputProps, ref:React.Ref<HTMLInputElement>) => (
  <>
    <label>{label}</label>
    <input name={label} defaultValue={defaultValue} ref={ref} required={required} type={type} />
  </>
));

export default Input;