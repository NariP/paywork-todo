import React from 'react';
import { ContentsBox, TodoCreate, TodoBody } from 'pages/Todos';

const TodosBox: React.FC<{ todoServices: any }> = ({ todoServices }) => {
  return (
    <ContentsBox title="Plan">
      <TodoCreate {...todoServices} />
      <TodoBody {...todoServices} />
    </ContentsBox>
  );
};

export default TodosBox;
