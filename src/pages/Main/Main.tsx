import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { Background } from 'pages/Main';
import { AiOutlineGoogle } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { useUser } from 'utils/hooks';
import { Link } from 'react-router-dom';
import { ROOTS_DASHBOARD } from '../../routes/paths';

const Main = () => {
  const { userLoading, login, logout, isAuthenticated } = useUser();
  return (
    <Wrapper>
      <WaveGroup>
        <Background />
      </WaveGroup>
      <ContentsGroup>
        <Text>타임테이블과 투두리스트를</Text>
        <Text>한 번에 사용가능한</Text>
        <Text>Istudy</Text>
        {!isAuthenticated() && (
          <LoginBtn
            type="button"
            name={!isAuthenticated() ? 'google' : 'logout'}
            method={!isAuthenticated() ? login : logout}
            disabled={userLoading}
          >
            <AiOutlineGoogle />
            {userLoading ? '로딩 중...' : '로그인하여 시작하기'}
          </LoginBtn>
        )}
        {isAuthenticated() && (
          <Link to={ROOTS_DASHBOARD}>
            <LoginBtn type="button">
              <MdDashboard />
              대시보드로 이동하기
            </LoginBtn>
          </Link>
        )}
      </ContentsGroup>
    </Wrapper>
  );
};
const Wrapper = styled.div({
  width: '100%',
});
const ContentsGroup = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
const Text = styled.div({
  color: '#fcfcfc',
  textShadow: '#333 1px 0 10px',
  fontSize: '3em',
  fontWeight: 'bolder',
  marginBottom: '0.3em',
});
const WaveGroup = styled.div({
  position: 'relative',
});
const LoginBtn = styled(Button)(({ theme }) => ({
  display: 'flex',
  background: theme.colors.bgColor,
  color: theme.colors.textColor,
  borderRadius: 10,
  border: `1px solid ${theme.colors.normalAlpha}`,
  boxShadow: `0 3px 5px ${theme.colors.normalAlpha}`,
  fontSize: '1.5em',
  ':active': {
    boxShadow: `inset 0 3px 5px ${theme.colors.normalAlpha}`,
  },
  svg: {
    color: theme.colors.primary,
    marginRight: '0.2em',
  },
}));
export default Main;
