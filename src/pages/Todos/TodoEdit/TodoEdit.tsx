import React, { FormEvent } from 'react';
import { I_todo } from '../useTodoService';
import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { ally } from 'styles/CommonStyle';

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
    const startVal = start || todo.start;
    const endVal = end || todo.end;
    if (startVal && endVal) {
      const [startHour, startMinutes] = startVal.split(':');
      const [endHour, endMinutes] = endVal.split(':');

      if (+startHour > +endHour) {
        alert('시작 시간이 끝나는 시간과 같거나 이후일 수는 없습니다');
        return;
      }
      if (+startHour === +endHour && +startMinutes >= +endMinutes) {
        alert('시작 시간이 끝나는 시간과 같거나 이후일 수는 없습니다');
        return;
      }
    }
    const modifiedTodo = {
      ...todo,
      task: value || todo.task,
      start: start || todo.start,
      end: end || todo.end,
      color: color === '#73C2FB' ? todo.color : color,
    };
    updateTodos(modifiedTodo);
    toggleModal();
    reset();
  };

  return (
    <Wrapper onSubmit={clickHandler}>
      <TaskArea
        name="task"
        value={value || todo.task}
        onChange={taskHandler}
        rows={3}
      />
      <TimeLayoutGroup>
        <Time
          type="time"
          name="start"
          value={start || todo.start}
          onChange={startHandler}
        />
        <Time
          type="time"
          name="end"
          value={end || todo.end}
          onChange={endHandler}
        />
        <ColorChip
          id={`color_${idx}`}
          type="color"
          name="color"
          value={color}
          onChange={colorHandler}
        />
        <ColorLabel
          htmlFor={`color_${idx}`}
          color={color === '#73C2FB' ? todo.color : color}
        />
      </TimeLayoutGroup>
      <EditBtn type="submit" name="editButton">
        수정하기
      </EditBtn>
    </Wrapper>
  );
};
const Wrapper = styled.form({
  padding: '1em 1em 0.8em 1em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
const TaskArea = styled.textarea(({ theme }) => ({
  background: theme.colors.secondaryBg,
  color: theme.colors.textColor,
  padding: '0.5em 1em',
  resize: 'none',
  width: '100%',
  borderRadius: 5,
  border: `1px solid ${theme.colors.normalAlpha}`,
}));
const Input = styled.input(({ theme }) => ({
  background: theme.colors.secondaryBg,
  color: theme.colors.textColor,
  borderRadius: 5,
  border: `1px solid ${theme.colors.normalAlpha}`,
}));
const ColorChip = styled(Input)({
  ...ally,
});

const ColorLabel = styled.label<{ color: string }>(({ theme, color }) => ({
  display: 'inline-block',
  width: '10%',
  height: '1.6em',
  background: color || '#73C2FB',
  borderRadius: 10,
  border: `1px solid ${theme.colors.normalAlpha}`,
  cursor: 'pointer',
}));
const TimeLayoutGroup = styled.div({
  margin: '0.8em 0',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  'input + input': {
    marginLeft: '0.5em',
  },
  'input + label': {
    marginLeft: '0.5em',
  },
});
const Time = styled(Input)({
  width: '45%',
});
const EditBtn = styled(Button)(({ theme }) => ({
  borderRadius: 5,
  border: `1px solid ${theme.colors.normalAlpha}`,
  width: '100%',
  background: theme.colors.secondaryBg,
  color: theme.colors.textColor,
}));
export default TodoEdit;
