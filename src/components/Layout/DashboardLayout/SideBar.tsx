import React from 'react';
import styled from '@emotion/styled';
import { BiArrowBack } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { useTheme } from '@emotion/react';
import { Link, useHistory } from 'react-router-dom';
import { PATH_DASHBOARD, ROOTS_DASHBOARD } from 'routes/paths';

const SideBar = () => {
  const theme = useTheme();
  const history = useHistory();
  const pathName = history.location.pathname;
  const isTodosPage = pathName === PATH_DASHBOARD.todos;
  return (
    <Wrapper theme={theme}>
      <ul>
        <BackBtn isTodosPage={isTodosPage}>
          <Link to={ROOTS_DASHBOARD}>
            <Icon>
              <BiArrowBack />
            </Icon>
          </Link>
        </BackBtn>

        <DashboardBtn pathName={pathName}>
          <Link to={ROOTS_DASHBOARD}>
            <Icon>
              <MdDashboard />
            </Icon>
          </Link>
        </DashboardBtn>
        <StatisticBtn pathName={pathName}>
          <Link to={PATH_DASHBOARD.statistics}>
            <Icon>
              <AiOutlineAreaChart />
            </Icon>
          </Link>
        </StatisticBtn>
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.nav(({ theme }) => ({
  background: theme.colors.bgColor,
  width: '3em',
  borderRight: `1px solid ${theme.colors.normalAlpha}`,
  boxShadow: `3px 5px 5px ${theme.colors.normalAlpha}`,
}));
const Icon = styled.button(({ theme }) => ({
  display: 'block',
  fontSize: '1em',
  color: theme.colors.textColor,
  padding: '1em',
  ':hover': {
    background: theme.colors.secondary,
  },
  ':active': {
    boxShadow: `inset 3px 3px 3px ${theme.colors.normalAlpha}`,
  },
}));
const BackBtn = styled.li<{ isTodosPage: boolean }>(({ isTodosPage }) => ({
  display: isTodosPage ? 'block' : 'none',
}));

const DashboardBtn = styled.li<{ pathName: string }>(({ pathName, theme }) => ({
  background: pathName === ROOTS_DASHBOARD ? theme.colors.secondary : 'none',
}));
const StatisticBtn = styled.li<{ pathName: string }>(({ pathName, theme }) => ({
  background:
    pathName === PATH_DASHBOARD.statistics ? theme.colors.secondary : 'none',
}));
export default SideBar;
