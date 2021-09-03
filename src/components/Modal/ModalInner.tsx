import React from 'react';
import styled from '@emotion/styled';

interface I_modalInnerProps {
  title?: string;
  closeButton?: React.ReactNode;
}
const ModalInner: React.FC<I_modalInnerProps> = ({
  children,
  title,
  closeButton,
}) => {
  return (
    <Wrapper>
      <Header title={title}>
        <Title>{title}</Title>
        {closeButton}
      </Header>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  borderRadius: 20,
  padding: '1em',
  color: 'inherit',
  minWidth: 400,
  maxWidth: 600,
  minHeight: 200,
  background: theme.colors.bgColor,
  borderBottom: `1px solid ${theme.colors.normalAlpha}`,
  boxShadow: `0 3px 5px ${theme.colors.normalAlpha}`,
  zIndex: 200,
}));
const Header = styled.div(({ title, theme }) => ({
  paddingBottom: '0.5em',
  display: 'flex',
}));

const Title = styled.div(({ theme }) => ({
  display: 'block',
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  borderBottom: `1px solid ${theme.colors.normalAlpha}`,
}));

export default ModalInner;
