import { TodoItemProps } from 'modules/types';
import { memo } from 'react';

import classes from './TodoItem.module.css';
const TodoItem = memo((props: TodoItemProps) => {
  const { item, onCheck } = props;
  const handleChange = () => onCheck(item);
  return (
    <>
      <label className={classes.block}>
        <span
          className={item.done ? `${classes.text_done} ${classes.text}` : classes.text}
        >
          {item.text}
        </span>
        <input type="checkbox" checked={item.done} onChange={handleChange} />
      </label>
    </>
  );
});
TodoItem.displayName = 'TodoItem';
export default TodoItem;
