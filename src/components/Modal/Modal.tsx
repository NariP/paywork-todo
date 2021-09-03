import React, { useRef, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { Portals } from 'components/Portals';

interface IModalProps {
  open: boolean;
  toggleModal: Function;
  method?: Function;
}
const Modal: React.FC<IModalProps> = ({
  children,
  toggleModal,
  open,
  method,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== modalRef.current) return;
    toggleModal();
    if (!method) return;
    method();
  };
  return (
    <Portals>
      <StyledModal ref={modalRef} open={open} onClick={clickHandler}>
        {children}
      </StyledModal>
    </Portals>
  );
};
const StyledModal = styled.div<{ open: boolean }>(({ open }) => ({
  display: open ? 'flex' : 'none',
  background: 'rgba(200, 200, 200, 0.6)',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,
}));

export default Modal;
