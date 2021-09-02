import React, { ChangeEvent, FormEvent } from 'react';
import styled from '@emotion/styled';
import { TiPlus } from 'react-icons/ti';
import { Button } from 'components/Button';
import { ally } from 'styles/CommonStyle';

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
    <Form onSubmit={addTodo} autoComplete="off">
      <FirstRowLayout>
        <TaskInput
          type="text"
          name="task"
          value={value}
          onChange={taskHandler}
          placeholder="할 일을 1자 이상 적어주세요 :)"
        />
        <ColorChip
          type="color"
          id="color"
          name="color"
          value={color}
          onChange={colorHandler}
        />
        <ColorLabel htmlFor="color" color={color} />
      </FirstRowLayout>
      <TimeLayoutGroup>
        <TimeInput
          type="time"
          id="start"
          name="start"
          value={start}
          onChange={startHandler}
        />
        <TimeInput
          type="time"
          id="end"
          name="end"
          value={end}
          onChange={endHandler}
        />
        <AddBtn type="submit" name="addButton">
          <TiPlus />
        </AddBtn>
      </TimeLayoutGroup>
    </Form>
  );
};
const Form = styled.form(({ theme }) => ({
  padding: '1em 0.5em',
  background: theme.colors.secondaryBg,
}));
const FirstRowLayout = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.5em',
});
const Input = styled.input(({ theme }) => ({
  background: theme.colors.bgColor,
  color: theme.colors.textColor,
  borderRadius: 10,
  border: `1px solid ${theme.colors.normalAlpha}`,
}));
const TaskInput = styled(Input)({
  width: '88%',
  padding: '0.5em 1em',
});
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
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  'input + input': {
    marginLeft: '0.5em',
  },
  'input + button': {
    marginLeft: '0.5em',
  },
});
const TimeInput = styled(Input)(({ theme }) => ({
  padding: '0.2em 1em',
  width: '45%',
}));
const AddBtn = styled(Button)(({ theme }) => ({
  padding: '0.5em 1em',
  background: theme.colors.bgColor,
  border: `1px solid ${theme.colors.normalAlpha}`,
  borderRadius: 10,
  svg: {
    color: theme.colors.textColor,
  },
}));
export default TodoCreate;
// NOTE : id, (task, start, end, color), done, createdAt
