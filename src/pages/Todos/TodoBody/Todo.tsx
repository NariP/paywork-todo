import React from 'react';
import styled from '@emotion/styled';
import { BiCircle, BiCheckCircle, BiTrash } from 'react-icons/bi';
import { I_todo } from 'pages/Todos/useTodoService';
import { Button } from 'components/Button';
import {
  CloseButton,
  Modal,
  ModalInner,
  useModal,
} from '../../../components/Modal';
import { TodoEdit } from '../TodoEdit';

interface I_todoProps {
  item: I_todo;
  idx: number;
  todoServices: any;
}
const Todo: React.FC<I_todoProps> = ({ item, idx, todoServices }) => {
  const { task, start, end, color, done, id } = item;
  const { setTodos, todos, reset } = todoServices;
  const { open, toggleModal } = useModal();

  const changeDone = () => {
    // 완료 상태를 변경하는 함수
    const newTodo: I_todo = { ...item, done: !done };
    const newTodos: I_todo[] = [...todos];
    newTodos[idx] = newTodo;
    setTodos(newTodos);
  };
  const removeItem = () => {
    // 투두 삭제
    setTodos((prev: I_todo[]) => prev.filter((ele: I_todo) => ele.id !== id));
  };
  return (
    <Wrapper>
      <Modal open={open} toggleModal={toggleModal} method={reset}>
        <ModalInner
          closeButton={<CloseButton toggleModal={toggleModal} method={reset} />}
        >
          <TodoEdit
            todoServices={todoServices}
            toggleModal={toggleModal}
            idx={idx}
            todo={item}
            reset={reset}
          />
        </ModalInner>
      </Modal>
      <CheckButton type="button" done={done} method={changeDone}>
        {done ? <BiCheckCircle /> : <BiCircle />}
      </CheckButton>
      <Task onClick={toggleModal}>{task}</Task>
      <Time>{start}</Time>
      <Time>{end}</Time>
      <ColorChip color={color} />
      <RemoveBtn type="button" method={removeItem}>
        <BiTrash />
      </RemoveBtn>
    </Wrapper>
  );
};
const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  background: theme.colors.bgColor,
  justifyItems: 'space-between',
  alignItems: 'center',
  padding: '0.8em',
  border: `1px solid ${theme.colors.normalAlpha}`,
  borderRadius: 10,
  cursor: 'pointer',
}));
const CheckButton = styled(Button)<{ done: boolean }>(({ theme, done }) => ({
  color: done ? theme.colors.secondaryText : theme.colors.textColor,
  padding: 0,
  marginRight: '0.5em',
}));
const Time = styled.div(({ theme }) => ({
  width: '10%',
  fontSize: '0.5em',
  color: theme.colors.secondaryText,
  marginRight: '0.5em',
}));

const Task = styled.div({
  width: '70%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

const ColorChip = styled.div<{ color: string }>(({ theme, color }) => ({
  background: color,
  borderRadius: '50%',
  border: `2px solid ${theme.colors.secondaryBg}`,
  width: '1em',
  height: '1em',
  marginRight: '0.5em',
}));

const RemoveBtn = styled(Button)(({ theme }) => ({
  color: theme.colors.textColor,
  padding: 0,
  ':hover': {
    transform: 'scale(1.1)',
    transition: 'transform 150ms ease',
  },
}));
export default Todo;
