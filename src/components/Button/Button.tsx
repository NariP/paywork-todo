import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
interface I_button {
  name?: string;
  type: 'submit' | 'reset' | 'button';
  eventMethod?: Function;
  method?: Function;
  className?: string;
}
const Button: React.FC<I_button> = ({
  children,
  name,
  type,
  eventMethod,
  method,
  className,
}) => {
  const clickHandler = (e: MouseEvent) => {
    eventMethod && eventMethod(e);
    method && method();
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
