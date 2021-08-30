import React, { useContext } from 'react';
import styled from 'styled-components';
interface I_globalLayout {
  setTheme: Function;
}
const GlobalLayout: React.FC<I_globalLayout> = ({ children, setTheme }) => {
  return (
    <Wrapper>
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
  background: 'inherit',
  color: 'inherit',
  margin: '20px auto 32px',
});

export default GlobalLayout;
