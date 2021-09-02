import React from 'react';
import styled from '@emotion/styled';
import { BorderBox, TodosBox, TimelineBox } from 'pages/Todos';
import { getFormattedDate } from 'utils';

const Todos = () => {
  const today = getFormattedDate(new Date());
  return (
    <Wrapper style={{ width: '100%' }}>
      <Title>투두 리스트</Title>
      <TopLayoutGroup>
        <BorderBox title="Today" data={today} />
        <BorderBox title="D-Day" data="D - 79" />
        <BorderBox title="Total" data="6시간 10분" />
      </TopLayoutGroup>
      <LayoutGroup>
        <TodosBox />
        <TimelineBox />
      </LayoutGroup>
    </Wrapper>
  );
};
// NOTE: 나중에 공용으로 분리 ( wrapper, title )
const Wrapper = styled.div({
  padding: '2em 3em',
  width: '100%',
  '@media only screen and (max-width: 768px)': {
    padding: '2em',
  },
});
const Title = styled.div({
  fontSize: '1.3em',
  fontWeight: 'bold',
  marginBottom: '1em',
});
const TopLayoutGroup = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  '@media only screen and (max-width: 768px)': {
    width: '90%',
  },
});
const LayoutGroup = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  '@media only screen and (max-width: 768px)': {
    flexDirection: 'column',
    '& > div': {
      width: '90%',
    },
    '& > div + div': {
      marginTop: '1em',
    },
  },
});
export default Todos;
