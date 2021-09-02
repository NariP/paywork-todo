import { FormEvent, ChangeEvent, useEffect, useState } from 'react';
import { LS_KEY } from 'utils/constants';
import { getFormattedDate, lsHelper } from 'utils';

export interface I_todo {
  id: number;
  task: string;
  createdAt: string;
  start: string;
  end: string;
  color: string;
  done: boolean;
  [key: string]: string | any;
}
const useTodoService = () => {
  const [value, setValue] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [color, setColor] = useState('#73C2FB');

  const [todos, setTodos] = useState<I_todo[] | []>([]);
  const [todo, setTodo] = useState<string>('');

  const [filter, setFilter] = useState<I_todo[] | null>(null);

  const taskHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const startHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStart(e.target.value);
  };
  const endHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnd(e.target.value);
  };
  const colorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    console.log(typeof e.target.value);
  };

  const updateStorage = (todos: I_todo[] | []): void => {
    lsHelper.setItem(LS_KEY.TODOS, todos);
  };

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) {
      alert('값을 채워주세요');
      return;
    }

    if (start && end) {
      const [startHour, startMinutes] = start.split(':');
      const [endHour, endMinutes] = end.split(':');

      if (+startHour > +endHour) {
        alert('시작 시간이 끝나는 시간과 같거나 이후일 수는 없습니다');
        return;
      }
      if (+startHour === +endHour && +startMinutes >= +endMinutes) {
        alert('시작 시간이 끝나는 시간과 같거나 이후일 수는 없습니다');
        return;
      }
    }
    setTodos([
      ...todos,
      {
        ...initialTodo,
        task: value,
        id: Date.now(),
        createdAt: getFormattedDate(new Date()),
        start,
        end,
        color,
      },
    ]);
    setTodo('');
  };

  const reset = () => {
    setValue('');
    setStart('');
    setEnd('');
    setColor('');
  };

  useEffect(() => {
    // 처음에 로컬 스토리지에서 데이터를 가져온다
    const localData = lsHelper.getItem(LS_KEY.TODOS);
    if (!localData) return;
    setTodos(localData);
  }, []);

  useEffect(() => {
    updateStorage(todos);
  }, [todos]);
  return {
    todos,
    setTodos,
    todo,
    value,
    start,
    end,
    color,
    addTodo,
    filter,
    setFilter,
    taskHandler,
    startHandler,
    endHandler,
    colorHandler,
    reset,
  };
};
const initialTodo: I_todo = {
  id: -1,
  task: '',
  createdAt: '',
  start: '',
  end: '',
  color: '#73C2FB',
  done: false,
};
export default useTodoService;
