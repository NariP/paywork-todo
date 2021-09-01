import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const PageLoading = () => {
  return (
    <Ling>
      <SmallCircle />
    </Ling>
  );
};

const circle = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const animate = keyframes({
  '0%': {
    transform: 'rotate(45deg)',
  },
  '100%': {
    transform: 'rotate(405deg)',
  },
});

const Ling = styled.div(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 150,
  height: 150,
  background: 'transparent',
  border: `3px solid ${theme.colors.bgColor}`,
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: 150,
  fontSize: 20,
  color: theme.colors.secondary,
  letterSpacing: 4,
  textTransform: 'uppercase',
  textShadow: '0 0 10px #fff000',
  boxShadow: '0 0 20px rgba(0,0,0, .5)',
  ':before': {
    content: "''",
    position: 'absolute',
    top: -3,
    left: -3,
    width: '100%',
    height: '100%',
    border: '3px solid transparent',
    borderTop: `3px solid ${theme.colors.secondary}`,
    borderRight: `3px solid ${theme.colors.secondary}`,
    borderRadius: '50%',
    animation: `${circle} 2s linear infinite`,
  },
}));

const SmallCircle = styled.span(({ theme }) => ({
  display: 'block',
  position: 'absolute',
  top: 'calc(50% - 2px)',
  left: '50%',
  width: '50%',
  height: 4,
  transformOrigin: 'left',
  animation: `${animate} 2s linear infinite`,
  ':before': {
    content: "''",
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: '50%',
    background: '#fff',
    top: -6,
    right: -8,
    boxShadow: `0 0 20px ${theme.colors.secondary}`,
  },
}));

export default PageLoading;
