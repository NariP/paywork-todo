import React from 'react';
import styled from '@emotion/styled';
import Todo from './Todo';
import { I_todo } from 'pages/Todos/useTodoService';

interface I_todoBodyProps {
  todos: I_todo[];
}
const TodoBody: React.FC<I_todoBodyProps> = ({ ...todoServices }) => {
  const { todos } = todoServices;

  return (
    <Wrapper>
      {todos.map((item: I_todo, idx: number) => {
        return (
          <Todo key={idx} idx={idx} item={item} todoServices={todoServices} />
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div(({ theme }) => ({
  background: theme.colors.secondaryBg,
  borderTop: `2px solid ${theme.colors.secondary}`,
  borderBottom: `2px solid ${theme.colors.secondary}`,
  padding: '1em 0.5em',
  '& > div + div': {
    marginTop: '0.5em',
  },
}));
export default TodoBody;
