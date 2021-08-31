import React, { MouseEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import styled from '@emotion/styled';
import { auth, googleProvider } from '../../fBase';
import { signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useTheme } from '@emotion/react';
import { ToggleSlider } from 'components/ToggleSlider';
import { Button } from 'components/Button';

interface I_GnbProps {
  setTheme: Function;
}

const GNB: React.FC<I_GnbProps> = ({ setTheme }) => {
  const theme = useTheme();
  const history = useHistory();
  const googleClickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const credential: any = GoogleAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
      const user = res.user;
      console.log({ user });
    } catch (error) {
      console.error(error);
    }
  };
  const googleLogOut = async () => {
    try {
      await signOut(auth);
      console.info('로그아웃 성공!');
      history.replace('/');
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // NOTE : 로그인, 로그아웃 체크 위해 잠시 넣어둠
    auth.onAuthStateChanged(user => {
      if (user) console.log({ user });
      else console.log('no user');
    });
  });
  return (
    <Header theme={theme}>
      <Logo src="assets/IstudyLogo.png" alt="logo" />
      <LayoutGroup>
        <SliderWrapper>
          <Label htmlFor={TOGGLE_THEME}>
            <Icon src="assets/sun.svg" alt="sun" />
          </Label>
          <ToggleSlider setTheme={setTheme} />
          <Label htmlFor={TOGGLE_THEME}>
            <Icon src="assets/crescent-moon.svg" alt="moon" />
          </Label>
        </SliderWrapper>
        <HeaderBtn type="button" name="google" method={googleClickHandler}>
          <AiOutlineGoogle />
          로그인
        </HeaderBtn>
        <HeaderBtn type="button" name="logout" method={googleLogOut}>
          <AiOutlineGoogle />
          로그아웃
        </HeaderBtn>
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
const HeaderBtn = styled(Button)(({ theme }) => ({
  display: 'flex',
  color: theme.colors.textColor,
  borderRadius: 10,
  border: `1px solid ${theme.colors.normalAlpha}`,
  boxShadow: `0 3px 5px ${theme.colors.normalAlpha}`,
  ':active': {
    boxShadow: `inset 0 3px 5px ${theme.colors.normalAlpha}`,
  },
  svg: {
    color: theme.colors.primary,
    marginRight: '0.2em',
  },
}));

const TOGGLE_THEME = 'toggleTheme';
export default GNB;
