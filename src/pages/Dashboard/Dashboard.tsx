import React from 'react';
import styled from '@emotion/styled';
import { BsPlusSquare } from 'react-icons/bs';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';
import { PATH_DASHBOARD } from 'routes/paths';

const Dashboard = () => {
  return (
    <Wrapper>
      <Title>대시보드</Title>
      <ButtonGroup>
        <Link to={PATH_DASHBOARD.todos}>
          <PlusBtn type="button" name="newTodoPage">
            <BsPlusSquare />
          </PlusBtn>
        </Link>
      </ButtonGroup>
    </Wrapper>
  );
};
// NOTE: 나중에 공용으로 분리 ( wrapper, title )
const Wrapper = styled.div({
  padding: '2em 3em',
  width: '100%',
});
const Title = styled.div({
  fontSize: '1.3em',
  fontWeight: 'bold',
  marginBottom: '1em',
});

const ButtonGroup = styled.div({
  // marginTop: '1em',
});
const PlusBtn = styled(Button)(({ theme }) => ({
  color: theme.colors.secondaryText,
  svg: {
    fontSize: '13em',
  },
  ':hover': {
    transform: 'scale(1.1)',
    transition: 'transform 150ms ease',
  },
}));
export default Dashboard;
