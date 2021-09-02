import React from 'react';
import { ContentsBox, TodoCreate, TodoBody } from 'pages/Todos';
import useTodoService from './useTodoService';

const TodosBox = () => {
  const todoServices = useTodoService();
  return (
    <ContentsBox title="Plan">
      <TodoCreate {...todoServices} />
      <TodoBody {...todoServices} />
    </ContentsBox>
  );
};

export default TodosBox;
