import { TodoItem } from 'components/block/TodoItem';
import { Item, TodoAddProps } from 'modules/types';
import { memo, useCallback } from 'react';

import classes from './TodoAdd.module.css';

const TodoAdd = memo((props: TodoAddProps) => {
  const { items, setItems, itemsDone, setItemsDone } = props;

  const onCheckChange = useCallback((checkedItem: Item) => {
    const newItems = items.map((item) => {
      if (item.key === checkedItem.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  }, []);
  const TodoDoneLength = useCallback(() => {
    const newItemsDone = items.filter((item) => item.done === false);
    if (newItemsDone.length)
      return (
        <span
          className={classes.todoLength_alert}
        >{`${newItemsDone.length}個のタスクが残っています`}</span>
      );
    return 'タスクはありません';
  }, [items]);

  const onClickDelete = () => {
    if (!items.length) return;
    const newItems = items.filter((item) => item.done === false);
    setItems(newItems);
    const newItemsDone = items.filter((item) => item.done === true);
    setItemsDone([...itemsDone, ...newItemsDone]);
  };

  const onClickAllClear = () => {
    const newItems: Array<Item> = [];
    setItems(newItems);
  };

  return (
    <div className={classes.block}>
      <div className={classes.blockUpper}>
        <div className={classes.todoLength}>{TodoDoneLength()}</div>
        {items.map((item) => {
          <TodoItem key={item.key} item={item} onCheck={onCheckChange} />;
        })}
      </div>
      <div className={classes.blockBottom}>
        <button className={classes.button} onClick={onClickDelete} type="button">
          完了済みを削除
        </button>
        <button
          className={`${classes.button} ${classes.button_clear}`}
          onClick={onClickAllClear}
          type="button"
        >
          やることをクリア
        </button>
      </div>
    </div>
  );
});

TodoAdd.displayName = 'TodoAdd';
export default TodoAdd;
