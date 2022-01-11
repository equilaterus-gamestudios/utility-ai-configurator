import React, { FC, SyntheticEvent } from 'react';

export interface FormProps {
  onSubmit: () => any
  children?: React.ReactNode
  [x: string]: any | undefined
}

const Form: FC<FormProps> = ({ onSubmit, children, ...otherProps }: FormProps) => {
  const onSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form 
      onSubmit={onSubmitHandler}
      {...otherProps}
    >
      { children }
    </form>
  )
}

export default Form;
