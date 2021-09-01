import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { ToggleSlider } from 'components/ToggleSlider';
import { Button } from 'components/Button';
import { useUser } from 'utils/hooks';
import brandLogo from 'assets/IstudyLogo.png';
import sun from 'assets/sun.svg';
import moon from 'assets/crescent-moon.svg';
import { Link } from 'react-router-dom';
import { ROOTS } from '../../routes/paths';

interface I_GnbProps {
  setTheme: Function;
}

const GNB: React.FC<I_GnbProps> = ({ setTheme }) => {
  const theme = useTheme();
  const { userLoading, login, logout, isAuthenticated } = useUser();
  // useEffect(() => {
  //   NOTE : 로그인, 로그아웃 체크 위해 잠시 넣어둠
  //   auth.onAuthStateChanged(user => {
  //     if (user) console.log({ user });
  //     else console.log('no user');
  //   });
  // }, []);
  return (
    <Header theme={theme}>
      <Link to={ROOTS}>
        <Logo src={brandLogo} alt="logo" />
      </Link>
      <LayoutGroup>
        <SliderWrapper>
          <Label htmlFor={TOGGLE_THEME}>
            <Icon src={sun} alt="sun" />
          </Label>
          <ToggleSlider setTheme={setTheme} />
          <Label htmlFor={TOGGLE_THEME}>
            <Icon src={moon} alt="moon" />
          </Label>
        </SliderWrapper>

        <HeaderBtn
          type="button"
          name={!isAuthenticated() ? 'google' : 'logout'}
          method={!isAuthenticated() ? login : logout}
          disabled={userLoading}
        >
          <AiOutlineGoogle />
          {userLoading
            ? '로딩 중...'
            : !isAuthenticated()
            ? '로그인'
            : '로그아웃'}
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
  top: 0,
  padding: '1em 1.2em',
  background: theme.colors.bgColor,
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
