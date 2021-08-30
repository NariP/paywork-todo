import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
interface I_button {
  name?: string;
  type: 'submit' | 'reset' | 'button';
  method?: Function;
  className?: string;
}
const Button: React.FC<I_button> = ({
  children,
  name,
  type,
  method,
  className,
}) => {
  const clickHandler = (e: MouseEvent) => {
    if (!method) return;
    method();
  };
  return (
    <StyledButton
      type={type}
      name={name}
      className={className}
      onClick={clickHandler}
    >
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button({
  padding: '0.5em',
});
export default Button;
