import React from 'react';
import styled from '@emotion/styled';
import { BorderBox, TodosBox, TimelineBox } from 'pages/Todos';
import { getFormattedDate } from 'utils';
import useTodoService from './useTodoService';

const Todos = () => {
  const todoServices = useTodoService();
  const { todos } = todoServices;
  const alreadyDone = todos
    .filter(item => item.done && item.start && item.end)
    .map(({ start, end }) => {
      const [startHours, startMinutes] = start.split(':');
      const [endHours, endMinutes] = end.split(':');
      const startTotalMinute = +startHours * 60 + +startMinutes;
      const endTotalMinute = +endHours * 60 + +endMinutes;
      return endTotalMinute - startTotalMinute;
    });
  const total = alreadyDone.reduce((acc, cur) => acc + cur, 0);
  const totalHour = parseInt(String(total / 60), 10);
  const totalMinutes = total % 60;
  const totalString = `${!totalHour ? '' : `${totalHour}시간`} ${
    !totalMinutes ? '' : `${totalMinutes}분`
  }`;
  const today = getFormattedDate(new Date());
  return (
    <Wrapper style={{ width: '100%' }}>
      <Title>투두 리스트</Title>
      <TopLayoutGroup>
        <BorderBox title="Today" data={today} />
        <BorderBox title="D-Day" data="D - 79" />
        <BorderBox title="Total" data={totalString} />
      </TopLayoutGroup>
      <LayoutGroup>
        <TodosBox todoServices={todoServices} />
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
