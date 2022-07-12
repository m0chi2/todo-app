import TodoAdd from 'components/blocks/TodoAdd';
import TodoDones from 'components/blocks/TodoDones';
import TodoInput from 'components/blocks/TodoInput';
import { Item } from 'modules/types';
import { useCallback, useState } from 'react';

import classes from './Todo.module.css';

const getKey = () => Math.random().toString(32).substring(2);

const Todo = () => {
  const [items, setItems] = useState<Array<Item>>([
    { key: getKey(), text: 'サンプルTODO', done: false },
  ]);
  const [itemsDone, setItemsDone] = useState<Array<Item>>([]);
  const [text, setText] = useState<string>('');
  const [typing, setTyping] = useState<boolean>(false);

  const onAdd = useCallback(
    (inputText: string) => {
      setItems([...items, { key: getKey(), text: inputText, done: false }]);
    },
    [items],
  );

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.main}>
          <h1 className={classes.heading}>やることリスト</h1>
          <TodoInput
            onAdd={onAdd}
            text={text}
            setText={setText}
            typing={typing}
            setTyping={setTyping}
          />
          <TodoAdd
            items={items}
            setItems={setItems}
            itemsDone={itemsDone}
            setItemsDone={setItemsDone}
          />
        </div>
        <TodoDones itemsDone={itemsDone} />
      </div>
    </div>
  );
};

export default Todo;
