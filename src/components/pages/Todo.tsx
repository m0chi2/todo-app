import img_kv from 'assets/images/kv.svg';
import Card from 'components/blocks/Card';
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
      <div className={classes.main}>
        <section className={`${classes.todoTitleBlock} fadeIn`}>
          <div className={classes.todoTitle}>
            <h1 className={classes.todoHeading}>TODOリスト</h1>
            <p className={classes.todoText}>タスクを入力して達成を目指そう！</p>
          </div>
          <img src={img_kv} className={classes.todoKv} alt="" width={150} height={180} />
        </section>
        <section className={classes.todoCard_block}>
          <Card>
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
          </Card>
          <Card>
            <TodoDones itemsDone={itemsDone} />
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Todo;
