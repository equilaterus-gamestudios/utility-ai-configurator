import React from 'react';
import { useForm } from "react-hook-form";
import Input from '../Input';
import { ParameterModel } from '../../common/models';

const Parameter = ({}) => {
  const { register, handleSubmit } = useForm<ParameterModel>();
  const onSubmit = (data:ParameterModel) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input defaultValue="..." label="First Name" ref={register} required />
      <input type="submit" />
    </form>
  );
};

export default Parameter;