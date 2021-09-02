import React, { FormEvent } from 'react';
import { I_todo } from '../useTodoService';
import styled from '@emotion/styled';
import { Button } from 'components/Button';

interface I_todoEditProps {
  todoServices: any;
  toggleModal: () => void;
  idx: number;
  todo: I_todo;
  reset: Function;
}
const TodoEdit: React.FC<I_todoEditProps> = ({
  todoServices,
  toggleModal,
  idx,
  todo,
  reset,
}) => {
  const {
    todos,
    setTodos,
    taskHandler,
    startHandler,
    endHandler,
    colorHandler,
    value,
    start,
    end,
    color,
  } = todoServices;

  const updateTodos = (updateData: I_todo) => {
    const newTodos: I_todo[] = [...todos];
    newTodos[idx] = updateData;
    setTodos(newTodos);
  };
  const clickHandler = (e: FormEvent) => {
    e.preventDefault();
    const modifiedTodo = {
      ...todo,
      task: value,
      start,
      end,
      color,
    };
    updateTodos(modifiedTodo);
    toggleModal();
    reset();
  };

  return (
    <Wrapper onSubmit={clickHandler}>
      <Input
        type="text"
        name="task"
        value={value}
        placeholder={todo.task}
        onChange={taskHandler}
      />
      <input type="time" name="start" value={start} onChange={startHandler} />
      <input type="time" name="end" value={end} onChange={endHandler} />
      <input type="color" name="color" value={color} onChange={colorHandler} />
      <Button type="submit" name="editButton">
        수정하기
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.form({
  //
});
const Input = styled.input({
  //
});
export default TodoEdit;
