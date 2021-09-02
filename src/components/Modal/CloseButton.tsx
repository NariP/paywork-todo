import React from 'react';
import { CgClose } from 'react-icons/cg';
import { Button } from 'components/Button';
import styled from '@emotion/styled';

interface I_closeButtonProps {
  toggleModal: Function;
  method?: Function;
}
const CloseButton: React.FC<I_closeButtonProps> = ({ toggleModal, method }) => {
  const clickHandler = () => {
    toggleModal();
    method && method();
  };
  return (
    <Close type="button" method={clickHandler}>
      <CgClose />
    </Close>
  );
};
const Close = styled(Button)(({ theme }) => ({
  color: theme.colors.textColor,
}));
export default CloseButton;
