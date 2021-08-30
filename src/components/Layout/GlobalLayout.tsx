import React from 'react';
import styled from '@emotion/styled';
import GNB from './GNB';
import { useTheme } from '@emotion/react';
interface I_globalLayout {
  setTheme: Function;
}
const GlobalLayout: React.FC<I_globalLayout> = ({ children, setTheme }) => {
  const theme = useTheme();
  return (
    <Wrapper theme={theme}>
      <GNB setTheme={setTheme} />
      <MainSection>{children}</MainSection>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  background: theme.colors.bgColor,
  color: theme.colors.textColor,
}));
const MainSection = styled.main({
  display: 'flex',
  minWidth: 360,
  maxWidth: 700,
  minHeight: '100vh',
  background: 'inherit',
  color: 'inherit',
  margin: '20px auto 32px',
});

export default GlobalLayout;
