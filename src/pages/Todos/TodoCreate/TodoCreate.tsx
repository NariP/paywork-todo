import React, { ChangeEvent, FormEvent } from 'react';
import styled from '@emotion/styled';
import { TiPlus } from 'react-icons/ti';
import { Button } from 'components/Button';

interface I_todoCreateProps {
  value: string;
  start: string;
  end: string;
  color: string;
  addTodo: (e: FormEvent<HTMLFormElement>) => void;
  taskHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  startHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  endHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  colorHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TodoCreate: React.FC<I_todoCreateProps> = ({
  children,
  ...todoServices
}) => {
  const {
    value,
    start,
    end,
    color,
    addTodo,
    taskHandler,
    startHandler,
    endHandler,
    colorHandler,
  } = todoServices;
  return (
    <Form onSubmit={addTodo}>
      <Input type="text" name="task" value={value} onChange={taskHandler} />
      <input
        type="time"
        id="start"
        name="start"
        value={start}
        onChange={startHandler}
      />
      <input
        type="time"
        id="end"
        name="end"
        value={end}
        onChange={endHandler}
      />
      <input
        type="color"
        id="color"
        name="color"
        value={color}
        onChange={colorHandler}
      />
      <Button type="submit" name="addButton">
        <TiPlus />
      </Button>
    </Form>
  );
};
const Form = styled.form({
  //
});
const Input = styled.input({
  //
});
export default TodoCreate;
// NOTE : id, (task, start, end, color), done, createdAt
