import React, { FC, SyntheticEvent, memo } from 'react';

export interface ButtonProps {
  onClick?: () => any
  children?: React.ReactNode
  [x: string]: any | undefined
}

const Button: FC<ButtonProps> = ({ onClick, children, ...otherProps }: ButtonProps) => {
  const onClickHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    onClick();
  }

  if (onClick)
  {
    return (
      <button 
        onClick={onClickHandler}
        {...otherProps}
      >
        { children }
      </button>
    )
  }
  else 
  {
    return (
      <button
        {...otherProps}
      >
        { children }
      </button>
    )
  }
 
}

export default memo(Button);
