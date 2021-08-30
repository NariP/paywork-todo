import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { ToggleSlider } from 'components/ToggleSlider';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Button } from 'components/Button';

interface I_GnbProps {
  setTheme: Function;
}
const GNB: React.FC<I_GnbProps> = ({ setTheme }) => {
  const theme = useTheme();
  return (
    <Header theme={theme}>
      <Logo src="assets/IstudyLogo.png" alt="logo" />
      <LayoutGroup>
        <SliderWrapper>
          <Label htmlFor={TOGGLE_THEME}>
            <Icon src="assets/sun.svg" alt="sun" style={{ width: '1em' }} />
          </Label>
          <ToggleSlider setTheme={setTheme} />
          <Label htmlFor={TOGGLE_THEME}>
            <Icon
              src="assets/crescent-moon.svg"
              alt="moon"
              style={{ width: '1em' }}
            />
          </Label>
        </SliderWrapper>
        <LoginBtn
          type="button"
          name="login"
          method={() => console.log('login!')}
        >
          로그인
        </LoginBtn>
      </LayoutGroup>
    </Header>
  );
};
const Header = styled.header(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.normalAlpha}`,
  boxShadow: `0 3px 5px ${theme.colors.normalAlpha}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  position: 'sticky',
  padding: '1em 3em',
}));

const Logo = styled.img({
  width: '2em',
  height: '2em',
});

const LayoutGroup = styled.div({
  display: 'flex',
});

const SliderWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '1em',
});
const Label = styled.label({
  cursor: 'pointer',
  color: '#fcba03',
  display: 'flex',
});
const Icon = styled.img({
  width: '1em',
});
const LoginBtn = styled(Button)(({ theme }) => ({
  color: theme.colors.textColor,
  borderRadius: 10,
  border: `1px solid ${theme.colors.normalAlpha}`,
  boxShadow: `0 3px 5px ${theme.colors.normalAlpha}`,
  ':active': {
    boxShadow: `inset 0 3px 5px ${theme.colors.normalAlpha}`,
  },
}));

const TOGGLE_THEME = 'toggleTheme';
export default GNB;
