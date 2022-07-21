import iconArrowDown from 'assets/images/icon-arrowDown.svg';
import iconTrash from 'assets/images/icon-trash.svg';
import { Item, TodoAddProps } from 'modules/types';
import { memo, useCallback } from 'react';

import { Button } from '../Button';
import { List } from '../List';
import { TodoItem } from '../TodoItem';
import classes from './TodoAdd.module.css';

export const TodoAdd = memo((props: TodoAddProps) => {
  const { items, setItems, itemsDone, setItemsDone } = props;

  const onCheckChange = useCallback(
    (checkedItem: Item) => {
      const newItems = items.map((item) => {
        if (item.key === checkedItem.key) {
          item.done = !item.done;
        }
        return item;
      });
      setItems(newItems);
    },
    [items, setItems],
  );
  const TodoDoneLength = useCallback(() => {
    const newItemsDone = items.filter((item) => item.done === false);
    if (newItemsDone.length)
      return (
        <>
          <div className={classes.todoLength_alert}>
            <div
              className={`${classes.todoLength_progress} ${classes.todoLength_divider} fadeScaleUp`}
            >
              <span className={classes.done} data-test="todoLengthDone">
                {items.length - newItemsDone.length}
              </span>
              <span className={classes.all} data-test="todoLengthAll">
                {items.length}
              </span>
            </div>
            {items.length > 0 && (
              <p
                className={`${classes.todoLength_text} fadeScaleUp`}
                data-test="todoLengthMessage"
              >
                残り{newItemsDone.length}個です！その調子で取り組みましょう
              </p>
            )}
          </div>
        </>
      );
    return (
      <div className={classes.todoLength_alert}>
        <div className={`${classes.todoLength_progress} fadeScaleUp`}>0</div>
        <p
          className={`${classes.todoLength_text} fadeScaleUp`}
          data-test="todoLengthNothing"
        >
          タスクがありません
        </p>
      </div>
    );
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
    <div className="block">
      <div className={classes.blockUpper} data-test="blockUpper">
        <div className={classes.todoLength}>{TodoDoneLength()}</div>
        <List style={`${classes.todoList} fadeScaleUp`}>
          {items.map((item) => {
            return <TodoItem key={item.key} item={item} onCheck={onCheckChange} />;
          })}
        </List>
      </div>
      <div className={classes.blockBottom}>
        <Button onClick={onClickDelete} icon={iconArrowDown} alt="下矢印アイコン">
          完了済みを削除
        </Button>
        <Button onClick={onClickAllClear} icon={iconTrash} alt="ごみ箱アイコン">
          TODOリストを削除
        </Button>
      </div>
    </div>
  );
});

TodoAdd.displayName = 'TodoAdd';
